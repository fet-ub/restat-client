import React, { useState } from 'react'

import { GENDER,MARITAL_STATUS, ENGINEERING_DEPARTMENTS,COURSE_LEVELS ,COMPUTER_PROGRAMS,ELECTRICAL_PROGRAMS } from '../../../../../repository/constants/constants';

import ProgressSteps from '../../../progress-steps/ProgressSteps.common';
import TextInput from '../../../inputs/text-input/TextInput.common';
import SelectInput from '../../../inputs/select-input/SelectInput.common';

const AddStudentModal = () => {
       const [form, setForm] = useState({
         firstname: "",
         lastname: "",
         gender: "",
         status: "",
         dob: "",
         pob: "",
         address: "",
         email: "",
         coursetitle: "",
         coursecode: "",
         courseprefix: "",
       });
  return (
    <div className="px-3 pb-5 bg-white">
      <h1 className="text-secondary text-3xl font-semibold">Add Student</h1>
      <div className="mt-4">
        <ProgressSteps />
      </div>
      <form>
        <div>
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

        <div>
          <SelectInput
            selectOptions={GENDER}
            label="Gender"
            onChange={(e) => {
              setForm({ ...form, gender: e.target.value });
            }}
            value={form.gender}
          />
          <SelectInput
            selectOptions={MARITAL_STATUS}
            label="Status"
            onChange={(e) => {
              setForm({ ...form, status: e.target.value });
            }}
            value={form.status}
          />
        </div>


        <div>
          

        </div>

        <div>
          
        </div>

        <div>

        </div>
      </form>
    </div>
  );
}

export default AddStudentModal