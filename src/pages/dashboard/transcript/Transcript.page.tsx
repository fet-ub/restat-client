import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common'
import SelectInput from '../../../components/common/inputs/select-input/SelectInput.common';
import { ENGINEERING_DEPARTMENTS ,COURSE_LEVELS,SEMESTER} from '../../../repository/constants/constants';
import Button from '../../../components/common/buttons/Button.common';

const TranscriptPage = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DashboardHeader
        label={"Transcript"}
        ButtonText="Add New User"
        onClick={() => setIsOpen(true)}
        displayButton={false}
      />

      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold">Request for Transcript</h2>
        </div>

        <div className='w-[50%] mt-10 flex flex-col gap-9'>
          <SelectInput
            selectOptions={COURSE_LEVELS}
            label="Year"
            value=""
          />
          <SelectInput
            selectOptions={SEMESTER}
            label="Semester"
            value=""
          />
          <Button text="Send Request" buttonType="PRIMARY" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}

export default TranscriptPage