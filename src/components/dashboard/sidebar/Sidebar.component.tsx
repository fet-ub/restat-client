import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";

import { IconRepository } from "../../../repository/icons/icon.repository";
import SidebarLinksComponent from "../sidebar-links/SidebarLinks.component";
import { useTranslation } from "react-i18next";

// import { DashboardDefaultType } from "../../../default";
// import { IconPropsType } from "../../../types";

export enum DashboardType {
  DEAN = 0,
  HOD = 1,
  COORDINATOR = 2,
  LECTURER = 3,
  SECRETARY = 4,
  STUDENT = 5,
}

export type DataLinksType = {
  link: string;
  label: string;
  icon: JSX.Element;
  notifications: number;
  ref?: DashboardType[];
};

// const renderDashboardLinks = (dataSource: DataLinksType[]) => {

//   return (
//     <>
//       {dataSource.length > 0 &&
//         dataSource.map((link, index) => {
//           return (
//             <Fragment key={index}>
//               {link.ref !== undefined &&
//               link.ref.includes(DashboardDefaultType) ? (
//                 <li className={styles.list}>
//                   <Link
//                     className={`${styles.link} ${
//                       location.pathname === link.link ? styles.active : ""
//                     }`}
//                     to={link.link}
//                   >
//                     <span>{link.icon}</span>
//                     {link.label}
//                   </Link>
//                 </li>
//               ) : (
//                 ""
//               )}
//             </Fragment>
//           );
//         })}
//     </>
//   );
// };

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
    },
    {
      link: "/dashboard/students",
      label: t("Students", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.StudentIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/courses",
      label: t("Courses", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.BooksIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/users",
      label: t("Users", { ns: ["main", "home"] }),
      notifications: 4,
      icon: <IconRepository.UsersIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/transcript",
      label: t("Transcript", { ns: ["main", "home"] }),
      notifications: 4,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/settings",
      label: t("Settings", { ns: ["main", "home"] }),
      notifications: 0,
      icon: <IconRepository.SettingsIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/ca",
      label: t("CA", { ns: ["main", "home"] }),
      notifications: 1,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/exam",
      label: t("Exam", { ns: ["main", "home"] }),
      notifications: 1,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
    },
    {
      link: "/dashboard/encrypt-ca",
      label: t("Encrypt CA", { ns: ["main", "home"] }),
      notifications: 1,
      icon: <IconRepository.CertificateIcon width={24} height={24} />,
    },
  ];

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
