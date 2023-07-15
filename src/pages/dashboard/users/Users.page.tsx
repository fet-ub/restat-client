import React, { useState, useEffect } from "react";

import SelectInput from "../../../components/common/inputs/select-input/SelectInput.common";
import { ENGINEERING_DEPARTMENTS } from "../../../repository/constants/constants";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddUserModal from "../../../components/common/modal/modules/add-user/AddUserModal.module";
import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import DownloadOptions from "../../../components/common/download-options/DownloadOptions.common";
import { useTranslation } from "react-i18next";
import { getUsersThunk } from "../../../app/feature/user/thunk/user.thunk";
// import { ApiRequestStatus } from "../../../types/api.types";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
// import { resetGetUsersState } from "../../../app/feature/user/slices/getUsers.slice";
import { RootState } from "../../../app/store/store";
// import { UserResponseTypes } from "../../../types/user.type";
import EditIcon from "../../../icons/Edit.icon";
import DeleteIcon from "../../../icons/Delete.icon";

//  GridValueGetterParams
const UsersPage = () => {
  const dispatch = useAppDispatch();
  const getUsersState = useAppSelector(
    (state: RootState) => state.getUsersState
  );

  // const [currentUsers, setCurrentUSers] = useState<UserResponseTypes[]>([]);
  // useEffect(() => {
  //   // const timeout = setTimeout(() => {
  //   //   dispatch(getUsersThunk());

  //   setCurrentUSers(getUsersState.users);
  //   // }, 2000);

  //   // return () => clearTimeout(timeout);

  //   //  setFilteredData(getCoursesState.courses);
  //   // eslint-disable-next-line
  // }, []);

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
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
      field: "id",
      headerName: "Role",
      width: 270,
      sortable: false,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.id === 1
          ? "Admin"
          : params.row.id === 2
          ? "Dean"
          : params.row.id === 3
          ? "HOD"
          : params.row.id === 4
          ? "Coordinator"
          : params.row.id === 5
          ? "Lecturer"
          : params.row.id === 6
          ? "Examiner"
          : params.row.id === 7
          ? "Support Staff"
          : params.row.id === 8
          ? "Student"
          : "",
    },
    // {
    //   field: "department",
    //   headerName: "Department",
    //   width: 270,
    //   sortable: false,
    // },
    {
      field: "email",
      headerName: "Email",
      width: 270,
      sortable: false,
    },
    // {
    //   field: "phone",
    //   headerName: "Phone",
    //   width: 200,
    //   sortable: false,
    //   headerAlign: "left",
    //   align: "left",
    // },
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

  return (
    <div>
      <DashboardHeader
        label={t("Users", { ns: ["main", "home"] })}
        ButtonText={t("Add New User", { ns: ["main", "home"] })}
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />

      {/* icons row */}
      <DownloadOptions />

      <div className="w-[25%] mt-12">
        <SelectInput
          selectOptions={ENGINEERING_DEPARTMENTS}
          placeholder="Select Department"
          label={t("Department", { ns: ["main", "home"] })}
          value=""
        />
      </div>

      <div style={{ height: 400, width: "100%", marginTop: 40 }}>
        <DataGrid
          rows={getUsersState.users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(row: any) => row.email + row.id}
          style={{ fontSize: "15px" }}
          className="dark:text-white"
        />
      </div>
      {isOpen && (
        <ModalContainer width="800px" onClick={() => setIsOpen(false)}>
          <AddUserModal setIsOpen={setIsOpen} />
        </ModalContainer>
      )}
    </div>
  );
};

export default UsersPage;
