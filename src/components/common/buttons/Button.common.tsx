import React from "react";
import { ButtonTypes } from "../../../types/common/button/button.type";
import ButtonLoader from "../loader/ButtonLoader.common";

const Button = ({
  text,
  buttonType,
  width,
  fullWidth,
  disable,
  onClick,
  icon,
  loading,
}: ButtonTypes) => {
  return (
    <button
      className={`${
        buttonType === "PRIMARY"
          ? "bg-primary text-white border-primary"
          : buttonType === "SECONDARY"
          ? "bg-transparent border border-primary text-primary"
          : buttonType === "TERTIARY"
          ? "bg-transparent border text-secondary dark:text-white border-slate-300"
          : buttonType === "ERROR"
          ? "bg-errorColor text-white"
          : "text-primary"
      }
     py-[10px] px-5 border  rounded-lg outline-none text-[16px] flex justify-center items-center gap-3 `}
      onClick={onClick}
      disabled={disable}
      style={{
        cursor: disable === true ? "not-allowed" : "pointer",
        width:
          fullWidth === true
            ? "100%"
            : width !== undefined
            ? width
            : "fit-content",
      }}
    >
      {icon ? (
        <span className="flex justify-center items-center">{icon}</span>
      ) : (
        ""
      )}
      {loading ? <ButtonLoader /> : text}
    </button>
  );
};

export default Button;
