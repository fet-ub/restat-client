import { useState, useEffect } from "react";
import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import DownloadOptions from "../../../components/common/download-options/DownloadOptions.common";
import TextInput from "../../../components/common/inputs/text-input/TextInput.common";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddCourseModal from "../../../components/common/modal/modules/course/AddCourseModal.module";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  getCoursesThunk,
  deleteCourseThunk,
} from "../../../app/feature/course/thunk/course.thunk";
import { RootState } from "../../../app/store/store";
import EditIcon from "../../../icons/Edit.icon";
import DeleteIcon from "../../../icons/Delete.icon";
import DeleteModal from "../../../components/common/modal/modules/delete/DeleteModal.module";
import StatusModal from "../../../components/common/modal/modules/status/StatusModal.module";
import { ApiRequestStatus } from "../../../types/api.types";
import { resetDeleteCourseState } from "../../../app/feature/course/slices/deleteCourse.slice";
import { resetcreateCourseState } from "../../../app/feature/course/slices/createCourse.slice";

const CoursesPage = () => {
  const getCoursesState = useAppSelector(
    (state: RootState) => state.getCoursesState
  );
  const createCourseState = useAppSelector((state) => state.createCourseState);
  const deleteCourseState = useAppSelector((state) => state.deleteCourseState);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);
  // const [filteredData, setFilteredData] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [courseId, setCourseId] = useState("");
  const [selectedDeletedCourse, setSelectedDeletedCourse] = useState("");
  // const [trigger, setTrigger] = useState(false);

  // useEffect(() => {
  //   // const timeout = setTimeout(() => {
  //   //   dispatch(getCoursesThunk());

  //   setFilteredData(getCoursesState.courses);
  //   // }, 2000);

  //   // return () => clearTimeout(timeout);

  //   // eslint-disable-next-line
  // }, [trigger]);

  // useEffect(() => {
  //   setTrigger(!trigger);
  // }, []);
  // getCoursesState;

  const handleFilter = (valueText: any) => {
    setSearchText(valueText);
  };

  useEffect(() => {
    if (deleteCourseState.status === ApiRequestStatus.FULFILLED) {
      setDeleteModal(false);
      setShowSuccessDelete(!showSuccessDelete);
    }

    // dispatch(resetcreateCourseState());
  }, [deleteCourseState.status === ApiRequestStatus.FULFILLED]);

  const handleDeleteCourse = async (id: any) => {
    await dispatch(deleteCourseThunk(id));
    // dispatch(resetDeleteCourseState());
    if (deleteCourseState.status === ApiRequestStatus.FULFILLED) {
      setDeleteModal(false);
      setShowSuccessDelete(!showSuccessDelete);
    }
  };

  const handleSelectedDeletedCourse = (courseCode: any, id: any) => {
    setDeleteModal(true);
    setSelectedDeletedCourse(courseCode);
    setCourseId(id);
  };

  // console.log(getCoursesState.courses);
  // console.log(filteredData);
  // console.log(isOpen);
  // console.log(courseId);

  const columns: GridColDef[] = [
    { field: "courseCode", headerName: "Code", width: 75, sortable: false },
    { field: "name", headerName: "Title", width: 290, sortable: true },
    {
      field: "level",
      headerName: "Level",
      width: 90,
      sortable: true,
      type: "number",
    },
    {
      field: "user",
      headerName: "Lecturer",
      width: 200,
      sortable: false,
      headerAlign: "left",
      align: "left",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.user.firstName || ""} ${params.row.user.lastName || ""}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      sortable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "creditValue",
      headerName: "Credit Value",
      width: 120,
      sortable: true,
      headerAlign: "left",
      align: "center",
    },
    {
      field: "semesterId",
      headerName: "Semester",
      width: 150,
      sortable: true,
      headerAlign: "left",
      align: "left",
      valueGetter: (params: GridValueGetterParams) =>
        params.row.semesterId === 1
          ? "First Semester"
          : params.row.semesterId === 2
          ? "Second Semester"
          : "",
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 100,
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
                // setSelectedDeletedCourse(params.row.courseCode);
                handleSelectedDeletedCourse(
                  params.row.courseCode,
                  params.row.id
                );
              }}
            >
              <DeleteIcon width={25} height={27} />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <DashboardHeader
        label={t("Courses", { ns: ["main", "home"] })}
        ButtonText={t("Add New Course", { ns: ["main", "home"] })}
        displayButton={true}
        onClick={() => setIsOpen(true)}
      />

      {/* icons row */}
      <DownloadOptions />

      <div className="w-[400px] mt-8">
        <TextInput
          label={t("Search", { ns: ["main", "home"] })}
          type="search"
          name="text"
          id="search"
          placeholder={t("Search course Title", { ns: ["main", "home"] })}
          value={searchText}
          onChange={(e) => {
            handleFilter(e.target.value);
          }}
        />
      </div>
      <div style={{ height: 420, width: "100%", marginTop: 40 }}>
        <DataGrid
          rows={getCoursesState?.courses.filter((value) => {
            return value.name.toLowerCase().includes(searchText.toLowerCase());
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 6 },
            },
          }}
          pageSizeOptions={[6, 10]}
          // checkboxSelection
          getRowId={(row: any) => row.id}
          style={{ fontSize: "13px" }}
          className="dark:text-white"
        />
      </div>
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddCourseModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            showSuccessModal={showSuccessModal}
            setShowSuccessModal={setShowSuccessModal}
          />
        </ModalContainer>
      )}

      {deleteModal && (
        <ModalContainer width="600px" onClick={() => setDeleteModal(false)}>
          <DeleteModal
            onClick={() => handleDeleteCourse(courseId)}
            closeModal={() => setDeleteModal(false)}
            record={selectedDeletedCourse}
            disable={deleteCourseState.status === ApiRequestStatus.PENDING}
            loading={deleteCourseState.status === ApiRequestStatus.PENDING}
          />
        </ModalContainer>
      )}

      {showSuccessModal && (
        <ModalContainer
          width="400px"
          onClick={() => {
            setShowSuccessModal(false);
            dispatch(resetcreateCourseState());
            // setTrigger(!trigger);
            dispatch(getCoursesThunk());
          }}
        >
          <StatusModal
            status={
              createCourseState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : createCourseState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : "SUCCESS"
            }
            text={
              createCourseState.status === ApiRequestStatus.FULFILLED
                ? "Sucessuly Added Course"
                : createCourseState.status === ApiRequestStatus.REJECTED
                ? "Could not Add Course"
                : ""
            }
            onClick={() => {
              setShowSuccessModal(false);
              dispatch(resetcreateCourseState());
              // setTrigger(!trigger);
              dispatch(getCoursesThunk());
            }}
          />
        </ModalContainer>
      )}

      {showSuccessDelete && (
        <ModalContainer
          width="400px"
          onClick={() => {
            setShowSuccessDelete(false);
            dispatch(resetDeleteCourseState());
            // setTrigger(!trigger);
            dispatch(getCoursesThunk());
          }}
        >
          <StatusModal
            status={
              deleteCourseState.status === ApiRequestStatus.FULFILLED
                ? "SUCCESS"
                : deleteCourseState.status === ApiRequestStatus.REJECTED
                ? "ERROR"
                : "SUCCESS"
            }
            text={
              deleteCourseState.status === ApiRequestStatus.FULFILLED
                ? "Sucessuly Deleted Course"
                : deleteCourseState.status === ApiRequestStatus.REJECTED
                ? "Could not Delete Course"
                : ""
            }
            onClick={() => {
              setShowSuccessDelete(false);
              dispatch(resetDeleteCourseState());
              dispatch(getCoursesThunk());
            }}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default CoursesPage;
