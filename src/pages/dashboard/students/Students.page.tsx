import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common'
import DashboardCard from '../../../components/common/cards/dashboard-card/DashboardCard.common';
import { IconRepository } from '../../../repository/icons/icon.repository';
import SelectInput from '../../../components/common/inputs/select-input/SelectInput.common';
import { ENGINEERING_DEPARTMENTS } from '../../../repository/constants/constants';
import TextInput from '../../../components/common/inputs/text-input/TextInput.common';
import DownloadOptions from '../../../components/common/download-options/DownloadOptions.common';
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import ModalContainer from '../../../components/common/modal/modal-container/ModalContainer.common';
import AddStudentModal from '../../../components/common/modal/modules/add-student/AddStudentModal.module';
//  GridValueGetterParams; 


const StudentsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [form, setForm] = useState({
      
      department: "",
      name: "",
     
    });

    const columns: GridColDef[] = [
      { field: "name", headerName: "Name", width: 280, sortable: false },
      { field: "matricule", headerName: "Matrcule", width: 150, sortable: false },
      {
        field: "department",
        headerName: "Department",
        width: 250,
        sortable: false,
      },
      {
        field: "email",
        headerName: "Email",
        width: 200,
        sortable: false,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: "Phone",
        width: 180,
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
      {
        name: "Fomonyuytar Joseph",
        matricule: "FE19A038",
        department: "Computer Enginnering",
        email: "joe@email.com",
        phone: '651273636',
        action: "action",
      },
      {
        name: "Njoh Prince",
        matricule: "FE19A035",
        department: "Electrical Enginnering",
        email: "prince@email.com",
        phone: '653445345',
        action: "action",
      },
      {
        name: "Hans Weno",
        matricule: "FE19A045",
        department: "Computer Enginnering",
        email: "hans@email.com",
        phone: '6534454656',
        action: "action",
      },
    ];

  return (
    <div>
      <div>
        <DashboardHeader
          label={"Dashboard"}
          ButtonText="Add New Student"
          onClick={() => setIsOpen(true)}
          displayButton={true}
        />
      </div>

      <div className="w-[230px] mt-5">
        <DashboardCard
          label="Students"
          stats={120}
          icon={<IconRepository.DashboardStudentIcon width={70} height={70} />}
        />
      </div>

      <div className="flex items-center gap-[75px] mt-12">
        <SelectInput
          selectOptions={ENGINEERING_DEPARTMENTS}
          label="Department"
          value={form.department}
          onChange={(e) => {
            setForm({ ...form, department: e.target.value });
          }}
        />
        <TextInput
          label="Search"
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
          getRowId={(row: any) => row.name + row.phone}
          style={{ fontSize: "17px" }}
          className="dark:text-white"
        />
      </div>
      {isOpen && (
        <ModalContainer width="900px" onClick={() => setIsOpen(false)}>
          <AddStudentModal closeModal={() => setIsOpen(false)} />
        </ModalContainer>
      )}
    </div>
  );
}

export default StudentsPage