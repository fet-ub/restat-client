import React, { useState } from 'react'
import DashboardHeader from '../../../components/common/dashboard-header/DashboardHeader.common';
import ModalContainer from '../../../components/common/modal/modal-container/ModalContainer.common';
import AddCaModal from '../../../components/common/modal/modules/ca/AddCaModal.module';

const CaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const [selectedFile, setSelectedFile] = useState('');
  return (
    <div>
      {" "}
      <DashboardHeader
        label={"Dashboard"}
        ButtonText="Add CA marks"
        onClick={() => setIsOpen(true)}
        displayButton={true}
      />
      {isOpen && (
        <ModalContainer width="700px" onClick={() => setIsOpen(false)}>
          <AddCaModal  />
        </ModalContainer>
      )}
    </div>
  );
}

// closeModal={() => setIsOpen(false)}

export default CaPage