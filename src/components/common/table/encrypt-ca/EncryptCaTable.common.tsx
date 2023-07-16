import React, { useEffect, useState } from "react";
import styles from "./encryptCaTable.module.css";
import StatusCard from "../../cards/status-card/StatusCard.common";
// import SelectInput from "../../inputs/select-input/SelectInput.common";
import TextInput from "../../inputs/text-input/TextInput.common";
// import Button from "../../buttons/Button.common";
import { IconRepository } from "../../../../repository/icons/icon.repository";
// import { StatusCardType } from "../../../../types/atoms/enums.atoms";
import { CSVLink } from "react-csv";
import { useTranslation } from "react-i18next";

interface marksType {
  id?: string;
  matricule: string;
  ca: number | string;
  status: string;
  encrypt: string;
}

interface EncryptCaTablePropTypes {
  marksTableData: marksType[];
  setMarksTableData: React.Dispatch<React.SetStateAction<marksType[]>>;
}

const EncryptCaTable = ({
  marksTableData,
  setMarksTableData,
}: EncryptCaTablePropTypes) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    filterText: "",
    searchText: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalEncrypted, setTotalEncrypted] = useState<number>(0);
  const [exportData, setExportData] = useState<any>([]);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const pages = [];
  for (let i = 1; i <= Math.ceil(marksTableData?.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(marksTableData?.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    matricule: any
  ) => {
    const { name, value } = e.target;

    const statusValue = e.target.value ? "encrypted" : "not filled";

    const editData = marksTableData.map((item) =>
      item.matricule === matricule && name
        ? { ...item, [name]: value, status: statusValue }
        : item
    );

    setMarksTableData(editData);
  };

  useEffect(() => {
    const count = marksTableData.reduce((acc, curr) => {
      if (curr.encrypt.length > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);

    var newArr = marksTableData.map(function (obj: any) {
      var newObj: any = {};
      for (var key in obj) {
        if (key !== "status") {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    });
    // console.log('zxZXZ',newArr);

    setExportData(newArr);

    // console.log(exportData);

    //  console.log(count);

    setTotalEncrypted(count);
  }, [marksTableData]);

  return (
    <>
      <div className="flex flex-row-reverse justify-between  mt-8 ">
        <div className="w-1/2">
          <TextInput
            placeholder={t("038 or search by status(encrypted or not filled)", {
              ns: ["main", "home"],
            })}
            value={form.searchText}
            name={"searchText"}
            label={t("Search", { ns: ["main", "home"] })}
            type={"text"}
            onChange={(e) => {
              // handleUserSearch(e);
              setForm({ ...form, searchText: e.target.value });
            }}
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <CSVLink
            data={exportData}
            filename="EncryptedCAMarks"
            className="bg-primary  px-4 text-white   py-[10px]    rounded-lg outline-none text-[16px] flex justify-center items-center gap-3"
          >
            {t("Download CA File", { ns: ["main", "home"] })}
          </CSVLink>
          {/* <Button
            text="Download File"
            buttonType="SECONDARY"
            icon={
              <IconRepository.DownloadCloudIcon height={25} color="#42BFDD" />
            }
          /> */}
        </div>
      </div>
      <div className={`${styles.container} `}>
        <table className={`${styles.table} `}>
          <thead className={styles.table__head}>
            <tr
              className={`${styles.table__heading} text-secondary dark:text-white  font-bold`}
            >
              <th> {t("Matricule Number", { ns: ["main", "home"] })}</th>
              <th> {t("CA mark", { ns: ["main", "home"] })}</th>
              <th> {t("Status", { ns: ["main", "home"] })}</th>
              <th> {t("Encrypt", { ns: ["main", "home"] })}</th>
            </tr>
          </thead>
          <tbody>
            {marksTableData
              .filter((value) => {
                return (
                  value.matricule
                    .toLowerCase()
                    .includes(form.searchText.toLowerCase()) ||
                  value.status
                    .toLowerCase()
                    .includes(form.searchText.toLowerCase())
                );

                // return keys.some((key) => value[key].toLowerCase().includes(form.searchText.toLowerCase()));
                //  || value.status.toLowerCase().includes(form.filterText.toLowerCase())
              })
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((mark, index: any) => {
                return (
                  <tr key={mark.id} className="text-secondary dark:text-white">
                    <td className={styles.row__matricule}>{mark.matricule}</td>
                    <td className={styles.row__ca}>{mark.ca}</td>
                    <td className={styles.row__status}>
                      {mark.encrypt?.length > 0 ? (
                        <StatusCard encrypted={"encrypted"} />
                      ) : (
                        <StatusCard encrypted={"not filled"} />
                      )}
                    </td>
                    <td className={styles.row__input}>
                      <input
                        name="encrypt"
                        type="text"
                        value={mark.encrypt}
                        onChange={(e) => onChangeInput(e, mark.matricule)}
                        placeholder="Encrypt mark"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div className="flex justify-between items-center">
          <span className={"text-[14px] text-secondary dark:text-white"}>
            {t("Total of", { ns: ["main", "home"] })} {marksTableData?.length}{" "}
            {t("students", { ns: ["main", "home"] })}, {totalEncrypted}{" "}
            {t("encrypted", { ns: ["main", "home"] })}
          </span>

          <div className={"flex  items-center mt-5 py-3 gap-3"}>
            <span onClick={previousPage}>
              <IconRepository.LeftPaginationIcon />
            </span>
            <p className={"text-[14px] text-secondary dark:text-white"}>
              {t("showing", { ns: ["main", "home"] })} {currentPage}{" "}
              {t("of", { ns: ["main", "home"] })} {pages.length}{" "}
              {t("pages", { ns: ["main", "home"] })}
            </p>
            <span onClick={nextPage}>
              <IconRepository.RightPaginationIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EncryptCaTable;
