import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import { IconRepository } from "../../../repository/icons/icon.repository";
import EncryptCaTable from "../../../components/common/table/encrypt-ca/EncryptCaTable.common";
import * as xlsx from "xlsx";
import { useTranslation } from "react-i18next";

const EncryptionCaPage = () => {
  const { t } = useTranslation();

  const [active, setActive] = useState(0);
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [marksTableData, setMarksTableData] = useState<any>([]);
  const [fileName, setFileName] = useState<any>("");

  const handleFileChange = async (e: any) => {
    if (e?.target?.files) {
      setFileName(e.target.files[0]);
      const file = e.target.files[0];
      const data = await file.arrayBuffer(file);
      const excelfile = xlsx.read(data);
      const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
      const exceljson = xlsx.utils.sheet_to_json(excelsheet);
      setSelectedFile(exceljson);
    }
  };

  useEffect(() => {
    for (let i = 0; i < selectedFile.length; i++) {
      const keys = Object.keys(selectedFile[i]);
      const regex1 = /matricule/i;
      const regex2 = /ca/i;
      const filteredKeys = keys.filter(
        (key) => regex1.test(key) || regex2.test(key)
      );
      filteredKeys.sort((a, b) => {
        if (regex1.test(a)) {
          return -1;
        } else if (regex1.test(b)) {
          return 1;
        } else {
          return 0;
        }
      });

      const result = selectedFile.reduce((acc: any, curr: any) => {
        const obj: any = {};
        filteredKeys.forEach((key) => {
          let newKey = key;
          if (regex1.test(key)) {
            newKey = "matricule";
          } else if (regex2.test(key)) {
            newKey = "ca";
          }
          obj[newKey] = curr[key];
        });
        obj.status = "not filled";
        obj.encrypt = "";
        acc.push(obj);
        return acc;
      }, []);

      setMarksTableData(result);
    }
  }, [selectedFile]);

  const handleXls = () => {
    setActive(0);
  };
  const handleCSV = () => {
    setActive(1);
  };

  return (
    <div>
      <DashboardHeader
        label={t("Encryption of Scripts", { ns: ["main", "home"] })}
        ButtonText={t("Add CA marks", { ns: ["main", "home"] })}
        // onClick={() => setIsOpen(true)}
        displayButton={false}
      />

      <h2 className="text-3xl font-bold text-secondary dark:text-white mt-10">
        {t("Bulk Upload Matricules", { ns: ["main", "home"] })}
      </h2>
      <p className="text-xl mb-5 mt-1 dark:text-white">
        {t("Here,you can upload bulk Matricules  as .xls or .csv", {
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

      <EncryptCaTable
        marksTableData={marksTableData}
        setMarksTableData={setMarksTableData}
      />
    </div>
  );
};

export default EncryptionCaPage;
