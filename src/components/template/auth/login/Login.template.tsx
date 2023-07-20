import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import TextInput from "../../../common/inputs/text-input/TextInput.common";
import PasswordInput from "../../../common/inputs/password-input/PasswordInput.common";
import Button from "../../../common/buttons/Button.common";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { ApiRequestStatus } from "../../../../types/api.types";
import { loginUserThunk } from "../../../../app/feature/auth/thunks/login.thunk";
import { LoginRequestType } from "../../../../types/auth.type";
import { resetLoginState } from "../../../../app/feature/auth/slices/login.slice";
import {
  NotificationStatus,
  setNotificationState,
} from "../../../../app/feature/notification/notification.slice";

const LoginTemplate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginRequestType>({
    email: "",
    password: "",
  });
  const loginState = useAppSelector((state) => state.loginState);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleSubmit = async () => {
    dispatch(loginUserThunk(form));
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
    /* eslint-disable */
  }, [window.location.pathname]);

  useEffect(() => {
    if (loginState.status === ApiRequestStatus.FULFILLED) {
      dispatch(
        setNotificationState({
          message: "Successfully logged into your account.",
          status: NotificationStatus.SUCCESS,
        })
      );

      navigate("/dashboard");
      dispatch(resetLoginState());
    }

    if (loginState.status === ApiRequestStatus.REJECTED) {
      dispatch(
        setNotificationState({
          message: loginState.message,
          status: NotificationStatus.ERROR,
        })
      );
    }
  }, [loginState]);

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
          placeholder={t("Enter your email", { ns: ["main", "home"] })}
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
        disable={loginState.status === ApiRequestStatus.PENDING}
        text={t("Login", { ns: ["main", "home"] })}
        fullWidth={true}
        buttonType="PRIMARY"
        onClick={handleSubmit}
        loading={loginState.status === ApiRequestStatus.PENDING}
      />
    </div>
  );
};

export default LoginTemplate;
