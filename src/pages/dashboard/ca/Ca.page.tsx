import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common';
import ModalContainer from '../../../components/common/modal/modal-container/ModalContainer.common';
import AddMarksModal from '../../../components/common/modal/modules/marks/AddMarksModal.module';
import { MarksType } from '../../../types/atoms/enums.atoms';

const CaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const [selectedFile, setSelectedFile] = useState('');
  return (
    <div>
      {" "}
      <DashboardHeader
        label={"CA"}
        ButtonText="Add CA marks"
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddMarksModal modalType={MarksType.CA}  />
        </ModalContainer>
      )}
    </div>
  );
}

// closeModal={() => setIsOpen(false)}

export default CaPage