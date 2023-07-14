import React from 'react';
import TextInput from '../../../../inputs/text-input/TextInput.common';
import Button from '../../../../buttons/Button.common';
import SelectInput from '../../../../inputs/select-input/SelectInput.common';
import {
  GENDER,
  MARITAL_STATUS,
  REGIONS,
} from '../../../../../../repository/constants/constants';
import DateInput from '../../../../inputs/date-input/DateInput';
import { StudentType } from '../../../../../../types/student.type';
// import { AddStudentPropType } from '../../../../../../types/common/modal/add-student-modal.type';

const StudentPersonalInfoStep = ({
  form,
  setForm,
  setCurrentStep,
  closeModal,
}: {
  form: StudentType;
  setForm: React.Dispatch<React.SetStateAction<StudentType>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  closeModal: () => void;
}) => {
  return (
    <form className="dark:bg-tertiary">
      <div className="flex justify-between gap-10 mt-6 mb-4">
        <TextInput
          placeholder="Ayuk"
          label="First Name"
          type="text"
          id="FirstName"
          name="FirstName"
          value={form.firstName}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
          required={true}
        />
        <TextInput
          placeholder="Tabe"
          label="Last Name"
          type="text"
          id="LastName"
          name="LastName"
          value={form.lastName}
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value });
          }}
          required={true}
        />
      </div>

      <div className="flex justify-between gap-10 mb-2 ">
        <SelectInput
          selectOptions={GENDER}
          placeholder="select gender"
          label="Gender"
          onChange={(e) => {
            setForm({ ...form, gender: e.target.value });
          }}
          value={form.gender}
          mb-4
        />
        <SelectInput
          selectOptions={MARITAL_STATUS}
          placeholder="select marital status"
          label="Status"
          onChange={(e) => {
            setForm({ ...form, status: e.target.value });
          }}
          value={form.status}
        />
        <DateInput
          label="DOB"
          name="dob"
          value={form.dob}
          onChange={(e) => {
            setForm({ ...form, dob: e.target.value });
          }}
          required={true}
        />
      </div>

      <div className="flex justify-between gap-10 mb-4">
        <TextInput
          placeholder="Buea"
          label="Place of Birth"
          type="text"
          id="pob"
          name="pob"
          value={form.placeOfBirth}
          onChange={(e) => {
            setForm({ ...form, placeOfBirth: e.target.value });
          }}
          required={true}
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
          required={true}
        />
      </div>

      <div className="flex justify-between gap-10 mb-4">
        <SelectInput
          selectOptions={REGIONS}
          placeholder="select region"
          label="Region"
          onChange={(e) => {
            setForm({ ...form, region: e.target.value });
          }}
          value={form.region}
        />
        <TextInput
          placeholder="National ID number"
          label="National Identification"
          type="text"
          id="nationalIdentification"
          name="nationalIdentification"
          value={form.nationalIdentification}
          onChange={(e) => {
            setForm({ ...form, nationalIdentification: e.target.value });
          }}
          required={true}
        />
      </div>

      <div className="flex justify-between gap-10">
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
          required={true}
        />

        <TextInput
          placeholder="6745020442"
          label="Phone Number"
          type="number"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={(e) => {
            setForm({ ...form, phone: e.target.value });
          }}
          required={true}
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

export default StudentPersonalInfoStep;
