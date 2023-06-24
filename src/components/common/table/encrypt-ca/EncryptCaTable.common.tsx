import React, { useState } from "react";
import styles from "./encryptCaTable.module.css";
import StatusCard from "../../cards/status-card/StatusCard.common";
// import SelectInput from "../../inputs/select-input/SelectInput.common";
import TextInput from "../../inputs/text-input/TextInput.common";
import Button from "../../buttons/Button.common";
import { IconRepository } from "../../../../repository/icons/icon.repository";
// import { StatusCardType } from "../../../../types/atoms/enums.atoms";
interface marksType {
  id: string;
  matricule: string;
  Ca: string;
  status: string;
  encrypt: string;
}

const EncryptCaTable = () => {
  const [form, setForm] = useState({
    filterText: "",
    searchText: "",
  });

  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  

  const data = [
    {
      id: "01",
      matricule: "FE19A038",
      Ca: "10",
      status: "not filled",
      encrypt: "",
    },
    {
      id: "02",
      matricule: "FE19A037",
      Ca: "20",
      status: "not filled",
      encrypt: "",
    },
    {
      id: "03",
      matricule: "FE19A048",
      Ca: "30",
      status: "not filled",
      encrypt: "",
    },
    {
      id: "04",
      matricule: "FE19A045",
      Ca: "40",
      status: "not filled",
      encrypt: "",
    },
    {
      id: "05",
      matricule: "FE19A028",
      Ca: "50",
      status: "not filled",
      encrypt: "",
    },
    {
      id: "06",
      matricule: "FE19A055",
      Ca: "60",
      status: "not filled",
      encrypt: "",
    },
  ];

  const [marksData, setMarksData] = useState<marksType[]>(data);


  
  //  const [pageNumberLimit, setpageNumberLimit] = useState(6)

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  // const currentMarks = data.slice(
  //   indexOfFirstPost,
  //   indexOfLastPost
  // );

  // console.log(currentMarks)

  // const [filteredData, setFilteredData] = useState<marksType[]>(marksData);

  const pages = [];
  for (let i = 1; i <= Math.ceil(marksData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(marksData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    // console.log("id", id);

    const statusValue= e.target.value?'encrypted':'not filled';

    const editData = marksData.map((item) =>
      item.id === id && name
        ? { ...item, [name]: value, status: statusValue }
        : item
    );

    // console.log("editData", editData);

    // setFilteredData(editData);
    setMarksData(editData)
  };




  // console.log(form.filterText);
  
  return (
    <>
      <div className="flex justify-between  mt-8 ">
        <div className="w-1/2">
          <TextInput
            placeholder={"038 or search by status(encrypted or not filled)"}
            value={form.searchText}
            name={"searchText"}
            label={"Search"}
            type={"text"}
            onChange={(e) => {
              // handleUserSearch(e);
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
            {marksData
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
              .map((mark) => {
                return (
                  <tr key={mark.id} className="text-secondary dark:text-white">
                    <td className={styles.row__matricule}>{mark.matricule}</td>
                    <td className={styles.row__ca}>{mark.Ca}</td>
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
