import React, { useState } from 'react';
import {
  USER_ROLE,
  ENGINEERING_DEPARTMENTS,
  // COURSE_PREFIX,
} from '../../../../../repository/constants/constants';
import SelectInput from '../../../inputs/select-input/SelectInput.common';
import TextInput from '../../../inputs/text-input/TextInput.common';
import Button from '../../../buttons/Button.common';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../../lib/hooks';
import { createUserThunk } from '../../../../../app/feature/user/thunk/user.thunk';
import { userRequestType } from '../../../../../types/auth.type';
import { UserType } from '../../../../../types/user.type';
// import { ApiRequestStatus } from "../../../../../types/api.types";

const AddUserModal = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<userRequestType>({
    role: UserType.DEFAULT,
    departmentId: '',
    firstName: '',
    lastName: '',
    email: '',
    facultyId: '1',
  });
  const { t } = useTranslation();

  console.log('role', form.role);
  // console.log(form);

  const handleCreateUser = (event: any) => {
    event.preventDefault();
    dispatch(createUserThunk({ userType: form.role as UserType, body: form }));
    // setIsOpen(false);
  };

  return (
    <div className="px-3 pb-5 bg-white dark:bg-tertiary">
      <h1 className="text-secondary text-3xl font-semibold dark:text-white">
        {t('Add User', {
          ns: ['main', 'home'],
        })}
      </h1>

      <form className="mt-7" onSubmit={handleCreateUser}>
        <div className="flex gap-9 mb-6 ">
          <TextInput
            placeholder="Ayuk"
            label={t('First Name', {
              ns: ['main', 'home'],
            })}
            type="text"
            id="FirstName"
            name="First Name"
            value={form.firstName}
            onChange={(e) => {
              setForm({ ...form, firstName: e.target.value });
            }}
          />
          <TextInput
            placeholder="Tabe"
            label={t('Last Name', {
              ns: ['main', 'home'],
            })}
            type="text"
            id="LastName"
            name="Lirst Name"
            value={form.lastName}
            onChange={(e) => {
              setForm({ ...form, lastName: e.target.value });
            }}
          />
        </div>
        <div className="flex gap-9 mb-6 ">
          <SelectInput
            selectOptions={USER_ROLE}
            placeholder="select role"
            label={t('Role', {
              ns: ['main', 'home'],
            })}
            onChange={(e) => {
              setForm({ ...form, role: e.target.value as unknown as UserType });
            }}
            value={form.role}
          />
          <SelectInput
            selectOptions={ENGINEERING_DEPARTMENTS}
            placeholder="select department"
            label={t('Department', {
              ns: ['main', 'home'],
            })}
            onChange={(e) => {
              setForm({ ...form, departmentId: e.target.value });
            }}
            value={form.departmentId}
          />
        </div>

        <div className="w-full h-full mb-12 ">
          <TextInput
            placeholder={'example@gmail.com'}
            label={t('Email Address', {
              ns: ['main', 'home'],
            })}
            type="email"
            id="Email"
            name="Email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </div>

        {/* {form.role === "lecturer" ? (
          <>
            <TextInput
              placeholder={"Algorithms"}
              label={t("Course Title", {
                ns: ["main", "home"],
              })}
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
                label={t("Course Prefix", {
                  ns: ["main", "home"],
                })}
                value={form.courseprefix}
                onChange={(e) => {
                  setForm({ ...form, courseprefix: e.target.value });
                }}
              />
              <TextInput
                placeholder={"444"}
                label={t("Course Code", {
                  ns: ["main", "home"],
                })}
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
        )} */}

        <div className="flex gap-5 mt-1  mb-8">
          <Button
            text={t('Cancel', {
              ns: ['main', 'home'],
            })}
            fullWidth={true}
            buttonType="TERTIARY"
          />
          <Button
            text={t('Confirm', {
              ns: ['main', 'home'],
            })}
            fullWidth={true}
            buttonType="PRIMARY"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUserModal;
