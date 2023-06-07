import React from "react";

import styles from "./index.module.css";

import DashboardCard from "../../../components/common/cards/dashboard-card/DashboardCard.common";
import { IconRepository } from "../../../repository/icons/icon.repository";
import DoughnutChart from "../../../components/common/chart/DoughnutChart.component";
import LineChart from "../../../components/common/chart/LineChart.component";

const IndexPage = () => {

  const dashboardCardData = [
    {
      label: "Students",
      stats: 200,
      icon: <IconRepository.DashboardStudentIcon width={70} height={70} />,
    },
    {
      label: "Courses",
      stats: 50,
      icon: <IconRepository.DashboardBooksIcon width={70} height={70} />,
    },
    {
      label: "Users",
      stats: 10,
      icon: <IconRepository.PersonIcon width={70} height={70} />,
    },
    {
      label: "Lecturers",
      stats: 20,
      icon: <IconRepository.PersonIcon width={70} height={70} />,
    },
  ];
  return (
    <div className={styles.dashboard}>
      <div className={styles.head}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.grid}>
        {dashboardCardData.map((card,index)=>{
          return (
            <DashboardCard
              key={index}
              label={card.label}
              icon={
                <>
                  {card.icon}
                </>
              }
              stats={card.stats}
            />
          );
        }) 
            
         }
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
