import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
// import DashboardCard from "../../../components/common/cards/dashboard-card/DashboardCard.common";
// import { IconRepository } from "../../../repository/icons/icon.repository";
import SelectInput from "../../../components/common/inputs/select-input/SelectInput.common";
import { ENGINEERING_DEPARTMENTS } from "../../../repository/constants/constants";
import TextInput from "../../../components/common/inputs/text-input/TextInput.common";
import DownloadOptions from "../../../components/common/download-options/DownloadOptions.common";
import {
  DataGrid,
  // GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddStudentModal from "../../../components/common/modal/modules/add-student/AddStudentModal.module";
import Button from "../../../components/common/buttons/Button.common";
import { MdOutlineContactPage } from "react-icons/md";
// import { MarksType } from "../../../types/atoms/enums.atoms";
import AddBulkStudentModal from "../../../components/common/modal/modules/add-student/AddBulkStudent.modal";
import { studentType } from "../../../types/common/modal/add-bulk-student-modal.type";
import { useTranslation } from "react-i18next";
import { ApiRequestStatus } from "../../../types/api.types";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import { resetCreateStudentState } from "../../../app/feature/student/slice/createStudent.slice";
import StatusModal from "../../../components/common/modal/modules/status/StatusModal.module";
import { RootState } from "../../../app/store/store";
import {
  getStudentsThunk,
  deleteStudentThunk,
} from "../../../app/feature/student/thunk/student.thunk";
import EditIcon from "../../../icons/Edit.icon";
import DeleteIcon from "../../../icons/Delete.icon";
import DeleteModal from "../../../components/common/modal/modules/delete/DeleteModal.module";
import { resetDeleteStudentState } from "../../../app/feature/student/slice/deleteStudent.slice";
// import { StudentResponseTypes } from "../../../types/student.type";

import { resetBulkStudentState } from "../../../app/feature/student/slice/createBulkStudents.slice";
import { BiHelpCircle } from "react-icons/bi";
import { CSVLink } from "react-csv";
import { UploadStudentTemplate } from "../../../data/excel-templates/dataTemplates";

//  GridValueGetterParams;

const StudentsPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const createStudentState = useAppSelector(
    (state) => state.createStudentState
  );
  const deleteStudentState = useAppSelector(
    (state) => state.deleteStudentState
  );

  const createBulkStudentState = useAppSelector(
    (state) => state.createBulkStudentState
  );

  const getStudentsState = useAppSelector(
    (state: RootState) => state.getStudentsState
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isBulkOpen, setBulkIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [fileName, setFileName] = useState<any>("");
  const [studentsTableData, setStudentsTableData] = useState<studentType[]>([]);
  const [studentId, setStudentId] = useState("");
  const [selectedDeletedStudent, setSelectedDeletedStudent] = useState("");
  // const [allStudents, setAllStudents] = useState<StudentResponseTypes[]>([]);
  const [searchText, setSearchText] = useState("");
  // const [filteredData, setFilteredData] = useState<any>([]);
  const [form, setForm] = useState({
    department: "",
    name: "",
  });

  useEffect(() => {
    if (deleteStudentState.status === ApiRequestStatus.FULFILLED) {
      setDeleteModal(false);
      setShowSuccessDelete(!showSuccessDelete);
    }

    // dispatch(resetcreateStudentState());
    // eslint-disable-next-line
  }, [deleteStudentState.status === ApiRequestStatus.FULFILLED]);

  const handleDeleteStudent = async (id: any) => {
    await dispatch(deleteStudentThunk(id));
    // dispatch(resetDeleteCourseState());
    if (deleteStudentState.status === ApiRequestStatus.FULFILLED) {
      setDeleteModal(false);
      setShowSuccessDelete(!showSuccessDelete);
    }
  };

  const handleSelectedDeletedStudent = (studentMatricule: any, id: any) => {
    setDeleteModal(true);
    setSelectedDeletedStudent(studentMatricule);
    setStudentId(id);
  };

  const handleFilter = (valueText: any) => {
    setSearchText(valueText);
    // const newFilter = getStudentsState?.students.filter((value) => {
    //   return (
    //     value.user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    //     value.user.lastName.toLowerCase().includes(searchText.toLowerCase())
    //   );
    // });

    // if (searchText === '') {
    //   setFilteredData(getStudentsState.students);
    // } else {
    //   setFilteredData(newFilter);
    // }
  };

  const columns: any = [
    {
      field: "user",
      headerName: t("Name", { ns: ["main", "home"] }),
      width: 280,
      sortable: true,

      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.user.firstName || ""} ${params.row.user.lastName || ""}`,
    },
    {
      field: "matriculationNumber",
      headerName: t("Matricule", { ns: ["main", "home"] }),
      width: 120,
      sortable: false,
    },
    {
      field: "level",
      headerName: t("Level", { ns: ["main", "home"] }),
      width: 70,
      sortable: true,
      headerAlign: "left",
      align: "left",
      type: "number",
    },
    {
      field: "program",
      headerName: t("Program", { ns: ["main", "home"] }),
      width: 170,
      sortable: false,
    },
    {
      field: "phone",
      headerName: t("Phone", { ns: ["main", "home"] }),
      width: 180,
      sortable: true,
      headerAlign: "left",
      align: "left",
      type: "number",
    },
    {
      field: "email",
      headerName: t("Email", { ns: ["main", "home"] }),
      width: 210,
      sortable: false,
      headerAlign: "left",
      align: "left",

      valueGetter: (params: GridValueGetterParams) => params.row.user.email,
    },
    {
      field: "action",
      headerName: t("Action", { ns: ["main", "home"] }),
      sortable: false,
      width: 70,
      headerAlign: "left",
      align: "left",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>
              <EditIcon width={25} height={27} />
            </div>
            <div
              onClick={() => {
                // setDeleteModal(true);
                // setSelectedDeletedStudent(params.row.matriculationNumber);
                handleSelectedDeletedStudent(
                  params.row.matriculationNumber,
                  params.row.user.id
                );
              }}
            >
              <DeleteIcon width={25} height={27} />
            </div>
          </div>
        );
      },
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div>
      <div>
        <DashboardHeader
          label={t("Students", { ns: ["main", "home"] })}
          ButtonText={t("Add New Student", { ns: ["main", "home"] })}
          onClick={() => setIsOpen(true)}
          displayButton={true}
        />
      </div>

      <div>
        <CSVLink
          data={UploadStudentTemplate}
          filename="uploadStudentTemplate"
          // className="bg-primary  px-4 text-white   py-[10px]    rounded-lg outline-none text-[16px] flex justify-center items-center gap-3"
        >
          <div className="flex  items-center">
            <div>
              <BiHelpCircle size={20} color="#42BFDD" />
            </div>
            <div className="text-xl text-secondary dark:text-white cursor-pointer">
              {t(
                "Click on this text to download an excel sheet template to upload student",
                {
                  ns: ["main", "home"],
                }
              )}
            </div>
          </div>
          {/* {t("Download CA File", { ns: ["main", "home"] })} */}
        </CSVLink>
      </div>

      <div className="w-[230px] mt-5">
        <Button
          text={t("Bulk Upload Students", { ns: ["main", "home"] })}
          buttonType="PRIMARY"
          icon={<MdOutlineContactPage size={20} />}
          onClick={() => setBulkIsOpen(true)}
          width="400px"
        />
        {/* <DashboardCard
          label="Students"
          stats={120}
          icon={<IconRepository.DashboardStudentIcon width={70} height={70} />}
        /> */}
      </div>

      <div className="flex items-center gap-[75px] mt-12">
        <SelectInput
          selectOptions={ENGINEERING_DEPARTMENTS}
          placeholder={t("Select Department", { ns: ["main", "home"] })}
          label={t("Department", { ns: ["main", "home"] })}
          value={form.department}
          onChange={(e) => {
            setForm({ ...form, department: e.target.value });
          }}
        />
        <TextInput
          label={t("Search", { ns: ["main", "home"] })}
          placeholder={"Arrey Tabe"}
          name={"name"}
          type={"text"}
          value={searchText}
          onChange={(e) => {
            handleFilter(e.target.value);
          }}
        />
      </div>

      <div>
        <DownloadOptions />
      </div>

      <div
        style={{ height: 400, width: "100%", marginTop: 40 }}
        className="dark:text-white"
      >
        <DataGrid
          rows={getStudentsState?.students.filter((value) => {
            return (
              value.user.firstName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              value.user.lastName
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(row: any) => row.id}
          style={{ fontSize: "15px" }}
          className="dark:text-white"
        />
      </div>
      {isBulkOpen && (
        <ModalContainer width="700px" onClick={() => setBulkIsOpen(false)}>
          <AddBulkStudentModal
            fileName={fileName}
            setFileName={setFileName}
            setSelectedFile={setSelectedFile}
            selectedFile={selectedFile}
            setStudentsTableData={setStudentsTableData}
            studentsTableData={studentsTableData}
            closeModal={() => setBulkIsOpen(false)}
            setShowSuccessModal={setShowSuccessModal}
          />
        </ModalContainer>
      )}

      {isOpen && (
        <ModalContainer width="900px" onClick={() => setIsOpen(false)}>
          <AddStudentModal
            closeModal={() => setIsOpen(false)}
            setShowSuccessModal={setShowSuccessModal}
          />
        </ModalContainer>
      )}

      {showSuccessModal && (
        <ModalContainer
          width="400px"
          onClick={() => {
            setShowSuccessModal(false);
            dispatch(resetCreateStudentState());
            dispatch(resetBulkStudentState());
            dispatch(getStudentsThunk());
          }}
        >
          <StatusModal
            status={
              createStudentState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : createStudentState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : createBulkStudentState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : createBulkStudentState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : "SUCCESS"
            }
            text={
              createStudentState.status === ApiRequestStatus.FULFILLED
                ? "Student was added successfully"
                : createStudentState.status === ApiRequestStatus.REJECTED
                ? createStudentState.message
                : createBulkStudentState.status === ApiRequestStatus.FULFILLED
                ? "Student was added successfully"
                : createBulkStudentState.status === ApiRequestStatus.REJECTED
                ? createBulkStudentState.message
                : ""
            }
            onClick={() => {
              setShowSuccessModal(false);
              dispatch(resetCreateStudentState());
              dispatch(resetBulkStudentState());
              dispatch(getStudentsThunk());
            }}
          />
        </ModalContainer>
      )}

      {deleteModal && (
        <ModalContainer width="600px" onClick={() => setDeleteModal(false)}>
          <DeleteModal
            onClick={() => handleDeleteStudent(studentId)}
            closeModal={() => setDeleteModal(false)}
            record={selectedDeletedStudent}
            disable={deleteStudentState.status === ApiRequestStatus.PENDING}
            loading={deleteStudentState.status === ApiRequestStatus.PENDING}
          />
        </ModalContainer>
      )}

      {showSuccessDelete && (
        <ModalContainer
          width="400px"
          onClick={() => {
            setShowSuccessDelete(false);
            dispatch(resetDeleteStudentState());
            dispatch(getStudentsThunk());
          }}
        >
          <StatusModal
            status={
              deleteStudentState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : deleteStudentState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : "SUCCESS"
            }
            text={
              deleteStudentState.status === ApiRequestStatus.FULFILLED
                ? "Sucessuly Deleted Student"
                : deleteStudentState.status === ApiRequestStatus.REJECTED
                ? deleteStudentState.message
                : ""
            }
            onClick={() => {
              setShowSuccessDelete(false);
              dispatch(resetDeleteStudentState());
              dispatch(getStudentsThunk());
            }}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default StudentsPage;
