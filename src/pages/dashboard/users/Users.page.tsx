import React, { useState } from 'react'


import SelectInput from '../../../components/common/inputs/select-input/SelectInput.common';
import { ENGINEERING_DEPARTMENTS } from '../../../repository/constants/constants';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ModalContainer from '../../../components/common/modal/modal-container/ModalContainer.common';
import AddUserModal from '../../../components/common/modal/modules/add-user/AddUserModal.module';
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common';
import DownloadOptions from '../../../components/common/download-options/DownloadOptions.common';
//  GridValueGetterParams
const UsersPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 280, sortable: false },
    { field: "role", headerName: "Role", width: 270, sortable: false },
    {
      field: "department",
      headerName: "Department",
      width: 270,
      sortable: false,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 100,
      headerAlign: "left",
      align: "left",
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {  name: "Fomonyuytar Joseph", role: "HOD", department: 'Computer Enginnering', phone:651273636,action:'action' },
    {  name: "Lannister", role: "Lecturer", department: 'Computer Enginnering', phone:651273636,action:'action' },
    {  name: "Lannisteddr", role: "Software Coordinator", department: 'Computer Enginnering', phone:651273636,action:'action' },
   
  ];

  return (
    <div>
      <DashboardHeader label={'Dashboard'} ButtonText='Add New User' onClick={()=>setIsOpen(true)} displayButton={true} />

      {/* icons row */}
      <DownloadOptions/>

      <div className="w-[25%] mt-12">
        <SelectInput
          selectOptions={ENGINEERING_DEPARTMENTS}
          label="Department"
          value=""
        />
      </div>

      <div style={{ height: 400, width: "100%",marginTop:40 }}>
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
          getRowId={(row: any) => row.name + row.phone}
          style={{ fontSize: "17px" }}
          
        />
      </div>
      {
        isOpen && <ModalContainer width='800px' onClick={()=>setIsOpen(false)}><AddUserModal/></ModalContainer>
      }

     
    </div>
  );
}

export default UsersPage