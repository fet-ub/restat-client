import React from "react";
import TextInput from "../../../../inputs/text-input/TextInput.common";
import Button from "../../../../buttons/Button.common";

const StudentGuardianInfoStep = ({
  form,
  setForm,
  setCurrentStep,
  closeModal,
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
    guardianPhoneNumber: string;
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
      guardianPhoneNumber: string;
    }>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  closeModal: () => void;
}) => {
  return (
    <form className="dark:bg-tertiary">
      <div className="flex flex-col gap-3 mt-7">
        <TextInput
          placeholder="Ayuk"
          label="Guardian First Name"
          type="text"
          id="GuardianFirstName"
          name="guardianfirstsname"
          value={form.guardianFirstName}
          onChange={(e) => {
            setForm({ ...form, guardianFirstName: e.target.value });
          }}
        />
        <TextInput
          placeholder="Tabe"
          label="Guardian Last Name"
          type="text"
          id="GuardianLastName"
          name="guardianlasstsname"
          value={form.guardianLastName}
          onChange={(e) => {
            setForm({ ...form, guardianLastName: e.target.value });
          }}
        />

        <div className="flex justify-between gap-10">
          <TextInput
            placeholder="Guardian Email"
            label="Address"
            type="email"
            id="address"
            name="email"
            value={form.guardianEmail}
            onChange={(e) => {
              setForm({ ...form, guardianEmail: e.target.value });
            }}
          />
          <TextInput
            placeholder="Buea Town"
            label="Guardian Address"
            type="text"
            id="guardianAddress"
            name="guardianaddress"
            value={form.guardianAddress}
            onChange={(e) => {
              setForm({ ...form, guardianAddress: e.target.value });
            }}
          />
        </div>
        <TextInput
          placeholder="67234521"
          label="Guardian Phone Number"
          type="number"
          id="GuardianLastName"
          name="guardianlasstsname"
          value={form.guardianPhoneNumber}
          onChange={(e) => {
            setForm({ ...form, guardianPhoneNumber: e.target.value });
          }}
        />
      </div>

      <div className="flex gap-8 mt-6 mb-6">
        <Button
          text="Back"
          fullWidth={true}
          onClick={() => setCurrentStep(1)}
        />
        <Button
          text="Add Student"
          fullWidth={true}
          buttonType="PRIMARY"
          onClick={closeModal}
        />
      </div>
    </form>
  );
};

export default StudentGuardianInfoStep;
