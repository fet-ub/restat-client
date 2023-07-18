import React, { useState, useEffect } from "react";
import { IconRepository } from "../../../../repository/icons/icon.repository";
import TextInput from "../../inputs/text-input/TextInput.common";
import { CSVLink } from "react-csv";
import { useTranslation } from "react-i18next";
import styles from "../encrypt-ca/encryptCaTable.module.css";
// import StatusCard from "../../cards/status-card/StatusCard.common";
import FilledCard from "../../cards/filled-card/FilledCard.common";
import EditIcon from "../../../../icons/Edit.icon";
import DeleteIcon from "../../../../icons/Delete.icon";
import { StudentResponseTypes } from "../../../../types/student.type";

export interface ExamMarksType extends StudentResponseTypes {
  mark: string;
  studentCodeId: string;
  filledStatus: string;
}

interface ExamTablePropTypes {
  marksTableData: ExamMarksType[];
  setMarksTableData: React.Dispatch<React.SetStateAction<ExamMarksType[]>>;
  courseCode?: string;
  courseName?: string;
}

const AddExamTable = ({
  marksTableData,
  setMarksTableData,
  courseCode,
  courseName,
}: ExamTablePropTypes) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    filterText: "",
    searchText: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalFilled, setTotalFilled] = useState<number>(0);
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

  //   const handleKeyDown = (event: any) => {
  //     if (event.keyCode === 40) {
  //       // 40 is the keycode for down arrow key
  //       event.target.nextSibling.focus();
  //     }
  //   };

  const onChangeExamInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    matricule: any,
    mark: any,
    studentCodeId: any
  ) => {
    const { name, value } = e.target;

    const statusValue = e.target.value ? "filled" : "not filled";

    // const specificMark

    const editData = marksTableData.map((item) =>
      item.matriculationNumber === matricule && name
        ? {
            ...item,
            [name]: value,
            filledStatus: statusValue,
          }
        : item
    );

    setMarksTableData(editData);
  };

  useEffect(() => {
    const count = marksTableData.reduce((acc, curr) => {
      if (curr.mark?.length > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);

    var newArr = marksTableData.map(function (obj: any) {
      // var newObj: any = [];
      return {
        firstName: obj.user.firstName,
        lastName: obj.user.lastName,
        matriculationNumber: obj.matriculationNumber,
        mark: obj.mark,
        studentCodeId: obj.studentCodeId,
      };

      // for (var key in obj) {
      //   if (
      //     key === "matriculationNumber" ||
      //     key === "mark" ||
      //     key === "firstName"
      //   ) {
      //     newObj[key] = obj[key];
      //   }
      // }
      // return newObj;
    });
    // console.log("zxZXZ", newArr);

    setExportData(newArr);

    // console.log(exportData);

    //  console.log(count);

    setTotalFilled(count);
  }, [marksTableData]);

  return (
    <>
      <div className="flex flex-row-reverse justify-between  mt-8 ">
        <div className="w-1/2">
          <TextInput
            placeholder={t("038 or search by status(filled or not filled)", {
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
            filename="CourseMarks"
            className="bg-primary  px-4 text-white   py-[10px]    rounded-lg outline-none text-[16px] flex justify-center items-center gap-3"
          >
            {t(`Export ${courseCode}: ${courseName} `, {
              ns: ["main", "home"],
            })}
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
              <th> {t("Name", { ns: ["main", "home"] })}</th>
              <th> {t("Status", { ns: ["main", "home"] })}</th>
              <th> {t("Encrytion key", { ns: ["main", "home"] })}</th>
              <th> {t("Exam mark", { ns: ["main", "home"] })}</th>

              <th> {t("Action", { ns: ["main", "home"] })}</th>
            </tr>
          </thead>
          <tbody>
            {marksTableData
              .filter((value) => {
                return (
                  value.matriculationNumber
                    .toLowerCase()
                    .includes(form.searchText.toLowerCase()) ||
                  value.filledStatus
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
                    <td className={styles.row__matricule}>
                      {mark.matriculationNumber}
                    </td>
                    <td className={styles.row__name}>
                      {mark.user.firstName} {mark.user.lastName}
                    </td>
                    <td className={styles.row__status}>
                      {mark.mark?.length && mark.studentCodeId.length > 0 ? (
                        <FilledCard filled={"filled"} />
                      ) : (
                        <FilledCard filled={"not filled"} />
                      )}
                    </td>
                    <td className={styles.row__input}>
                      <input
                        name="studentCodeId"
                        type="text"
                        value={mark.studentCodeId}
                        onChange={(e) => {
                          onChangeExamInput(
                            e,
                            mark.matriculationNumber,
                            mark.mark,
                            mark.studentCodeId
                          );
                        }}
                        // onKeyDown={(e) => {
                        //   handleKeyDown(e);
                        // }}
                        placeholder="Enter code"
                      />
                    </td>
                    <td className={styles.row__input}>
                      <input
                        name="mark"
                        type="text"
                        value={mark.mark}
                        onChange={(e) => {
                          onChangeExamInput(
                            e,
                            mark.matriculationNumber,
                            mark.mark,
                            mark.studentCodeId
                          );
                        }}
                        // onKeyDown={(e) => {
                        //   handleKeyDown(e);
                        // }}
                        placeholder="Enter mark"
                      />
                    </td>
                    <td className={styles.row__ca}>
                      {" "}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          // justifyContent: "space-between",
                          alignItems: "center",
                          gap: "20px",
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
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div className="flex justify-between items-center">
          <span className={"text-[14px] text-secondary dark:text-white"}>
            {t("Total of", { ns: ["main", "home"] })} {marksTableData?.length}{" "}
            {t("students", { ns: ["main", "home"] })}, {totalFilled}{" "}
            {t("filled", { ns: ["main", "home"] })}
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

export default AddExamTable;
