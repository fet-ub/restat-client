import React, { useState } from "react";

import styles from "../personal-info/personalinfo.module.css";

import TextInput from "../../../../../components/common/inputs/text-input/TextInput.common";
import Button from "../../../../../components/common/buttons/Button.common";

const PasswordChange = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className={styles.form}>
      <TextInput
        placeholder="*******"
        label="Current Password"
        type="password"
        id="currentPassword"
        name="currentPassword"
        value={form.currentPassword}
        onChange={(e) => {
          setForm({ ...form, currentPassword: e.target.value });
        }}
      />
      <TextInput
        placeholder="*******"
        label="New Password"
        type="password"
        id="newPassword"
        name="newPassword"
        value={form.newPassword}
        onChange={(e) => {
          setForm({ ...form, newPassword: e.target.value });
        }}
      />
      <TextInput
        placeholder="*******"
        label="Re-Type New Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={(e) => {
          setForm({ ...form, confirmPassword: e.target.value });
        }}
      />
      <Button text="Update Password" fullWidth={true} buttonType="PRIMARY" />
    </div>
  );
};

export default PasswordChange;
