<<<<<<< HEAD
import React from "react";
import { SelectInputPropType } from "../../../../types/common/input/select-input.type";
import styles from "../input.module.css";
=======
import React from 'react';
import { SelectInputPropType } from '../../../../types/common/input/select-input.type';
import styles from '../input.module.css';
>>>>>>> 65267a3ff91aae2235acedd8d6e6d9f5b4c12c89

const SelectInput = ({
  selectOptions,
  onChange,
  value,
  label,
  placeholder,
}: SelectInputPropType) => {
  return (
    <div className="mb-4 w-full">
      <label className="block  text-[17px] text-secondary dark:text-white  font-[500] mb-2">
        {label}
      </label>
      <select
        value={value}
        className={`${styles.select__container} dark:bg-tertiary dark:text-white`}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {selectOptions?.map((selectOption, index) => {
          return (
            <option value={selectOption.value} key={index}>
              {selectOption.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
