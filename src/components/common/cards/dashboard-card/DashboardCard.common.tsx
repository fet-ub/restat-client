import React from 'react'
import { DashboardCardPropType } from '../../../../types/common/dashboard-card.type'

const DashboardCard = ({label,icon,stats}:DashboardCardPropType) => {
  return (
    <div
      className="py-6 px-6 max-w-[240px] max-h-[263px] border rounded-lg flex items-center gap-9  "
      style={{ boxShadow: "0px 20px 25px rgba(76, 103, 100, 0.1)" }}
    >
      <div>{icon}</div>

      <div>
        <h2 className="text-xl mt-1">{label}</h2>
        <h1 className="text-3xl mt-1 font-bold">{stats}</h1>
      </div>
    </div>
  );
}

export default DashboardCard