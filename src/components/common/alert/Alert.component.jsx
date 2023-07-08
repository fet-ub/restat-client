import React from "react";

import styles from "./alertcomponent.module.css";

import { useAppSelector } from "../../../lib/hooks";
import { NotificationStatus } from "../../../app/feature/notification/notification.slice";

const AlertComponent = () => {
  const notification = useAppSelector((state) => state.notificationState);

  return (
    <div
      className={`${styles.alert} ${
        notification.status === NotificationStatus.HIDDEN ? styles.hidden : ""
      } ${
        notification.status === NotificationStatus.ERROR
          ? styles.error
          : styles.success
      }`}
    >
      <h2>
        {notification.status === NotificationStatus.ERROR ? "Error" : "Success"}
        !
      </h2>
      <h3>{notification.message}</h3>
    </div>
  );
};

export default AlertComponent;
