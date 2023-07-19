import React, { useEffect, useState } from "react";

import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddMarksModal from "../../../components/common/modal/modules/marks/AddMarksModal.module";
import { MarksType } from "../../../types/atoms/enums.atoms";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import SelectInput from "../../../components/common/inputs/select-input/SelectInput.common";
import StatusModal from "../../../components/common/modal/modules/status/StatusModal.module";
import { RootState } from "../../../app/store/store";
import { ApiRequestStatus } from "../../../types/api.types";
import Button from "../../../components/common/buttons/Button.common";
import { ExamMarkRequestType } from "../../../types/exam.type";
import { createExamMarkThunk } from "../../../app/feature/exam-mark/thunk/examMark.thunk";
import AddExamTable, {
  ExamMarksType,
} from "../../../components/common/table/add-exam/addExamTable.common";
import { resetCreateExamMarkState } from "../../../app/feature/exam-mark/slice/createExamMark.slice";
import { CSVLink } from "react-csv";
import { uploadExamMarkTemplate } from "../../../data/excel-templates/dataTemplates";
import { BiHelpCircle } from "react-icons/bi";

const ExamPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const getStudentsState = useAppSelector(
    (state: RootState) => state.getStudentsState
  );

  const getCoursesState = useAppSelector(
    (state: RootState) => state.getCoursesState
  );

  const createExamMarkState = useAppSelector(
    (state: RootState) => state.createExamMarkState
  );

  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [allStudents, setAllStudents] = useState<ExamMarksType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<any>("");
  const [examMarksTableData, setExamMarksTableData] = useState<any>([]);

  useEffect(() => {
    const result = getStudentsState.students.map((obj) => ({
      ...obj,
      filledStatus: "not filled",
      mark: "",
      studentCodeId: "",
    }));

    setAllStudents(result);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (createExamMarkState.status === ApiRequestStatus.FULFILLED) {
      console.log("it ran");
      setSelectedIndex("");
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
    // eslint-disable-next-line
  }, [createExamMarkState.status === ApiRequestStatus.FULFILLED]);

  useEffect(() => {
    if (createExamMarkState.status === ApiRequestStatus.REJECTED) {
      console.log("it ran");

      // closeModal();
      // setSelectedFile("");
      // setFileName("");
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
    // eslint-disable-next-line
  }, [createExamMarkState.status === ApiRequestStatus.REJECTED]);

  const formatedCourses = getCoursesState.courses.map((obj, index) => ({
    ...obj,
    label: obj.name,
    value: index,
  }));

  const choosenCourse = getCoursesState.courses[selectedIndex];

  const handleUploadExamMarks = () => {
    const uploadData: ExamMarkRequestType[] = [];
    allStudents.map((student) => {
      uploadData.push({
        mark: student.mark,
        studentCodeId: student.studentCodeId,
      });
    });
    dispatch(createExamMarkThunk(uploadData));

    // console.log("sada", uploadData);
  };

  // console.log(allStudents);

  return (
    <div>
      {" "}
      <DashboardHeader
        label={t("Exam", { ns: ["main", "home"] })}
        ButtonText={t("Add Exam marks", { ns: ["main", "home"] })}
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />
      <div>
        <CSVLink
          data={uploadExamMarkTemplate}
          filename="uploadExamMarkTemplate"
          // className="bg-primary  px-4 text-white   py-[10px]    rounded-lg outline-none text-[16px] flex justify-center items-center gap-3"
        >
          <div className="flex  items-center mt-4">
            <div>
              <BiHelpCircle size={20} color="#42BFDD" />
            </div>
            <div className="text-xl text-secondary dark:text-white cursor-pointer">
              {" "}
              {t(
                "Click on this text to download excel sheet template to upload Exam marks",
                {
                  ns: ["main", "home"],
                }
              )}
            </div>
          </div>
          {/* {t("Download CA File", { ns: ["main", "home"] })} */}
        </CSVLink>
      </div>
      <div className="w-[40%] mt-5">
        <SelectInput
          selectOptions={formatedCourses.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
              return -1;
            }

            if (nameA > nameB) {
              return 1;
            }

            return 0;
          })}
          label={t("Course", { ns: ["main", "home"] })}
          value={selectedIndex}
          placeholder={t("select a course", { ns: ["main", "home"] })}
          onChange={(e) => {
            setSelectedIndex(e.target.value);
          }}
        />
      </div>
      {choosenCourse && (
        <>
          <AddExamTable
            marksTableData={allStudents.filter(
              (student) => student.level === choosenCourse?.level
            )}
            setMarksTableData={setAllStudents}
            courseCode={choosenCourse.courseCode}
            courseName={choosenCourse.name}
          />
          <div className="w-full flex items-center justify-center mt-10">
            <Button
              text={"Upload Marks"}
              width="500px"
              buttonType="PRIMARY"
              onClick={handleUploadExamMarks}
              loading={createExamMarkState.status === ApiRequestStatus.PENDING}
              disable={createExamMarkState.status === ApiRequestStatus.PENDING}
            />
          </div>
        </>
      )}
      {showSuccessModal && (
        <ModalContainer
          width="400px"
          onClick={() => {
            setShowSuccessModal(false);
            dispatch(resetCreateExamMarkState());
            // dispatch(getStudentsThunk());
          }}
        >
          <StatusModal
            status={
              createExamMarkState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : createExamMarkState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : // : createBulkStudentState.status === ApiRequestStatus.FULFILLED
                  // ? "SUCCESS"
                  // : createBulkStudentState.status === ApiRequestStatus.REJECTED
                  // ? "ERROR"
                  "SUCCESS"
            }
            text={
              createExamMarkState.status === ApiRequestStatus.FULFILLED
                ? "Ca Mark was added successfully"
                : createExamMarkState.status === ApiRequestStatus.REJECTED
                ? createExamMarkState.message
                : // : createBulkStudentState.status === ApiRequestStatus.FULFILLED
                  // ? createBulkStudentState.message
                  // : createBulkStudentState.status === ApiRequestStatus.REJECTED
                  // ? createBulkStudentState.message
                  ""
            }
            onClick={() => {
              setShowSuccessModal(false);
              dispatch(resetCreateExamMarkState());
              // dispatch(resetBulkStudentState());
              // dispatch(getStudentsThunk());
            }}
          />
        </ModalContainer>
      )}
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddMarksModal
            modalType={MarksType.EXAM}
            examMarksTableData={examMarksTableData}
            setExamsTableData={setExamMarksTableData}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default ExamPage;
