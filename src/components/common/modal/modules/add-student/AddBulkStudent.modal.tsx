import React, { useEffect, useState } from "react";
import SelectInput from "../../../inputs/select-input/SelectInput.common";
import { COURSE_LEVELS } from "../../../../../repository/constants/constants";
import Button from "../../../buttons/Button.common";
import { IconRepository } from "../../../../../repository/icons/icon.repository";
import { AddBulkStudentModalPropType } from "../../../../../types/common/modal/add-bulk-student-modal.type";
import * as xlsx from "xlsx";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { createBulkStudentThunk } from "../../../../../app/feature/student/thunk/student.thunk";
import { ApiRequestStatus } from "../../../../../types/api.types";
// import { StudentRequestType } from "../../../../../types/student.type";
import { CONSTANTS } from "../../../../../constants/constants";

const AddBulkStudentmodal = ({
  fileName,
  setFileName,
  setSelectedFile,
  selectedFile,
  setStudentsTableData,
  studentsTableData,
  closeModal,
  setShowSuccessModal,
}: AddBulkStudentModalPropType) => {
  const dispatch = useAppDispatch();
  const createBulkStudentState = useAppSelector(
    (state) => state.createBulkStudentState
  );
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({
    level: "",
  });
  const [user, setUser] = useState({
    id: "",
  });

  // const [newData, setNewData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const userInfo = localStorage.getItem(CONSTANTS.STORAGE_KEY.CURRENT_USER);

    setUser(JSON.parse(userInfo as string));
    // eslint-disable-next-line
  }, [window.location.pathname]);

  useEffect(() => {
    if (createBulkStudentState.status === ApiRequestStatus.FULFILLED) {
      console.log("it ran");

      closeModal();
      setSelectedFile("");
      setShowSuccessModal(true);
      setStudentsTableData([]);
      setFileName("");
    }

    // dispatch(resetcreateCourseState());
    // eslint-disable-next-line
  }, [createBulkStudentState.status === ApiRequestStatus.FULFILLED]);

  useEffect(() => {
    if (createBulkStudentState.status === ApiRequestStatus.REJECTED) {
      console.log("it ran");

      closeModal();
      setSelectedFile("");
      setFileName("");
      setShowSuccessModal(true);
    }

    // dispatch(resetcreateCourseState());
    // eslint-disable-next-line
  }, [createBulkStudentState.status === ApiRequestStatus.REJECTED]);
  // const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleFileChange = async (e: any) => {
    if (e?.target?.files) {
      setFileName(e.target.files[0]);

      const file = e.target.files[0];
      const data = await file.arrayBuffer(file);
      const excelfile = xlsx.read(data);
      const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
      const exceljson = xlsx.utils.sheet_to_json(excelsheet);
      // console.log(exceljson);
      setSelectedFile(exceljson);
      await setStudentsTableData(exceljson);
    }
  };

  const handleXls = () => {
    setActive(0);
  };
  const handleCSV = () => {
    setActive(1);
  };

  const handleBulkUploadStudent = async () => {
    studentsTableData.forEach((obj: any) => {
      obj.facultyId = "1";
      obj.userId = user.id;
      obj.profilePicture = "null";
    });

    console.log(studentsTableData);

    await dispatch(createBulkStudentThunk(studentsTableData));

    if (createBulkStudentState.status === ApiRequestStatus.FULFILLED) {
      closeModal();
      setShowSuccessModal(true);
      setStudentsTableData([]);
    }
  };

  return (
    <div className="mb-10 px-5">
      <h2 className="text-3xl font-bold text-secondary dark:text-white">
        {t("Bulk Upload Students", { ns: ["main", "home"] })}
      </h2>
      <p className="text-xl mb-5 mt-1 dark:text-white">
        {t("Here,you can upload bulk of students as .xls or .csv", {
          ns: ["main", "home"],
        })}
      </p>

      <div className={"bg-[#f4f4f4]  px-4 border-t-2 border-primary  py-4"}>
        <div className="flex mt-4">
          <div
            onClick={handleXls}
            className={`flex items-center justify-center border border-primary rounded-tl-md rounded-bl-md py-[10px] px-3 cursor-pointer  ${
              active === 0 ? "bg-primary text-white" : ""
            }`}
          >
            <h3 className="text-xl">Xls or Xlsx</h3>
          </div>
          <div
            onClick={handleCSV}
            className={`flex items-center justify-center border border-primary rounded-tr-md rounded-br-md py-[10px] px-3 cursor-pointer  ${
              active === 1 ? "bg-primary text-white" : ""
            }`}
          >
            <h3 className="text-xl">CSV</h3>
          </div>
        </div>

        <label htmlFor="dropzone-file">
          <div
            className={
              "flex items-center justify-center gap-1 border-dashed border border-primary bg-[#bfdffb] py-[15px] mt-4 rounded-lg "
            }
          >
            {fileName ? (
              <h1 className="text-2xl">{fileName.name}</h1>
            ) : (
              <>
                <h1 className="text-xl">
                  {t("Drag and Drop or", { ns: ["main", "home"] })}
                  <span className="text-primary text-2xl">
                    {" "}
                    {t("Upload new file", { ns: ["main", "home"] })}
                  </span>
                </h1>
                <div>
                  <IconRepository.UploadIcon />
                </div>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={active === 0 ? ".xlsx, .xls" : ".csv"}
          />
        </label>
      </div>

      <div className="mb-5 mt-8 flex flex-col gap-4">
        <SelectInput
          selectOptions={COURSE_LEVELS}
          placeholder="select a course"
          label="Level"
          onChange={(e) => {
            setForm({ ...form, level: e.target.value });
          }}
          value={form.level}
        />
      </div>

      <div className="w-full mt-8">
        <Button
          text={t("Upload Students", { ns: ["main", "home"] })}
          buttonType="PRIMARY"
          fullWidth={true}
          onClick={handleBulkUploadStudent}
          disable={createBulkStudentState.status === ApiRequestStatus.PENDING}
          loading={createBulkStudentState.status === ApiRequestStatus.PENDING}
        />
      </div>
    </div>
  );
};

export default AddBulkStudentmodal;
