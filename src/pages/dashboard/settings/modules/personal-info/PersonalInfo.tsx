import React, { useState } from "react";

import styles from "./personalinfo.module.css";

import TextInput from "../../../../../components/common/inputs/text-input/TextInput.common";
import Button from "../../../../../components/common/buttons/Button.common";
import { IconRepository } from "../../../../../repository/icons/icon.repository";
import Image from "../../../../../assets/images/image.png";
import { useTranslation } from "react-i18next";

const PersonalInfo = () => {
    const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div className={styles.form}>
      <div className={styles.profile}>
        <img width={100} height={100} src={Image} alt="profile" />
        <div title="Upload new profile picture" className={styles.selector}>
          <span>
            <IconRepository.DownloadIcon height={25} color="#fff" />
          </span>
          <div className={styles.input}>
            <input type="file" />
          </div>
        </div>
      </div>

      <TextInput
        placeholder="Tabe"
        label={t("First Name", { ns: ["main", "home"] })}
        type="text"
        id="firstName"
        name="firstName"
        value={form.firstName}
        onChange={(e) => {
          setForm({ ...form, firstName: e.target.value });
        }}
      />
      <TextInput
        placeholder="Tabe"
        label={t("Last Name", { ns: ["main", "home"] })}
        type="text"
        id="lastName"
        name="LastName"
        value={form.lastName}
        onChange={(e) => {
          setForm({ ...form, lastName: e.target.value });
        }}
      />

      <Button
        text={t("Edit Info", { ns: ["main", "home"] })}
        fullWidth={true}
        buttonType="PRIMARY"
      />
    </div>
  );
};

export default PersonalInfo;
