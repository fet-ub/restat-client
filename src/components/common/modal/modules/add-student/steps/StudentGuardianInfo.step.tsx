import React from "react";
import TextInput from "../../../../inputs/text-input/TextInput.common";
import Button from "../../../../buttons/Button.common";
import { StudentType } from "../../../../../../types/student.type";
import { useAppSelector } from "../../../../../../lib/hooks";
import { ApiRequestStatus } from "../../../../../../types/api.types";
const StudentGuardianInfoStep = ({
  form,
  setForm,
  setCurrentStep,
  closeModal,
  handleAddStudent,
}: {
  form: StudentType;
  setForm: React.Dispatch<React.SetStateAction<StudentType>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  closeModal: () => void;
  handleAddStudent: (e: any) => void;
}) => {
  const createStudentState = useAppSelector(
    (state) => state.createStudentState
  );
  return (
    <form className="dark:bg-tertiary" onSubmit={handleAddStudent}>
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
          required={true}
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
          required={true}
        />

        <div className="flex justify-between gap-10">
          <TextInput
            placeholder="Guardian Email"
            label="Email"
            type="email"
            id="address"
            name="email"
            value={form.guardianEmail}
            onChange={(e) => {
              setForm({ ...form, guardianEmail: e.target.value });
            }}
            required={true}
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
            required={true}
          />
        </div>
        <TextInput
          placeholder="67234521"
          label="Guardian Phone Number"
          type="number"
          id="GuardianPhone"
          name="guardianPhone"
          value={form.guardianPhone}
          onChange={(e) => {
            setForm({ ...form, guardianPhone: e.target.value });
          }}
          required={true}
        />
      </div>

      <div className="flex gap-8 mt-6 mb-6">
        <Button
          text="Back"
          fullWidth={true}
          onClick={() => setCurrentStep(1)}
        />
        <Button
          disable={createStudentState.status === ApiRequestStatus.PENDING}
          text="Add Student"
          fullWidth={true}
          buttonType="PRIMARY"
          // onClick={closeModal}
          loading={createStudentState.status === ApiRequestStatus.PENDING}
        />
      </div>
    </form>
  );
};

export default StudentGuardianInfoStep;
