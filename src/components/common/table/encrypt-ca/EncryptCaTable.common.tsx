import React, { useState } from "react";
import styles from "./encryptCaTable.module.css";
import StatusCard from "../../cards/status-card/StatusCard.common";
import SelectInput from "../../inputs/select-input/SelectInput.common";
import TextInput from "../../inputs/text-input/TextInput.common";
import Button from "../../buttons/Button.common";
import { IconRepository } from "../../../../repository/icons/icon.repository";
// import { StatusCardType } from "../../../../types/atoms/enums.atoms";
interface marksType {
  id: string;
  matricule: string;
  Ca: string;
  status: boolean;
  encrypt: string;
}

const EncryptCaTable = () => {
  const [form, setForm] = useState({
    filterText: "",
    searchText: "",
  });
  const data = [
    {
      id: "01",
      matricule: "FE19A038",
      Ca: "30",
      status: false,
      encrypt: '',
    },
    {
      id: "02",
      matricule: "FE19A037",
      Ca: "25",
      status: false,
      encrypt: '',
    },
    {
      id: "03",
      matricule: "FE19A048",
      Ca: "10",
      status: false,
      encrypt: '',
    },
  ];

  const [marksData, setMarksData] = useState<marksType[]>(data);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  //  const [pageNumberLimit, setpageNumberLimit] = useState(6)

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentMarks = data.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    console.log("id", id);

    const statusValue= e.target.value?true:false

    const editData = marksData.map((item) =>
      item.id === id && name
        ? { ...item, [name]: value, status: statusValue }
        : item
    );

    console.log("editData", editData);

    setMarksData(editData);
  };
  return (
    <>
      <div className="flex flex-col mt-8 ">
        <div className="flex gap-32">
          <SelectInput
            selectOptions={[
              {
                label: "Status",
                value: "status",
              },
              {
                label: "Matricule",
                value: "matricule",
              },
            ]}
            label="Filter"
            value={form.filterText}
            onChange={(e) => {
              setForm({ ...form, filterText: e.target.value });
            }}
          />
          <TextInput
            placeholder={"Search....."}
            value={form.searchText}
            name={"searchText"}
            label={"Search"}
            type={"text"}
            onChange={(e) => {
              setForm({ ...form, searchText: e.target.value });
            }}
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <Button
            text="Download File"
            buttonType="SECONDARY"
            icon={
              <IconRepository.DownloadCloudIcon height={25} color="#42BFDD" />
            }
          />
        </div>
      </div>
      <div className={`${styles.container} `}>
        <table className={`${styles.table} `}>
          <thead className={styles.table__head}>
            <tr
              className={`${styles.table__heading} text-secondary dark:text-white  font-bold`}
            >
              <th>Matricule Number</th>
              <th>CA Mark</th>
              <th>Status</th>
              <th>Encrypt </th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((mark) => {
              return (
                <tr key={mark.id} className="text-secondary dark:text-white">
                  <td className={styles.row__matricule}>{mark.matricule}</td>
                  <td className={styles.row__ca}>{mark.Ca}</td>
                  <td className={styles.row__status}>
                    {mark.encrypt?.length > 0 ? (
                      <StatusCard encrypted={true} />
                    ) : (
                      <StatusCard encrypted={false} />
                    )}
                  </td>
                  <td className={styles.row__input}>
                    <input
                      name="encrypt"
                      type="text"
                      value={mark.encrypt}
                      onChange={(e) => onChangeInput(e, mark.id)}
                      placeholder="Encrypt mark"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={"flex justify-end items-center mt-5 py-3 gap-3"}>
          <span onClick={previousPage}>
            <IconRepository.LeftPaginationIcon />
          </span>
          <p className={"text-[14px] text-secondary dark:text-white"}>
            showing {currentPage} of {pages.length} pages
          </p>
          <span onClick={nextPage}>
            <IconRepository.RightPaginationIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default EncryptCaTable;
