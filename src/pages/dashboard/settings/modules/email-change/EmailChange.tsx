import React, { useState } from "react";

import styles from "../personal-info/personalinfo.module.css";

import TextInput from "../../../../../components/common/inputs/text-input/TextInput.common";
import Button from "../../../../../components/common/buttons/Button.common";
import { useTranslation } from "react-i18next";

const EmailChange = () => {
    const { t } = useTranslation();
  const [form, setForm] = useState({
    newEmail: "",
  });

  return (
    <div className={styles.form}>
      <TextInput
        placeholder="joseph@gmail.com"
        label={t("Email Address", { ns: ["main", "home"] })}
        type="text"
        id="newEmail"
        name="newEmail"
        value={form.newEmail}
        onChange={(e) => {
          setForm({ ...form, newEmail: e.target.value });
        }}
      />
      <Button
        text={t("Update Email", { ns: ["main", "home"] })}
        fullWidth={true}
        buttonType="PRIMARY"
      />
    </div>
  );
};

export default EmailChange;
