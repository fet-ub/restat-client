import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddMarksModal from "../../../components/common/modal/modules/marks/AddMarksModal.module";
import { MarksType } from "../../../types/atoms/enums.atoms";
import { useTranslation } from "react-i18next";
import SelectInput from "../../../components/common/inputs/select-input/SelectInput.common";
import AddCaTable from "../../../components/common/table/add-ca/AddCaTable.common";
import { useAppSelector } from "../../../lib/hooks";
import { RootState } from "../../../app/store/store";
import { marksType } from "../../../components/common/table/add-ca/AddCaTable.common";
import Button from "../../../components/common/buttons/Button.common";
import { CourseResponseTypes } from "../../../types/course.type";

const CaPage = () => {
  const { t } = useTranslation();
  const getStudentsState = useAppSelector(
    (state: RootState) => state.getStudentsState
  );

  const getCoursesState = useAppSelector(
    (state: RootState) => state.getCoursesState
  );

  // console.log(getStudentsState.students);

  const [isOpen, setIsOpen] = useState(false);
  const [allStudents, setAllStudents] = useState<marksType[]>([]);
  const [marksTableData, setMarksTableData] = useState<any>([
    {
      matriculationNumber: "FE19A038",
      mark: "",
      filledStatus: "not filled",
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState<any>("");

  useEffect(() => {
    const result = getStudentsState.students.map((obj) => ({
      ...obj,
      filledStatus: "not filled",
      mark: "",
    }));

    // const courseResult=getCoursesState.courses.map((obj)=>{
    //   ...object,

    // })

    setAllStudents(result);
  }, []);

  const formatedCourses = getCoursesState.courses.map((obj, index) => ({
    ...obj,
    label: obj.name,
    value: index,
  }));

  console.log(selectedCourse);

  console.log("zxczxczx", formatedCourses);

  // const [selectedFile, setSelectedFile] = useState('');
  return (
    <div>
      {" "}
      <DashboardHeader
        label={t("CA", { ns: ["main", "home"] })}
        ButtonText={t("Add CA marks", { ns: ["main", "home"] })}
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />
      <div className="w-[40%] mt-12">
        <SelectInput
          selectOptions={formatedCourses}
          label={t("Course", { ns: ["main", "home"] })}
          value={selectedCourse}
          onChange={(e) => {
            setSelectedCourse(e.target.value);
          }}
        />
      </div>
      <AddCaTable
        marksTableData={allStudents}
        setMarksTableData={setAllStudents}
      />
      <div className="w-full flex items-center justify-center mt-10">
        <Button text={"Upload Marks"} width="500px" buttonType="PRIMARY" />
      </div>
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddMarksModal modalType={MarksType.CA} />
        </ModalContainer>
      )}
    </div>
  );
};

// closeModal={() => setIsOpen(false)}

export default CaPage;
