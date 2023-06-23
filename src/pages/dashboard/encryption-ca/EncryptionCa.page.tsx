import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common';
import { IconRepository } from '../../../repository/icons/icon.repository';
import EncryptCaTable from '../../../components/common/table/encrypt-ca/EncryptCaTable.common';

const EncryptionCaPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

    const [selectedFile, setSelectedFile] = useState<File | undefined>(
      undefined
    );


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e?.target?.files) {
        //  setSelectedCategoryImage(URL.createObjectURL(e.target.files[0]));
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);

        console.log(selectedFile?.name);
      }
    };

    const handleXls = () => {
      setActive(0);
    };
    const handleCSV = () => {
      setActive(1);
    };

  return (
    <div>
      <DashboardHeader
        label={"Encryption of Scripts"}
        ButtonText="Add CA marks"
        onClick={() => setIsOpen(true)}
        displayButton={false}
      />

      <h2 className="text-3xl font-bold text-secondary dark:text-white mt-10">
        Bulk Upload CA Marks
      </h2>
      <p className="text-xl mb-5 mt-1 dark:text-white">
        {`Here,you can upload bulk CA marks as .xls or .csv`}
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
            {selectedFile ? (
              <h1 className="text-2xl">{selectedFile.name}</h1>
            ) : (
              <>
                <h1 className="text-xl">
                  Drag and Drop or
                  <span className="text-primary text-2xl">
                    {" "}
                    Upload new file
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




      <EncryptCaTable/>
    </div>
  );
}

export default EncryptionCaPage