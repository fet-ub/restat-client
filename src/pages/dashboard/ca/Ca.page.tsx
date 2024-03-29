import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddMarksModal from "../../../components/common/modal/modules/marks/AddMarksModal.module";
import { MarksType } from "../../../types/atoms/enums.atoms";
import { useTranslation } from "react-i18next";
import SelectInput from "../../../components/common/inputs/select-input/SelectInput.common";
import AddCaTable from "../../../components/common/table/add-ca/AddCaTable.common";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import { RootState } from "../../../app/store/store";
import { marksType } from "../../../components/common/table/add-ca/AddCaTable.common";
import Button from "../../../components/common/buttons/Button.common";
import { CaMarkRequestType } from "../../../types/caMark.type";
import StatusModal from "../../../components/common/modal/modules/status/StatusModal.module";
import { resetCreateCaMarkState } from "../../../app/feature/ca-mark/slices/createCaMark.slice";
import { createCaMarkThunk } from "../../../app/feature/ca-mark/thunk/caMark.thunk";
import { ApiRequestStatus } from "../../../types/api.types";
import { CSVLink } from "react-csv";
import { BiHelpCircle } from "react-icons/bi";
import { uploadCaMarkTemplate } from "../../../data/excel-templates/dataTemplates";

const CaPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const getStudentsState = useAppSelector(
    (state: RootState) => state.getStudentsState
  );

  const getCoursesState = useAppSelector(
    (state: RootState) => state.getCoursesState
  );

  const createCaMarkState = useAppSelector(
    (state: RootState) => state.createCaMarkState
  );

  const [isOpen, setIsOpen] = useState(false);
  const [allStudents, setAllStudents] = useState<marksType[]>([]);
  const [caMarksTableData, setcaMarksTableData] = useState<any>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<any>("");

  useEffect(() => {
    const result = getStudentsState.students.map((obj) => ({
      ...obj,
      filledStatus: "not filled",
      mark: "",
    }));

    setAllStudents(result);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (createCaMarkState.status === ApiRequestStatus.FULFILLED) {
      console.log("it ran");
      setSelectedIndex("");
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
    // eslint-disable-next-line
  }, [createCaMarkState.status === ApiRequestStatus.FULFILLED]);

  useEffect(() => {
    if (createCaMarkState.status === ApiRequestStatus.REJECTED) {
      console.log("it ran");

      // closeModal();
      // setSelectedFile("");
      // setFileName("");
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
    // eslint-disable-next-line
  }, [createCaMarkState.status === ApiRequestStatus.REJECTED]);

  const formatedCourses = getCoursesState.courses.map((obj, index) => ({
    ...obj,
    label: obj.name,
    value: index,
  }));

  // console.log(selectedIndex);

  const choosenCourse = getCoursesState.courses[selectedIndex];

  // console.log(choosenCourse);

  // console.log(allStudents);

  const handleUploadCaMarks = () => {
    const uploadData: CaMarkRequestType[] = [];
    allStudents.map((student) => {
      uploadData.push({
        studentId: student.id,
        courseId: choosenCourse.id,
        semesterId: choosenCourse.semesterId,
        mark: student.mark,
      });
    });
    dispatch(createCaMarkThunk(uploadData));

    // console.log(uploadData);
  };

  // console.log("zxczxczx", formatedCourses);

  // const [selectedFile, setSelectedFile] = useState('');
  return (
    <div>
      {" "}
      <DashboardHeader
        label={t("CA", { ns: ["main", "home"] })}
        ButtonText={t("Add CA marks", { ns: ["main", "home"] })}
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />
      <div>
        <CSVLink
          data={uploadCaMarkTemplate}
          filename="uploadCaMarkTemplate"
          // className="bg-primary  px-4 text-white   py-[10px]    rounded-lg outline-none text-[16px] flex justify-center items-center gap-3"
        >
          <div className="flex  items-center mt-4">
            <div>
              <BiHelpCircle size={20} color="#42BFDD" />
            </div>
            <div className="text-xl text-secondary dark:text-white cursor-pointer">
              {" "}
              {t(
                "Click on this text to download an excel sheet template to upload Ca marks",
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
          <AddCaTable
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
              onClick={handleUploadCaMarks}
              loading={createCaMarkState.status === ApiRequestStatus.PENDING}
              disable={createCaMarkState.status === ApiRequestStatus.PENDING}
            />
          </div>
        </>
      )}
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddMarksModal
            modalType={MarksType.CA}
            // fileName={fileName}
            // setFileName={setFileName}
            caMarksTableData={caMarksTableData}
            setCaMarksTableData={setcaMarksTableData}
            // selectedFile={selectedFile}
            // setSelectedFile={setSelectedFile}
          />
        </ModalContainer>
      )}
      {showSuccessModal && (
        <ModalContainer
          width="400px"
          onClick={() => {
            setShowSuccessModal(false);
            dispatch(resetCreateCaMarkState());
            // dispatch(getStudentsThunk());
          }}
        >
          <StatusModal
            status={
              createCaMarkState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : createCaMarkState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : // : createBulkStudentState.status === ApiRequestStatus.FULFILLED
                  // ? "SUCCESS"
                  // : createBulkStudentState.status === ApiRequestStatus.REJECTED
                  // ? "ERROR"
                  "SUCCESS"
            }
            text={
              createCaMarkState.status === ApiRequestStatus.FULFILLED
                ? "Ca Mark was added successfully"
                : createCaMarkState.status === ApiRequestStatus.REJECTED
                ? createCaMarkState.message
                : // : createBulkStudentState.status === ApiRequestStatus.FULFILLED
                  // ? createBulkStudentState.message
                  // : createBulkStudentState.status === ApiRequestStatus.REJECTED
                  // ? createBulkStudentState.message
                  ""
            }
            onClick={() => {
              setShowSuccessModal(false);
              dispatch(resetCreateCaMarkState());
              // dispatch(resetBulkStudentState());
              // dispatch(getStudentsThunk());
            }}
          />
        </ModalContainer>
      )}
    </div>
  );
};

// closeModal={() => setIsOpen(false)}

export default CaPage;
