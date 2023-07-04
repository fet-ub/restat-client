import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import TextInput from "../../../common/inputs/text-input/TextInput.common";
import PasswordInput from "../../../common/inputs/password-input/PasswordInput.common";
import Button from "../../../common/buttons/Button.common";

const LoginTemplate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { t } = useTranslation();

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  const handleNavigation = () => {
    navigate("/auth/forgot-password");
  };

  const [theme, setTheme] = useState<any>("light");

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark"  || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark");
      setTheme('dark')
    } else {
      document.documentElement.classList.remove("dark");
      setTheme('light')
    }
  }, [theme]);

  return (
    <div className="w-full ">
      {/* form */}
      <h3 className="mb-8 text-4xl font-bold dark:text-white">
        {t("Welcome", { ns: ["main", "home"] })} to{" "}
        <span className="text-primary">Restat</span>
      </h3>

      <div className="mb-8">
        <TextInput
          label="Email"
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
          label="Password"
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
          Forgot Password?
        </p>
      </div>

      <Button
        text="Login"
        fullWidth={true}
        buttonType="PRIMARY"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default LoginTemplate;
