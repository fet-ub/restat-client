import React from 'react'
import TextInput from '../../../../inputs/text-input/TextInput.common';
import Button from '../../../../buttons/Button.common';
import SelectInput from '../../../../inputs/select-input/SelectInput.common';
import { GENDER, MARITAL_STATUS, SCHOOL_YEAR } from '../../../../../../repository/constants/constants';
// import { AddStudentPropType } from '../../../../../../types/common/modal/add-student-modal.type';

const StudentPersonalInfoStep = ({
  form,
  setForm,
  setCurrentStep,
  closeModal
}: {
  form: {
    firstname: string;
    lastname: string;
    gender: string;
    status: string;
    dob: string;
    pob: string;
    region: string;
    address: string;
    country: string;
    idCard: string;
    email: string;
    matricule: string;
    level: string;
    year: string;
    faculty: string;
    department: string;
    program: string;
    certificate: string;
    yearObtained: string;
    guardianFirstName: string;
    guardianLastName: string;
    guardianEmail: string;
    guardianAddress: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      firstname: string;
      lastname: string;
      gender: string;
      status: string;
      dob: string;
      pob: string;
      region: string;
      address: string;
      country: string;
      idCard: string;
      email: string;
      matricule: string;
      level: string;
      year: string;
      faculty: string;
      department: string;
      program: string;
      certificate: string;
      yearObtained: string;
      guardianFirstName: string;
      guardianLastName: string;
      guardianEmail: string;
      guardianAddress: string;
    }>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  closeModal:()=>void;
}) => {
  return (
    <form className="dark:bg-tertiary">
      <div className="flex justify-between gap-10 mt-6 mb-4">
        <TextInput
          placeholder="Ayuk"
          label="First Name"
          type="text"
          id="FirstName"
          name="First Name"
          value={form.firstname}
          onChange={(e) => {
            setForm({ ...form, firstname: e.target.value });
          }}
        />
        <TextInput
          placeholder="Tabe"
          label="Last Name"
          type="text"
          id="LastName"
          name="Lirst Name"
          value={form.lastname}
          onChange={(e) => {
            setForm({ ...form, lastname: e.target.value });
          }}
        />
      </div>

      <div className="flex justify-between gap-10 mb-2 ">
        <SelectInput
          selectOptions={GENDER}
          label="Gender"
          onChange={(e) => {
            setForm({ ...form, gender: e.target.value });
          }}
          value={form.gender}
          mb-4
        />
        <SelectInput
          selectOptions={MARITAL_STATUS}
          label="Status"
          onChange={(e) => {
            setForm({ ...form, status: e.target.value });
          }}
          value={form.status}
        />
        <SelectInput
          selectOptions={SCHOOL_YEAR}
          label="DOB"
          onChange={(e) => {
            setForm({ ...form, dob: e.target.value });
          }}
          value={form.dob}
        />
      </div>

      <div className="flex justify-between gap-10 mb-4">
        <TextInput
          placeholder="Buea"
          label="Place of Birth"
          type="text"
          id="pob"
          name="Place of Birth"
          value={form.pob}
          onChange={(e) => {
            setForm({ ...form, pob: e.target.value });
          }}
        />
        <TextInput
          placeholder="Buea Town"
          label="Address"
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={(e) => {
            setForm({ ...form, address: e.target.value });
          }}
        />
      </div>

      <div className="flex justify-between gap-10 mb-4">
        <TextInput
          placeholder="South-West"
          label="Region"
          type="text"
          id="region"
          name="region"
          value={form.region}
          onChange={(e) => {
            setForm({ ...form, region: e.target.value });
          }}
        />
        <TextInput
          placeholder="National ID number"
          label="National Identification"
          type="text"
          id="idCard"
          name="idCard"
          value={form.idCard}
          onChange={(e) => {
            setForm({ ...form, idCard: e.target.value });
          }}
        />
      </div>

      <div className="flex justify-between gap-10">
        <TextInput
          placeholder="South-West"
          label="Region"
          type="text"
          id="region"
          name="region"
          value={form.region}
          onChange={(e) => {
            setForm({ ...form, region: e.target.value });
          }}
        />
        <TextInput
          placeholder="Cameroon"
          label="Country"
          type="text"
          id="country"
          name="country"
          value={form.country}
          onChange={(e) => {
            setForm({ ...form, country: e.target.value });
          }}
        />
      </div>

      <div className="flex gap-8 mt-3">
        <Button text="Cancel" fullWidth={true} onClick={closeModal} />
        <Button
          text="Next"
          fullWidth={true}
          buttonType="PRIMARY"
          onClick={() => setCurrentStep(1)}
        />
      </div>
    </form>
  );
};

export default StudentPersonalInfoStep