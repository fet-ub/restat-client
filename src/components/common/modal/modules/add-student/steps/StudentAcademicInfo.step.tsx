import React from 'react'
import TextInput from '../../../../inputs/text-input/TextInput.common';
import SelectInput from '../../../../inputs/select-input/SelectInput.common';
import { COMPUTER_PROGRAMS, COURSE_LEVELS, ENGINEERING_DEPARTMENTS, SCHOOL_YEAR } from '../../../../../../repository/constants/constants';
import Button from '../../../../buttons/Button.common';

const StudentAcademicInfoStep = ({
  form,
  setForm,
  setCurrentStep
}: {
  form: {
    firstname: string;
    lastname: string;
    gender: string;
    status: string;
    dob: string;
    pob: string;
    region: string;
    address: string;
    country: string;
    idCard: string;
    email: string;
    matricule: string;
    level: string;
    year: string;
    faculty: string;
    department: string;
    program: string;
    certificate: string;
    yearObtained: string;
    guardianFirstName: string;
    guardianLastName: string;
    guardianEmail: string;
    guardianAddress: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      firstname: string;
      lastname: string;
      gender: string;
      status: string;
      dob: string;
      pob: string;
      region: string;
      address: string;
      country: string;
      idCard: string;
      email: string;
      matricule: string;
      level: string;
      year: string;
      faculty: string;
      department: string;
      program: string;
      certificate: string;
      yearObtained: string;
      guardianFirstName: string;
      guardianLastName: string;
      guardianEmail: string;
      guardianAddress: string;
    }>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mt-5 mb-4 dark:bg-tertiary">
      <form>
        <div className="flex justify-between gap-10 mt-2 mb-1 ">
          <TextInput
            placeholder="FE19A038"
            label="Matricule Number"
            type="text"
            id="matricule"
            name="matricule"
            value={form.matricule}
            onChange={(e) => {
              setForm({ ...form, matricule: e.target.value });
            }}
          />
          <SelectInput
            selectOptions={COURSE_LEVELS}
            label="Level"
            onChange={(e) => {
              setForm({ ...form, level: e.target.value });
            }}
            value={form.level}
            mb-4
          />
          <SelectInput
            selectOptions={SCHOOL_YEAR}
            label="Year"
            onChange={(e) => {
              setForm({ ...form, year: e.target.value });
            }}
            value={form.year}
            mb-4
          />
        </div>

        <div className="flex flex-col gap-1">
          <SelectInput
            selectOptions={ENGINEERING_DEPARTMENTS}
            label="Department"
            onChange={(e) => {
              setForm({ ...form, department: e.target.value });
            }}
            value={form.department}
          />
          <SelectInput
            selectOptions={COMPUTER_PROGRAMS}
            label="Program"
            onChange={(e) => {
              setForm({ ...form, department: e.target.value });
            }}
            value={form.department}
          />
          <TextInput
            placeholder="Bsc Software Enginnering"
            label="Certificate Obatianed"
            type="text"
            id="certificate"
            name="certificate"
            value={form.certificate}
            onChange={(e) => {
              setForm({ ...form, certificate: e.target.value });
            }}
          />
          <SelectInput
            selectOptions={SCHOOL_YEAR}
            label="Year Obtained"
            onChange={(e) => {
              setForm({ ...form, yearObtained: e.target.value });
            }}
            value={form.yearObtained}
          />
        </div>

        <div className="flex gap-8 mt-3">
          <Button
            text="Back"
            fullWidth={true}
            onClick={() => setCurrentStep(0)}
          />
          <Button
            text="Next"
            fullWidth={true}
            buttonType="PRIMARY"
            onClick={() => setCurrentStep(2)}
          />
        </div>
      </form>
    </div>
  );
};

export default StudentAcademicInfoStep