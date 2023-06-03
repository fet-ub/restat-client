import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";

import { IconRepository } from "../../../repository/icons/icon.repository";
import SidebarLinksComponent from "../sidebar-links/SidebarLinks.component";

const dataSet = [
  {
    link: "/dashboard",
    label: "Dashboard",
    notifications: 0,
    icon: <IconRepository.DashboardIcon width={24} height={24} />,
  },
  {
    link: "/dashboard/users",
    label: "Users",
    notifications: 4,
    icon: <IconRepository.UsersIcon width={24} height={24} />,
  },
  {
    link: "/dashboard/settings",
    label: "Settings",
    notifications: 0,
    icon: <IconRepository.SettingsIcon width={24} height={24} />,
  },
];

const SidebarComponent = () => {
    const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <IconRepository.LogoIcon className={styles.icon} />
        <h2>Restat</h2>
      </div>

      <ul className={styles.sidebar__menu}>
        {dataSet.length > 0 &&
          dataSet.map((dataSetItem) => {
            return (
              <SidebarLinksComponent
                link={dataSetItem.link}
                text={dataSetItem.label}
                key={dataSetItem.label}
                notifications={dataSetItem.notifications}
                active={location.pathname === dataSetItem.link}
                icon={dataSetItem.icon}
              />
            );
          })}
      </ul>
    </aside>
  );
};

export default SidebarComponent;
