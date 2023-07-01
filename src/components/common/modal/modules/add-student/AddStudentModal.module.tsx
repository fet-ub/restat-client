import React, { useState } from "react";

import ProgressSteps from "../../../progress-steps/ProgressSteps.common";
import StudentPersonalInfoStep from "./steps/StudentPersonalInfo.step";
import StudentAcademicInfoStep from "./steps/StudentAcademicInfo.step";
import StudentGuardianInfoStep from "./steps/StudentGuardianInfo.step";

const AddStudentModal = ({ closeModal }: { closeModal: () => void }) => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    status: "",
    dob: "",
    pob: "",
    region: "",
    address: "",
    country: "",
    idCard: "",
    email: "",
    matricule: "",
    level: "",
    year: "",
    faculty: "",
    department: "",
    program: "",
    certificate: "",
    yearObtained: "",
    guardianFirstName: "",
    guardianLastName: "",
    guardianEmail: "",
    guardianAddress: "",
    guardianPhoneNumber: "",
  });
  const [currentstep, setCurrentstep] = useState(0);

  return (
    <div className="px-8 pb-3 bg-white dark:bg-tertiary">
      <h1 className="text-secondary text-3xl font-semibold dark:text-white">
        Add Student
      </h1>
      <div className="mt-4">
        <ProgressSteps currentStep={currentstep} />
      </div>
      {currentstep === 0 ? (
        <StudentPersonalInfoStep
          form={form}
          setForm={setForm}
          setCurrentStep={setCurrentstep}
          closeModal={closeModal}
        />
      ) : currentstep === 1 ? (
        <StudentAcademicInfoStep
          form={form}
          setForm={setForm}
          setCurrentStep={setCurrentstep}
        />
      ) : currentstep === 2 ? (
        <StudentGuardianInfoStep
          form={form}
          setForm={setForm}
          setCurrentStep={setCurrentstep}
          closeModal={closeModal}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AddStudentModal;
