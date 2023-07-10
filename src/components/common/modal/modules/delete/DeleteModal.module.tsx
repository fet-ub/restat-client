import React from "react";
import Button from "../../../buttons/Button.common";
import { DeleteModalPropType } from "../../../../../types/common/modal/delete-modal.type";
const DeleteModal = ({
  record,
  onClick,
  closeModal,
  disable,
  loading,
}: DeleteModalPropType) => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-darkBlue text-center mt-1 mb-10 dark:white ">
        Do you want to delete {record} ?
      </h1>

      <div className="flex gap-5 mt-12 mb-4">
        <Button
          text="Cancel"
          fullWidth={true}
          buttonType="TERTIARY"
          onClick={closeModal}
        />
        <Button
          text="Delete"
          fullWidth={true}
          buttonType="ERROR"
          onClick={onClick}
          disable={disable}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default DeleteModal;
