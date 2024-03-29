import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "./dashboard.module.css";

import SidebarComponent from "../../components/dashboard/sidebar/Sidebar.component";
import { IconRepository } from "../../repository/icons/icon.repository";
import Image from "../../assets/images/image.png";
import Toggle from "../../components/common/toogle/Toggle.common";
import { useTranslation } from "react-i18next";
import Loader from "../../components/common/loader/Loader.common";
import { CONSTANTS } from "../../constants/constants";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { RootState } from "../../app/store/store";
import { getUsersThunk } from "../../app/feature/user/thunk/user.thunk";
import { getStudentsThunk } from "../../app/feature/student/thunk/student.thunk";
import { getCoursesThunk } from "../../app/feature/course/thunk/course.thunk";
import { getLecturersThunk } from "../../app/feature/lecturer/thunk/lecturer.thunk";
import { getStatsThunk } from "../../app/feature/stats/thunk/stats.thunk";
import { getResultsThunk } from "../../app/feature/results/thunk/results.thunk";
import { LocalStorage } from "../../storage/LocalStorage";

const DashboardPage = () => {
  const accessToken = useAppSelector(
    (state: RootState) => state.loginState
  ).accessToken;
  const [showLogout, setShowLogout] = useState(false);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [theme, setTheme] = useState<any>("light");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });
  const [role, setRole] = useState<any>("");
  const [loading, setLoading] = useState(true);

  // console.log(role);

  useEffect(() => {
    dispatch(getStatsThunk());
    dispatch(getStudentsThunk());
    dispatch(getUsersThunk());
    dispatch(getCoursesThunk());
    dispatch(getLecturersThunk());
    dispatch(getResultsThunk());

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      // console.log(localStorage.theme);
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      // console.log(localStorage.theme);
      setTheme("dark");
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem(CONSTANTS.STORAGE_KEY.CURRENT_USER);
    const userRoleInfo = localStorage.getItem(CONSTANTS.STORAGE_KEY.USER_ROLE);

    if (!userInfo && accessToken === null) {
      navigate("/auth/login");
    } else {
      setUser(JSON.parse(userInfo as string));
      setRole(userRoleInfo);
    }
    // eslint-disable-next-line
  }, [window.location.pathname]);

  useEffect(() => {
    if (user?.firstName?.length > 0) {
      setLoading(false);
    }
  }, [user]);

  const capitalizeFirstLetter = (string: any) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  // console.log(user);

  return (
    <div className={`${styles.dashboard} bg-white dark:bg-tertiary`}>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className={styles.sidebar}>
            <SidebarComponent />
          </div>
          <div className={`${styles.content}  bg-white dark:bg-tertiary`}>
            <div className={styles.header}>
              <h2 title="FET" className="text-secondary dark:text-white">
                {t("Faculty of Engineering and Technology", {
                  ns: ["main", "home"],
                })}
              </h2>
              <div className={styles.items}>
                <div>
                  <Toggle onClick={handleThemeSwitch} />
                </div>
                <div className={styles.icon}>
                  <IconRepository.BellIcon width={32} height={32} />
                  <span>2</span>
                </div>

                <div
                  onClick={() => {
                    setShowLogout(!showLogout);
                  }}
                  className={styles.user}
                >
                  <div className={styles.profile}>
                    <img src={Image} alt="profile" />
                    {/* <IconRepository.ProfileIcon /> */}
                  </div>
                  <div className="dark:text-white">
                    <h2 className="dark:text-white">
                      {user?.firstName} {user?.lastName}
                    </h2>
                    <h3>{capitalizeFirstLetter(role)}</h3>
                  </div>

                  {showLogout ? (
                    <div className={styles.logout}>
                      <button
                        onClick={() => {
                          LocalStorage.removeLoginData();
                          window.location.reload();
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
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
