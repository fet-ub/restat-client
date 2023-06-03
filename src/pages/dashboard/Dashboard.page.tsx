import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./dashboard.module.css";

import SidebarComponent from "../../components/dashboard/sidebar/Sidebar.component";
import { IconRepository } from "../../repository/icons/icon.repository";
import Image from "../../assets/images/image.png";

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <SidebarComponent />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 title="FET">Faculty Of Engineering and Technology</h2>
          <div className={styles.items}>
            <div className={styles.icon}>
              <IconRepository.CloseCircleIcon width={32} height={32} />
            </div>
            <div className={styles.icon}>
              <IconRepository.CloseCircleIcon width={32} height={32} />
              <span>2</span>
            </div>

            <div className={styles.user}>
              <div className={styles.profile}>
                <img src={Image} alt="profile" />
              </div>
              <div>
                <h2>Joseph</h2>
                <h3>FE19A000</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modules}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
