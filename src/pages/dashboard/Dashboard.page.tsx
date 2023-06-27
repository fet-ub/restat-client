import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "./dashboard.module.css";

import SidebarComponent from "../../components/dashboard/sidebar/Sidebar.component";
import { IconRepository } from "../../repository/icons/icon.repository";
import Image from "../../assets/images/image.png";
import Toggle from "../../components/common/toogle/Toggle.common";

const DashboardPage = () => {
  const [theme, setTheme] = useState<any>("light");
  const [user, setUser] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (!userInfo) {
      navigate("/auth/login");
    } else {
      setUser(JSON.parse(userInfo));
    }
  }, [window.location.pathname]);

  useEffect(() => {
    if (user?.name.length > 0) {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className={`${styles.dashboard} bg-white dark:bg-tertiary`}>
      {loading ? (
        <div>Loading dashboard information...</div>
      ) : (
        <>
          <div className={styles.sidebar}>
            <SidebarComponent />
          </div>
          <div className={`${styles.content}  bg-white dark:bg-tertiary`}>
            <div className={styles.header}>
              <h2 title="FET" className="text-secondary dark:text-white">
                Faculty Of Engineering and Technology
              </h2>
              <div className={styles.items}>
                <div>
                  <Toggle onClick={handleThemeSwitch} />
                </div>
                <div className={styles.icon}>
                  <IconRepository.BellIcon width={32} height={32} />
                  <span>2</span>
                </div>

                <div className={styles.user}>
                  <div className={styles.profile}>
                    <img src={Image} alt="profile" />
                  </div>
                  <div className="dark:text-white">
                    <h2 className="dark:text-white">{user?.name}</h2>
                    <h3>FE19A000</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.modules} dark:bg-tertiary`}>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
