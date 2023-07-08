import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

import TextInput from "../../../common/inputs/text-input/TextInput.common";
import PasswordInput from "../../../common/inputs/password-input/PasswordInput.common";
import Button from "../../../common/buttons/Button.common";

const LoginTemplate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async () => {
    setLoading(true);

    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      //transaction-manager-cmr.herokuapp.com/
      await axios
        .get("http://localhost:8000/sanctum/csrf-cookie")
        .then(async () => {
          await axios
            .post(
              "http://localhost:8000/api/login",
              JSON.stringify({
                email: form.email,
                password: form.password,
              }),
              config
            )
            .then((response) => {
              console.log({ response: response.data });

              localStorage.setItem("accessToken", response.data.access_token);
              localStorage.setItem("role", response.data.role);
              localStorage.setItem("user", JSON.stringify(response.data.user));

              navigate("/dashboard");
            });
        });
    } catch (e) {
      console.log({ e });

      alert("Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = () => {
    navigate("/auth/forgot-password");
  };

  const [theme, setTheme] = useState<any>("light");

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      navigate("/dashboard");
    }
  }, [window.location.pathname]);

  return (
    <div className="w-full ">
      {/* form */}
      <h3 className="mb-8 text-4xl font-bold dark:text-white">
        {t("Welcome to", { ns: ["main", "home"] })}{" "}
        <span className="text-primary">Restat</span>
      </h3>

      <div className="mb-8">
        <TextInput
          label={t("Email", { ns: ["main", "home"] })}
          type="email"
          name="Email"
          id="Email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
      </div>

      <div className="mb-8">
        <PasswordInput
          label={t("Password", { ns: ["main", "home"] })}
          type="password"
          name="password"
          id="password"
          placeholder="******"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
      </div>

      <div className="mb-3 text-right">
        <p
          className="cursor-pointer text-[17px] font-medium text-primary"
          onClick={handleNavigation}
        >
          {t("Forgot Password?", { ns: ["main", "home"] })}
        </p>
      </div>

      <Button
        disable={loading}
        text={t("Login", { ns: ["main", "home"] })}
        fullWidth={true}
        buttonType="PRIMARY"
        onClick={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default LoginTemplate;
