import React from 'react'
import { SelectInputPropType } from '../../../../types/common/input/select-input.type';
import styles from '../input.module.css'

const SelectInput = ({
  selectOptions,
  onChange,
  value,
  label,
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

export default SelectInput