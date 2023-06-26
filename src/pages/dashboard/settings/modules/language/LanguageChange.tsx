import React from "react";
import { useTranslation } from "react-i18next";

import styles from "../personal-info/personalinfo.module.css";
import { LocalStorage } from "../../../../../storage/LocalStorage";

const LanguageChange = () => {
  const { i18n } = useTranslation(["home", "main"]);
  const lang = LocalStorage.getAppLang().appLang
    ? LocalStorage.getAppLang().appLang
    : "en";
  const { t } = useTranslation();

  const handleLanguageConvertion = async (lang: string) => {
    LocalStorage.storeAppLang(lang);

    await i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.form}>
      <h2 className="text-secondary dark:text-white">
        {t("Select Language Below:", { ns: ["main", "home"] })}
      </h2>
      <div
        onClick={() => {
          handleLanguageConvertion("en");
        }}
        className={styles.lang}
      >
        <div className={`${lang === "en" ? styles.active : ""}`}></div>
        <h4 className="text-secondary dark:text-white">English</h4>
      </div>
      <div
        onClick={() => {
          handleLanguageConvertion("fr");
        }}
        className={styles.lang}
      >
        <div className={`${lang === "fr" ? styles.active : ""}`}></div>
        <h4 className="text-secondary dark:text-white">French</h4>
      </div>
    </div>
  );
};

export default LanguageChange;
