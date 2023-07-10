import React from "react";
import { StatusModalPropType } from "../../../../../types/common/modal/status-modal.type";
import { IconRepository } from "../../../../../repository/icons/icon.repository";
import Button from "../../../buttons/Button.common";

const StatusModal = ({ status, text, onClick }: StatusModalPropType) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        {status === "SUCCESS" ? (
          <IconRepository.SuccessIcon />
        ) : status === "ERROR" ? (
          <IconRepository.CloseCircleIcon />
        ) : (
          ""
        )}
      </div>
      <h1 className="text-2xl font-medium text-center my-4">{text}</h1>
      <div className="mb-6">
        <Button
          buttonType="PRIMARY"
          fullWidth={true}
          text={
            status === "SUCCESS" ? "Close" : status === "ERROR" ? "Confirm" : ""
          }
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default StatusModal;
