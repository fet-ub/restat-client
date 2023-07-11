import React from "react";
import TextInput from "../../../../inputs/text-input/TextInput.common";
import SelectInput from "../../../../inputs/select-input/SelectInput.common";
import {
  COMPUTER_PROGRAMS,
  COURSE_LEVELS,
  ENGINEERING_DEPARTMENTS,
  SCHOOL_YEAR,
} from "../../../../../../repository/constants/constants";
import Button from "../../../../buttons/Button.common";
import { StudentType } from "../../../../../../types/student.type";

const StudentAcademicInfoStep = ({
  form,
  setForm,
  setCurrentStep,
}: {
  form: StudentType;
  setForm: React.Dispatch<React.SetStateAction<StudentType>>;
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
            value={form.matriculationNumber}
            onChange={(e) => {
              setForm({ ...form, matriculationNumber: e.target.value });
            }}
            required={true}
          />
          <SelectInput
            selectOptions={COURSE_LEVELS}
            label="Level"
            onChange={(e) => {
              setForm({ ...form, level: e.target.value });
            }}
            value={form.level}
          />
          <SelectInput
            selectOptions={SCHOOL_YEAR}
            label="Year"
            onChange={(e) => {
              setForm({ ...form, year: e.target.value });
            }}
            value={form.year}
          />
        </div>

        <div className="flex justify-between gap-10">
          <SelectInput
            selectOptions={ENGINEERING_DEPARTMENTS}
            label="Department"
            onChange={(e) => {
              setForm({ ...form, departmentId: e.target.value });
            }}
            value={form.departmentId}
          />
          <TextInput
            placeholder="example@email.com"
            label="Email"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            required={true}
          />
        </div>

        <div className="flex flex-col gap-1">
          <SelectInput
            selectOptions={COMPUTER_PROGRAMS}
            label="Program"
            onChange={(e) => {
              setForm({ ...form, program: e.target.value });
            }}
            value={form.program}
          />
          <TextInput
            placeholder="Bsc Software Enginnering"
            label="Certificate Obatianed"
            type="text"
            id="certificate"
            name="certificate"
            value={form.certificateObtained}
            onChange={(e) => {
              setForm({ ...form, certificateObtained: e.target.value });
            }}
            required={true}
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

export default StudentAcademicInfoStep;
