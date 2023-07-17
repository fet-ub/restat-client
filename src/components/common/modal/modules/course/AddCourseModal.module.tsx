import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import Button from "../../../buttons/Button.common";
import TextInput from "../../../inputs/text-input/TextInput.common";
import SelectInput from "../../../inputs/select-input/SelectInput.common";
import {
  COURSE_LEVELS,
  SEMESTER,
  COURSE_STATUS,
} from "../../../../../repository/constants/constants";
import { CourseStatusType } from "../../../../../repository/constants/enums.constants";
import { CONSTANTS } from "../../../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { createCourseThunk } from "../../../../../app/feature/course/thunk/course.thunk";
import { ApiRequestStatus } from "../../../../../types/api.types";
// import { resetcreateCourseState } from "../../../../../app/feature/course/slices/createCourse.slice";

const AddCourseModal = ({
  setIsOpen,
  isOpen,
  showSuccessModal,
  setShowSuccessModal,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  showSuccessModal: boolean;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const createCourseState = useAppSelector((state) => state.createCourseState);
  const getLecturersState = useAppSelector((state) => state.getLecturersState);

  const [selectedIndex, setSelectedIndex] = useState<any>("");
  const [user, setUser] = useState({
    //   firstName: "",
    id: "",
  });

  useEffect(() => {
    const userInfo = localStorage.getItem(CONSTANTS.STORAGE_KEY.CURRENT_USER);

    if (!userInfo) {
      navigate("/auth/login");
    } else {
      setUser(JSON.parse(userInfo as string));
    }
    // eslint-disable-next-line
  }, [window.location.pathname]);

  //  console.log(user.id)

  const [form, setForm] = useState({
    facultyId: "1",
    semesterId: "",
    name: "",
    courseCode: "",
    level: "",
    status: CourseStatusType.DEFAULT,
    creditValue: "",
  });

  const formatedLecturers = getLecturersState.lecturers.map((obj, index) => ({
    ...obj,
    label: `${obj.firstName} ${obj.lastName}`,
    value: index,
  }));

  // console.log(selectedIndex);

  const choosenLecturer = getLecturersState.lecturers[selectedIndex];

  // console.log(createCourseState.status);

  useEffect(() => {
    if (createCourseState.status === ApiRequestStatus.FULFILLED) {
      setForm({
        facultyId: "1",
        semesterId: "",
        name: "",
        courseCode: "",
        level: "",
        status: CourseStatusType.DEFAULT,
        creditValue: "",
      });

      setIsOpen(false);
      setShowSuccessModal(true);
    }
    /* eslint-disable */
    // dispatch(resetcreateCourseState());
  }, [createCourseState.status === ApiRequestStatus.FULFILLED]);

  // console.log(createCourseState.status);

  const handleAddCourse = async (event: any) => {
    event.preventDefault();
    await dispatch(
      createCourseThunk({
        facultyId: form.facultyId,
        semesterId: form.semesterId,
        name: form.name.toUpperCase(),
        courseCode: form.courseCode.toUpperCase(),
        level: form.level,
        status: form.status,
        creditValue: form.creditValue,
        userId: choosenLecturer.id.toString(),
      })
    );
    // dispatch(resetcreateCourseState());
    // setTracker(!tracker)

    if (createCourseState.status === ApiRequestStatus.FULFILLED) {
      console.log("it ran");

      setForm({
        facultyId: "1",
        semesterId: "",
        name: "",
        courseCode: "",
        level: "",
        status: CourseStatusType.DEFAULT,
        creditValue: "",
      });

      setIsOpen(false);
      setShowSuccessModal(true);
    }
  };

  return (
    <div className="px-3 pb-5 bg-white dark:bg-tertiary">
      <h1 className="text-secondary text-3xl font-semibold dark:text-white">
        {t("Add  Course", {
          ns: ["main", "home"],
        })}
      </h1>

      <form className="mt-7" onSubmit={handleAddCourse}>
        <div className="w-full h-full  flex gap-9 mb-6  ">
          <TextInput
            placeholder={"Machine Learning"}
            label={t("Course Name", {
              ns: ["main", "home"],
            })}
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <TextInput
            placeholder={"4"}
            label={t("Credit Value", {
              ns: ["main", "home"],
            })}
            type="number"
            id="creditValue"
            name="creditValue"
            value={form.creditValue}
            onChange={(e) => {
              setForm({ ...form, creditValue: e.target.value });
            }}
          />
        </div>
        <div className="w-full h-full mb-12 ">
          <SelectInput
            selectOptions={formatedLecturers}
            label={t("Course Instructor", { ns: ["main", "home"] })}
            value={selectedIndex}
            placeholder="select a course Instructor"
            onChange={(e) => {
              setSelectedIndex(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-9 mb-6 ">
          <TextInput
            placeholder="CEF 238"
            label={t("Course Code", {
              ns: ["main", "home"],
            })}
            type="text"
            id="courseCode"
            name="CourseCode"
            value={form.courseCode}
            onChange={(e) => {
              setForm({ ...form, courseCode: e.target.value });
            }}
          />
          <SelectInput
            selectOptions={COURSE_LEVELS}
            placeholder="level"
            label={t("level", {
              ns: ["main", "home"],
            })}
            onChange={(e) => {
              setForm({
                ...form,
                level: e.target.value,
              });
            }}
            value={form.level}
          />
        </div>
        <div className="flex gap-9 mb-6 ">
          <SelectInput
            selectOptions={SEMESTER}
            placeholder="semester"
            label={t("Semester", {
              ns: ["main", "home"],
            })}
            onChange={(e) => {
              setForm({
                ...form,
                semesterId: e.target.value,
              });
            }}
            value={form.semesterId}
          />
          <SelectInput
            selectOptions={COURSE_STATUS}
            placeholder="course status"
            label={t("Status", {
              ns: ["main", "home"],
            })}
            onChange={(e) => {
              setForm({
                ...form,
                status: e.target.value as unknown as CourseStatusType,
              });
            }}
            value={form.status}
          />
        </div>

        <div className="w-full h-full mb-12 ">
          {/* <TextInput
            placeholder={"4"}
            label={t("Credit Value", {
              ns: ["main", "home"],
            })}
            type="number"
            id="creditValue"
            name="creditValue"
            value={form.creditValue}
            onChange={(e) => {
              setForm({ ...form, creditValue: e.target.value });
            }}
          /> */}
        </div>

        <div className="flex gap-5 mt-1  mb-8">
          <Button
            text={t("Cancel", {
              ns: ["main", "home"],
            })}
            fullWidth={true}
            buttonType="TERTIARY"
          />
          <Button
            disable={createCourseState.status === ApiRequestStatus.PENDING}
            text={t("Confirm", {
              ns: ["main", "home"],
            })}
            fullWidth={true}
            buttonType="PRIMARY"
            loading={createCourseState.status === ApiRequestStatus.PENDING}
          />
        </div>
      </form>
    </div>
  );
};

export default AddCourseModal;
