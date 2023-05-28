import React from 'react'
import { ButtonTypes } from '../../../types/common/button/button.type'

const Button = ({text,buttonType,width,fullWidth,disable,onClick,icon}:ButtonTypes) => {
  return (
    <button
      className={`${
        buttonType === "PRIMARY"
          ? "bg-primary text-white"
          : buttonType === "SECONDARY"
          ? "bg-transparent border border-primary text-primary"
          : buttonType === "TERTIARY"
          ? "bg-transparent border text-secondary border-slate-300"
          : buttonType === "ERROR"
          ? "bg-errorColor text-white"
          : "text-primary"
      }
     py-[10px] px-5 border rounded-lg outline-none text-[16px] flex justify-center items-center `}
      onClick={onClick}
      disabled={disable}
      style={{
        cursor:
          disable === true  ? "not-allowed" : "pointer",
        width:
          fullWidth === true
            ? "100%"
            : width !== undefined
            ? width
            : "fit-content",
      }}
    >
        {
            icon?<span className='flex justify-center items-center'>{icon}</span>:''
        }
      {text}
    </button>
  );
}

export default Button