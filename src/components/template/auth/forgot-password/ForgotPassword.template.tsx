import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextInput from "../../../common/inputs/text-input/TextInput.common";
import Button from "../../../common/buttons/Button.common";
import { useTranslation } from "react-i18next";



const ForgotPasswordTemplate = () => {
    const { t } = useTranslation();
     const navigate = useNavigate();
    const [form, setForm] = useState({
      email: "",
     
    });
     const handleSubmit = () => {
       navigate("/dashboard");
     };
  return (
    <div className="w-full text-4xl font-bold mb-12 dark:text-white">
      <h3> {t("Reset Your Password", { ns: ["main", "home"] })}</h3>

      <div className="mb-12 mt-6">
        <TextInput
          label={t("Email", { ns: ["main", "home"] })}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
      </div>

      <div>
        <Button
          text="Submit"
          fullWidth={true}
          buttonType="PRIMARY"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordTemplate;
