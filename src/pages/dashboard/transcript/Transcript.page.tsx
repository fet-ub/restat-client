import React, { useState } from 'react';
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common';
import SelectInput from '../../../components/common/inputs/select-input/SelectInput.common';
import {
  SEMESTER,
  ACADEMIC_YEAR,
} from '../../../repository/constants/constants';
import Button from '../../../components/common/buttons/Button.common';
// import DateInput from "../../../components/common/inputs/date-input/DateInput";
import { useTranslation } from 'react-i18next';

const TranscriptPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    year: '',
    semester: '',
  });

  return (
    <div className="bg-white dark:bg-tertiary w-full h-full ">
      <DashboardHeader
        label={t('Transcript', { ns: ['main', 'home'] })}
        ButtonText="Add New User"
        displayButton={false}
      />

      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {t('Request for Transcript', { ns: ['main', 'home'] })}
          </h2>
        </div>

        <div className="w-[50%] mt-10 flex flex-col gap-9">
          {/* <DateInput
            label="Year"
            name="year"
            value={form.semester}
            onChange={(e) => {
              setForm({ ...form, semester: e.target.value });
            }}
          /> */}
          <SelectInput
            selectOptions={ACADEMIC_YEAR}
            placeholder="year"
            label={t('Year', { ns: ['main', 'home'] })}
            onChange={(e) => {
              setForm({ ...form, semester: e.target.value });
            }}
            value={form.semester}
          />
          <SelectInput
            selectOptions={SEMESTER}
            placeholder="semester"
            label={t('Semester', { ns: ['main', 'home'] })}
            onChange={(e) => {
              setForm({ ...form, year: e.target.value });
            }}
            value={form.year}
          />
          <Button
            text={t('Send Request', { ns: ['main', 'home'] })}
            buttonType="PRIMARY"
            fullWidth={true}
            // loading={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TranscriptPage;
