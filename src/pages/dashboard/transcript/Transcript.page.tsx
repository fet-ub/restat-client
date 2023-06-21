import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common'
import SelectInput from '../../../components/common/inputs/select-input/SelectInput.common';
import { SEMESTER,ACADEMIC_YEAR} from '../../../repository/constants/constants';
import Button from '../../../components/common/buttons/Button.common';

const TranscriptPage = () => {
  const [form, setForm] = useState({
    year: "",
   semester : "",
  });

  return (
    <div className="bg-white dark:bg-tertiary w-full h-full ">
      <DashboardHeader
        label={"Transcript"}
        ButtonText="Add New User"
        displayButton={false}
      />

      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            Request for Transcript
          </h2>
        </div>

        <div className="w-[50%] mt-10 flex flex-col gap-9">
          <SelectInput
            selectOptions={ACADEMIC_YEAR}
            label="Year"
            onChange={(e) => {
              setForm({ ...form, semester: e.target.value });
            }}
            value={form.semester}
          />
          <SelectInput
            selectOptions={SEMESTER}
            label="Semester"
            onChange={(e) => {
              setForm({ ...form, year: e.target.value });
            }}
            value={form.year}
          />
          <Button text="Send Request" buttonType="PRIMARY" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}

export default TranscriptPage