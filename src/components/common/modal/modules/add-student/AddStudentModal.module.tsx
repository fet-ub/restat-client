import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressSteps from "../../../progress-steps/ProgressSteps.common";
import StudentPersonalInfoStep from "./steps/StudentPersonalInfo.step";
import StudentAcademicInfoStep from "./steps/StudentAcademicInfo.step";
import StudentGuardianInfoStep from "./steps/StudentGuardianInfo.step";
import { StudentType } from "../../../../../types/student.type";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { createStudentThunk } from "../../../../../app/feature/student/thunk/student.thunk";
import { ApiRequestStatus } from "../../../../../types/api.types";
import { useTranslation } from "react-i18next";
import { CONSTANTS } from "../../../../../constants/constants";

const AddStudentModal = ({
  closeModal,
  setShowSuccessModal,
}: {
  closeModal: () => void;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const createStudentState = useAppSelector(
    (state) => state.createStudentState
  );

  const [user, setUser] = useState({
    id: "",
  });

  useEffect(() => {
    const userInfo = localStorage.getItem(CONSTANTS.STORAGE_KEY.CURRENT_USER);

    if (!userInfo) {
      navigate("/auth/login");
    } else {
      setUser(JSON.parse(userInfo as string));
    }
    /* eslint-disable */
  }, [window.location.pathname]);

  const [form, setForm] = useState<StudentType>({
    firstName: "",
    lastName: "",
    gender: "",
    status: "",
    dob: "",
    placeOfBirth: "",
    region: "",
    address: "",
    country: "",
    nationalIdentification: "",
    email: "",
    matriculationNumber: "",
    level: "",
    year: "",
    phone: "",
    departmentId: "",
    program: "",
    certificateObtained: "",
    yearObtained: "",
    guardianFirstName: "",
    guardianLastName: "",
    guardianEmail: "",
    guardianAddress: "",
    guardianPhone: "",
  });
  const [currentstep, setCurrentstep] = useState(0);

  // console.log(createStudentState.status);

  useEffect(() => {
    if (createStudentState.status === ApiRequestStatus.FULFILLED) {
      console.log("it ran");

      setForm({
        firstName: "",
        lastName: "",
        gender: "",
        status: "",
        dob: "",
        placeOfBirth: "",
        region: "",
        address: "",
        country: "",
        nationalIdentification: "",
        email: "",
        matriculationNumber: "",
        level: "",
        year: "",
        phone: "",
        departmentId: "",
        program: "",
        certificateObtained: "",
        yearObtained: "",
        guardianFirstName: "",
        guardianLastName: "",
        guardianEmail: "",
        guardianAddress: "",
        guardianPhone: "",
      });

      closeModal();
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
  }, [createStudentState.status === ApiRequestStatus.FULFILLED]);

  console.log(form.dob);

  useEffect(() => {
    if (createStudentState.status === ApiRequestStatus.REJECTED) {
      console.log("it ran");

      closeModal();
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
  }, [createStudentState.status === ApiRequestStatus.REJECTED]);
  const handleAddStudent = async (e: any) => {
    e.preventDefault();
    console.log("i was presses");

    await dispatch(
      createStudentThunk({
        ...form,
        facultyId: "1",
        userId: user.id,
        profilePicture: "null",
      })
    );
  };

  return (
    <div className="px-8 pb-3 bg-white dark:bg-tertiary">
      <h1 className="text-secondary text-3xl font-semibold dark:text-white">
        {t("Add Student", { ns: ["main", "home"] })}
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
          handleAddStudent={handleAddStudent}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AddStudentModal;
