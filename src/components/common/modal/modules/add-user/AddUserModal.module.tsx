import React, { useState } from 'react'
import { USER_ROLE ,ENGINEERING_DEPARTMENTS, COURSE_PREFIX} from '../../../../../repository/constants/constants'
import SelectInput from '../../../inputs/select-input/SelectInput.common';
import TextInput from '../../../inputs/text-input/TextInput.common';
import Button from '../../../buttons/Button.common';

const AddUserModal = () => {
     const [form, setForm] = useState({
        role:'',
       department: '',
       firstname: "",
       lastname: "",
       email: "",
       coursetitle: "",
       coursecode: "",
       courseprefix: "",
     });
  return (
    <div className="px-3 pb-5 bg-white">
      <h1 className="text-secondary text-3xl font-semibold">Add User</h1>

      <form className="mt-7">
        <div className="flex gap-9 mb-6 ">
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
        <div className="flex gap-9 mb-6 ">
          <SelectInput
            selectOptions={USER_ROLE}
            label="Role"
            onChange={(e) => {
              setForm({ ...form, role: e.target.value });
            }}
            value={form.role}
          />
          <SelectInput
            selectOptions={ENGINEERING_DEPARTMENTS}
            label="Department"
            onChange={(e) => {
              setForm({ ...form, department: e.target.value });
            }}
            value={form.department}
          />
        </div>

        <div className='w-full h-full mb-12 '>
          <TextInput
            placeholder={"example@gmail.com"}
            label="Email Address"
            type="email"
            id="Email"
            name="Email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </div>

        {form.role === "lecturer" ? (
          <>
            <TextInput
              placeholder={"Algorithms"}
              label="Course Title"
              type="text"
              id="CourseTitle"
              name="Course Title"
              value={form.coursetitle}
              onChange={(e) => {
                setForm({ ...form, coursetitle: e.target.value });
              }}
            />
            <div className="flex gap-5 items-center ">
              <SelectInput
                selectOptions={COURSE_PREFIX}
                label="Course Prefix"
                value={form.courseprefix}
                onChange={(e) => {
                  setForm({ ...form, courseprefix: e.target.value });
                }}
              />
              <TextInput
                placeholder={"444"}
                label="Course Code"
                type="number"
                id="CourseCode"
                name="Course Code"
                value={form.coursecode}
                onChange={(e) => {
                  setForm({ ...form, coursecode: e.target.value });
                }}
              />
            </div>
          </>
        ) : (
          ""
        )}

        <div className="flex gap-5 mt-1  mb-8">
          <Button text="Cancel" fullWidth={true} buttonType="TERTIARY" />
          <Button text="confirm" fullWidth={true} buttonType="PRIMARY" />
        </div>
      </form>
    </div>
  );
}

export default AddUserModal