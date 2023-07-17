import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";

import { IconRepository } from "../../../repository/icons/icon.repository";
import SidebarLinksComponent from "../sidebar-links/SidebarLinks.component";
import { useTranslation } from "react-i18next";
import { CONSTANTS } from "../../../constants/constants";

// import { DashboardDefaultType } from "../../../default";
// import { IconPropsType } from "../../../types";

export enum DashboardType {
  ADMIN = 0,
  DEAN = 1,
  HOD = 2,
  COORDINATOR = 3,
  LECTURER = 4,
  SUPPORT_STAFF = 5,
  EXAMINER = 6,
  STUDENT = 7,
}

// console.log(DashboardDefaultType);

// useEffect(() => {}, []);

export type DataLinksType = {
  link: string;
  label: string;
  icon: JSX.Element;
  notifications: number;
  ref?: DashboardType[];
};

const SidebarComponent = () => {
  //  const [stateMutation, setStateMutation] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const dataSet: DataLinksType[] = [
    {
      link: "/dashboard",
      label: t("Dashboard", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.DashboardIcon width={24} height={24} />,
      ref: [DashboardType.ADMIN, DashboardType.DEAN, DashboardType.HOD],
    },
    {
      link: "/dashboard/students",
      label: t("Students", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.StudentIcon width={24} height={24} />,
      ref: [
        DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
      ],
    },
    {
      link: "/dashboard/courses",
      label: t("Courses", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.BooksIcon width={24} height={24} />,
      ref: [
        DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
      ],
    },
    {
      link: "/dashboard/users",
      label: t("Users", { ns: ["main", "home"] }),
      notifications: 4,
      icon: <IconRepository.UsersIcon width={24} height={24} />,
      ref: [
        DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
      ],
    },
    {
      link: "/dashboard/transcript",
      label: t("Transcript", { ns: ["main", "home"] }),
      notifications: 4,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
      ref: [DashboardType.STUDENT],
    },
    {
      link: "/dashboard/settings",
      label: t("Settings", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.SettingsIcon width={24} height={24} />,
      ref: [
        DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
        DashboardType.STUDENT,
      ],
    },
    {
      link: "/dashboard/ca",
      label: t("CA", { ns: ["main", "home"] }),
      notifications: 1,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
      ref: [
        DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
        DashboardType.LECTURER,
      ],
    },
    {
      link: "/dashboard/exam",
      label: t("Exam", { ns: ["main", "home"] }),
      notifications: 1,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
      ref: [
        DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
        DashboardType.LECTURER,
        DashboardType.EXAMINER,
        DashboardType.SUPPORT_STAFF,
      ],
    },
    {
      link: "/dashboard/encrypt-ca",
      label: t("Encrypt CA", { ns: ["main", "home"] }),
      notifications: 1,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
      ref: [
        // DashboardType.ADMIN,
        DashboardType.DEAN,
        DashboardType.HOD,
        DashboardType.COORDINATOR,
        DashboardType.LECTURER,
        DashboardType.EXAMINER,
        DashboardType.SUPPORT_STAFF,
      ],
    },
  ];

  const [stateMutation, setStateMutation] = useState(false);
  const [currentRole, setCurrentRole] = useState<DashboardType>(
    DashboardType.ADMIN
  );

  useEffect(() => {
    const role = localStorage.getItem(CONSTANTS.STORAGE_KEY.USER_ROLE);

    // const [, set] = useState();

    role === "admin"
      ? setCurrentRole(DashboardType.ADMIN)
      : role === "dean"
      ? setCurrentRole(DashboardType.DEAN)
      : role === "hod"
      ? setCurrentRole(DashboardType.HOD)
      : role === "coordinator"
      ? setCurrentRole(DashboardType.COORDINATOR)
      : role === "student"
      ? setCurrentRole(DashboardType.STUDENT)
      : role === "supportStaff"
      ? setCurrentRole(DashboardType.SUPPORT_STAFF)
      : role === "lecturer"
      ? setCurrentRole(DashboardType.LECTURER)
      : role === "Examiner"
      ? setCurrentRole(DashboardType.EXAMINER)
      : setCurrentRole(DashboardType.ADMIN);
  }, [location.pathname]);

  useEffect(() => {
    setStateMutation(!stateMutation);
  }, [location.pathname]);

  const renderDashboardLinks = (dataSource: DataLinksType[]) => {
    return (
      <>
        {dataSource.length > 0 &&
          dataSource.map((dataSetItem, index) => {
            return (
              <Fragment key={index}>
                {dataSetItem.ref !== undefined &&
                dataSetItem.ref.includes(currentRole) ? (
                  <SidebarLinksComponent
                    link={dataSetItem.link}
                    text={dataSetItem.label}
                    key={dataSetItem.label}
                    notifications={dataSetItem.notifications}
                    active={location.pathname === dataSetItem.link}
                    icon={dataSetItem.icon}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </>
    );
  };
  //  useEffect(() => {
  //    setStateMutation(!stateMutation);
  //  }, [location.pathname]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <IconRepository.LogoIcon className={styles.icon} />
        <h2>Restat</h2>
      </div>

      <ul className={styles.sidebar__menu}>
        {renderDashboardLinks(dataSet)}
        {/* {dataSet.length > 0 &&
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
          })} */}
      </ul>
    </aside>
  );
};

export default SidebarComponent;
