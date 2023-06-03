import React from "react";

import styles from "./index.module.css";

import DashboardCard from "../../../components/common/cards/dashboard-card/DashboardCard.common";
import { IconRepository } from "../../../repository/icons/icon.repository";
import DoughnutChart from "../../../components/common/chart/DoughnutChart.component";
import LineChart from "../../../components/common/chart/LineChart.component";

const IndexPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.head}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.grid}>
        {Array(4)
          .fill(0)
          .map((_i, index) => {
            return (
              <DashboardCard
                key={index}
                label="Students"
                icon={
                  <>
                    <IconRepository.DashboardStudentIcon
                      width={70}
                      height={70}
                    />
                  </>
                }
                stats={200}
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
