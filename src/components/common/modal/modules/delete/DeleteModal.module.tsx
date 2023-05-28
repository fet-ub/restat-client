import React from 'react'
import Button from '../../../buttons/Button.common';
import { DeleteModalPropType } from '../../../../../types/common/modal/delete-modal.type';
const DeleteModal = ({record,onClick}:DeleteModalPropType) => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-darkBlue text-center mt-1 ">
        Do you want to delete this {record} ?
      </h1>

      <div className="flex gap-5 mt-9 mb-4">
        <Button 
        text="Cancel" 
        fullWidth={true} 
        buttonType="TERTIARY"
         />
        <Button 
        text="Delete" 
        fullWidth={true} 
        buttonType="ERROR" 
        onClick={onClick}
        />
      </div>
    </div>
  );
}

export default DeleteModal