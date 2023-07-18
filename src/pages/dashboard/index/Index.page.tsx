import React from "react";
// { useEffect }
import styles from "./index.module.css";

import DashboardCard from "../../../components/common/cards/dashboard-card/DashboardCard.common";
import { IconRepository } from "../../../repository/icons/icon.repository";
import DoughnutChart from "../../../components/common/chart/DoughnutChart.component";
import LineChart from "../../../components/common/chart/LineChart.component";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../lib/hooks";
import { RootState } from "../../../app/store/store";
// import getStudentsSlice from "../../../app/feature/student/slice/getStudents.slice";
// import { getStudentsThunk } from "../../../app/feature/student/thunk/student.thunk";
// import { getUsersThunk } from "../../../app/feature/user/thunk/user.thunk";
// import { getCoursesThunk } from "../../../app/feature/course/thunk/course.thunk";

const IndexPage = () => {
  const { t } = useTranslation();
  // const dispatch = useAppDispatch();
  const getCoursesState = useAppSelector(
    (state: RootState) => state.getCoursesState
  );
  const getStudentsState = useAppSelector(
    (state: RootState) => state.getStudentsState
  );
  const getUsersState = useAppSelector(
    (state: RootState) => state.getUsersState
  );
  const getLecturersState = useAppSelector(
    (state: RootState) => state.getLecturersState
  );
  const getStatsState = useAppSelector(
    (state: RootState) => state.getStatsState
  );
  const getResultsState = useAppSelector(
    (state: RootState) => state.getResultsState
  );

  // console.log("results", getResultsState);
  // console.log("stats", getStatsState);

  const dashboardCardData = [
    {
      label: t("Students", { ns: ["main", "home"] }),
      stats: getStudentsState?.students?.length,
      icon: <IconRepository.DashboardStudentIcon width={70} height={70} />,
    },
    {
      label: t("Courses", { ns: ["main", "home"] }),
      stats: getCoursesState?.courses?.length,
      icon: <IconRepository.DashboardBooksIcon width={70} height={70} />,
    },
    {
      label: t("Users", { ns: ["main", "home"] }),
      stats: getUsersState?.users.length,
      icon: <IconRepository.PersonIcon width={70} height={70} />,
    },
    {
      label: t("Lecturers", { ns: ["main", "home"] }),
      stats: getLecturersState?.lecturers.length,
      icon: <IconRepository.PersonIcon width={70} height={70} />,
    },
  ];
  return (
    <div className={styles.dashboard}>
      <div className={styles.head}>
        <h2 className="text-secondary dark:text-white">
          {t("Dashboard", { ns: ["main", "home"] })}
        </h2>
      </div>

      <div className={styles.grid}>
        {dashboardCardData.map((card, index) => {
          return (
            <DashboardCard
              key={index}
              label={card.label}
              icon={<>{card.icon}</>}
              stats={card.stats}
            />
          );
        })}
      </div>

      <div>
        <div className="flex ">
          <DoughnutChart />
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
