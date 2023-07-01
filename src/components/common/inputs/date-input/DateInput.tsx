import React from "react";
import { InputTypes } from "../../../../types/common/input/text-input.type";
const DateInput = ({
  id,
  label,
  name,
  value,
  placeholder,
  onChange,
}: InputTypes) => {
  return (
    <div className="mb-4 w-full">
      <label className="block  text-[17px] text-secondary  dark:text-white font-[500] mb-2">
        {label}
      </label>
      <input
        className={` border border-slate-300 rounded-lg w-full py-6 px-3 text-secondary font-normal text-[17px] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[17px] placeholder:font-normal focus:ring-1 dark:bg-tertiary dark:text-white ${
          value.length > 2
            ? "focus:ring-1 focus:ring-validColor"
            : value.length === 0
            ? ""
            : "focus:ring-1 focus:ring-errorColor"
        }`}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        type={"date"}
      />
    </div>
  );
};

export default DateInput;
