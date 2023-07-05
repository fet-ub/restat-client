import React, { useState } from "react";

import styles from "../personal-info/personalinfo.module.css";

import Button from "../../../../../components/common/buttons/Button.common";
import PasswordInput from "../../../../../components/common/inputs/password-input/PasswordInput.common";
import { useTranslation } from "react-i18next";

const PasswordChange = () => {
    const { t } = useTranslation();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className={styles.form}>
      <PasswordInput
        placeholder="*******"
        label={t("Current Password", { ns: ["main", "home"] })}
        type="password"
        id="currentPassword"
        name="currentPassword"
        value={form.currentPassword}
        onChange={(e) => {
          setForm({ ...form, currentPassword: e.target.value });
        }}
      />
      <PasswordInput
        placeholder="*******"
        label={t("New Password", { ns: ["main", "home"] })}
        type="password"
        id="newPassword"
        name="newPassword"
        value={form.newPassword}
        onChange={(e) => {
          setForm({ ...form, newPassword: e.target.value });
        }}
      />
      <PasswordInput
        placeholder="*******"
        label={t("Re-Type New Password", { ns: ["main", "home"] })}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={(e) => {
          setForm({ ...form, confirmPassword: e.target.value });
        }}
      />
      <Button
        text={t("Update Password", { ns: ["main", "home"] })}
        fullWidth={true}
        buttonType="PRIMARY"
      />
    </div>
  );
};

export default PasswordChange;
