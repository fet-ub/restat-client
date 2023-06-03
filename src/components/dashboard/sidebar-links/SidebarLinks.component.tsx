import React from "react";
import { Link } from "react-router-dom";

import styles from "./sidebarlinks.module.css";

const SidebarLinksComponent = ({
  icon,
  text,
  link,
  active,
  notifications
}: {
  icon: JSX.Element;
  text: string;
  link: string;
  active: boolean;
  notifications: number
}) => {
  return (
    <li className={`${styles.list} ${active ? styles.active : ""}`}>
      <Link to={link} className={styles.link}>
        {icon}
        <h4>{text} {notifications > 0 ? <span>{notifications}</span> : ''}</h4>
      </Link>
    </li>
  );
};

export default SidebarLinksComponent;
