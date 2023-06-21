import React from 'react'
import { ModalContainerPropTypes } from '../../../../types/common/modal-container.type'
import { IconRepository } from '../../../../repository/icons/icon.repository'
import styles from './modalcontainer.module.css'

const ModalContainer = ({children,width,fullWidth,onClick,height}:ModalContainerPropTypes) => {
  return (
    <div className={styles.modal} >
      <div
        className={`py-2 px-4 max-w-[2000px]  border rounded-lg bg-white dark:bg-tertiary dark:border-none`}
        style={{
          boxShadow: "0px 20px 25px rgba(76, 103, 100, 0.1)",
          width:
            fullWidth === true
              ? "100%"
              : width !== undefined
              ? width
              : "fit-content",
          height:
            fullWidth === true
              ? "100%"
              : height !== undefined
              ? height
              : "fit-content",
        }}
      >
        <div className="flex justify-end">
          <div onClick={onClick} style={{ cursor: "pointer" }} >
            <IconRepository.CloseIcon />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ModalContainer