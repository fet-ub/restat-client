import React, { useState } from "react";

import styles from "./settings.module.css";

import Tabs from "../../../components/common/tabs/Tabs";
import PersonalInfo from "./modules/personal-info/PersonalInfo";
import PasswordChange from "./modules/password/Password";
import EmailChange from "./modules/email-change/EmailChange";
import LanguageChange from "./modules/language/LanguageChange";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={`${styles.settings}`}>
      <Tabs
        activeIndex={activeTab}
        setActiveIndex={setActiveTab}
        labels={[
          "Personal Information",
          "Password",
          "Email",
          "Language",
        ]}
      />

      <div className={styles.content}>
        {activeTab === 0 ? <PersonalInfo /> : ""}
        {activeTab === 1 ? <PasswordChange /> : ""}
        {activeTab === 2 ? <EmailChange /> : ""}
        {activeTab === 3 ? <LanguageChange /> : ""}
      </div>
    </div>
  );
};

export default SettingsPage;
