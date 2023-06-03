import React from "react";
import { DashboardCardPropType } from "../../../../types/common/dashboard-card.type";

const DashboardCard = ({ label, icon, stats }: DashboardCardPropType) => {
  return (
    <div
      className="py-6 px-6 max-w-[100%] flex-1 min-h-[141px] border rounded-lg flex items-center gap-9 "
      style={{ boxShadow: "0px 20px 25px rgba(76, 103, 100, 0.1)" }}
    >
      <div>{icon}</div>

      <div>
        <h2 className="text-[20px]">{label}</h2>
        <h1 className="text-[35px] font-bold">{stats}</h1>
      </div>
    </div>
  );
};

export default DashboardCard;
