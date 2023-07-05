import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common';
import DownloadOptions from '../../../components/common/download-options/DownloadOptions.common';
import TextInput from '../../../components/common/inputs/text-input/TextInput.common';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";


const CoursesPage = () => {
    const { t } = useTranslation();
  const [form, setForm] = useState({
    search: "",
  });

   const columns: GridColDef[] = [
     { field: "code", headerName: "Code", width: 70, sortable: false },
     { field: "title", headerName: "Title", width: 270, sortable: false },
     {
       field: "level",
       headerName: "Level",
       width: 80,
       sortable: false,
     },
     {
       field: "instructor",
       headerName: "Instructor",
       width: 200,
       sortable: false,
       headerAlign: "left",
       align: "left",
     },
     {
       field: "status",
       headerName: "Status",
       width: 200,
       sortable: false,
       headerAlign: "left",
       align: "left",
     },
     {
       field: "creditValue",
       headerName: "Credit Value",
       width: 120,
       sortable: false,
       headerAlign: "left",
       align: "left",
     },
     {
       field: "semester",
       headerName: "Semester",
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
      {
        code: "512",
        title: "Algoriths and Data structure",
        level: "500",
        instructor:'Dr John Doe',
        status: 'Compulsory',
        creditValue:'20',
        semester:'First Semester',
        action: "action",
      },
      {
        code: "444",
        title: "AI and Machine Learning",
        level: "400",
        instructor:'Dr John Doe',
        status: 'Compulsory',
        creditValue:'20',
        semester:'First Semester',
        action: "action",
      },
      {
        code: "344",
        title: "Cryptography",
        level: "200",
        instructor:'Dr John Doe',
        status: 'Compulsory',
        creditValue:'10',
        semester:'Second Semester',
        action: "action",
      },
    ];

  return (
    <div>
      <DashboardHeader
        label={t("Courses", { ns: ["main", "home"] })}
        ButtonText={t("Add New User", { ns: ["main", "home"] })}
        displayButton={false}
      />

      {/* icons row */}
      <DownloadOptions />

      <div className="w-[400px] mt-8">
        <TextInput
          label={t("Search", { ns: ["main", "home"] })}
          type="search"
          name="text"
          id="search"
          placeholder={t("Enter your search term", { ns: ["main", "home"] })}
          value={form.search}
          onChange={(e) => {
            setForm({ ...form, search: e.target.value });
          }}
        />
      </div>
      <div style={{ height: 400, width: "100%", marginTop: 40 }}>
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
          getRowId={(row: any) => row.code}
          style={{ fontSize: "16px" }}
          className="dark:text-white"
        />
      </div>
    </div>
  );
}

export default CoursesPage