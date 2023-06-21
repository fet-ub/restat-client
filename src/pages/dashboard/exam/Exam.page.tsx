import React ,{ useState }  from 'react'

import DashboardHeader from "../../../components/common/dashboard-header/DashboardHeader.common";
import ModalContainer from "../../../components/common/modal/modal-container/ModalContainer.common";
import AddMarksModal from "../../../components/common/modal/modules/marks/AddMarksModal.module";
import { MarksType } from "../../../types/atoms/enums.atoms";

const ExamPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {" "}
      <DashboardHeader
        label={"Exam"}
        ButtonText="Add Exam marks"
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddMarksModal modalType={MarksType.EXAM} />
        </ModalContainer>
      )}
    </div>
  );
}

export default ExamPage