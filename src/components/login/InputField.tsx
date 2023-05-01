import React from 'react'

interface InputFieldProps{
    labelTitle: string;
    placeholderTitle: string;
    inputType: string;
    inputFieldData: any;
}

const InputField = ({labelTitle,placeholderTitle,inputType,inputFieldData}:InputFieldProps) => {
  return (
    <>
      <label className="text-xl font-semibold ">{labelTitle}</label>
      <br />
      <input
        type={inputType}
        className="w-full mt-2  pl-5  py-3 font-normal placeholder-brownColor   border rounded-md ring-1 ring-brownColor placeholder:font-normal placeholder:text-[18px] focus:outline-none "
        placeholder={placeholderTitle}
        {...inputFieldData}
      />
    </>
  );
}

export default InputField