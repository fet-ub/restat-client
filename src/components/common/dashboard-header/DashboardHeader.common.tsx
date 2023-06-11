import React from 'react'

import { IconRepository } from '../../../repository/icons/icon.repository';
import Button from '.././buttons/Button.common'
import { DashboardHeaderPropType } from '../../../types/common/dashboard-header/dashboard-header.type';

const DashboardHeader = ({label,ButtonText,onClick,displayButton}:DashboardHeaderPropType) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-[2.4rem] font-bold ">{label}</h2>
      </div>

      {displayButton && (
        <div>
          <Button
            text={ButtonText}
            buttonType="PRIMARY"
            icon={<IconRepository.PlusIcon height={18} width={18} />}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
}

export default DashboardHeader