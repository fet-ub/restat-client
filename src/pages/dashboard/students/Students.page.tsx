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
  GridColDef,
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

  const [form, setForm] = useState({
    department: "",
    name: "",
  });

  useEffect(() => {
    dispatch(getStudentsThunk());

    //  setFilteredData(getCoursesState.courses);
    // eslint-disable-next-line
  }, [getStudentsState]);

  //  useEffect(() => {
  //    if (deleteStudentState.status === ApiRequestStatus.FULFILLED) {
  //      setDeleteModal(false);
  //      setShowSuccessDelete(!showSuccessDelete);
  //    }

  //    // dispatch(resetcreateStudentState());
  //  }, [deleteStudentState.status === ApiRequestStatus.FULFILLED]);

  // const handleDeleteStudent = async (id: any) => {
  //   await dispatch(deleteStudentThunk(id));
  //   // dispatch(resetDeleteCourseState());
  //   if (deleteStudentState.status === ApiRequestStatus.FULFILLED) {
  //     setDeleteModal(false);
  //     setShowSuccessDelete(!showSuccessDelete);
  //   }
  // };

  // const handleSelectedDeletedStudent = (courseCode: any, id: any) => {
  //   setDeleteModal(true);
  //   setSelectedDeletedStudent(courseCode);
  //   setStudentId(id);
  // };

  const formattedArr = studentsTableData.map((obj: any) => {
    // Add code to rename keys here

    const formattedObj: any = {};
    Object.keys(obj).forEach((key: any) => {
      const formattedKey = key.replace(/ /g, "_").toLowerCase();
      formattedObj[formattedKey] = obj[key];
    });

    return formattedObj as studentType;
  });

  // console.log(formattedArr);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 280,
      sortable: false,

      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "matriculationNumber",
      headerName: "Matrcule",
      width: 120,
      sortable: false,
    },
    {
      field: "level",
      headerName: "level",
      width: 70,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "program",
      headerName: "Program",
      width: 250,
      sortable: false,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      width: 190,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "action",
      headerName: "Action",
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
            // onClick={() => {
            //   // setDeleteModal(true);
            //   // setSelectedDeletedStudent(params.row.courseCode);
            //   handleSelectedDeletedStudent(
            //     params.row.courseCode,
            //     params.row.id
            //   );
            // }}
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

  const rows = [
    {
      id: 1,
      firstName: "Fomonyutar",
      lastName: "Joseph",
      matriculationNumber: "FE19A038",
      level: "500",
      program: "Software Enginnering",
      email: "joe@email.com",
      phone: "651273636",
    },
    {
      id: 2,
      firstName: "Njoh",
      lastName: " Prince",
      matriculationNumber: "FE19A035",
      level: "500",
      program: "Network Enginnering",
      email: "prince@email.com",
      phone: "653445345",
    },
    {
      id: 3,
      firstName: "Hans",
      lastName: " Weno",
      matriculationNumber: "FE19A045",
      level: "500",
      program: "Software Enginnering",
      email: "hans@email.com",
      phone: "6534454656",
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
          label={t("Department", { ns: ["main", "home"] })}
          value={form.department}
          onChange={(e) => {
            setForm({ ...form, department: e.target.value });
          }}
        />
        <TextInput
          label={t("Search", { ns: ["main", "home"] })}
          placeholder={"Arrey Tabe"}
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          name={"name"}
          type={"text"}
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
          rows={rows}
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
          }}
        >
          <StatusModal
            status={
              createStudentState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : createStudentState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : "SUCCESS"
            }
            text={
              createStudentState.status === ApiRequestStatus.FULFILLED
                ? "Sucessuly Added Student"
                : createStudentState.status === ApiRequestStatus.REJECTED
                ? createStudentState.message
                : ""
            }
            onClick={() => {
              setShowSuccessModal(false);
              dispatch(resetCreateStudentState());
            }}
          />
        </ModalContainer>
      )}

      {deleteModal && (
        <ModalContainer width="600px" onClick={() => setDeleteModal(false)}>
          <DeleteModal
            // onClick={() => handleDeleteStudent(studentId)}
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
            }}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default StudentsPage;
