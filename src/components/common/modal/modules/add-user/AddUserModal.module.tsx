import React, { useState } from "react";
import {
  USER_ROLE,
  ENGINEERING_DEPARTMENTS,
  COURSE_PREFIX,
} from "../../../../../repository/constants/constants";
import SelectInput from "../../../inputs/select-input/SelectInput.common";
import TextInput from "../../../inputs/text-input/TextInput.common";
import Button from "../../../buttons/Button.common";
import { useTranslation } from "react-i18next";

const AddUserModal = () => {
  const [form, setForm] = useState({
    role: "",
    department: "",
    firstname: "",
    lastname: "",
    email: "",
    coursetitle: "",
    coursecode: "",
    courseprefix: "",
  });
  const { t } = useTranslation();

  return (
    <div className="px-3 pb-5 bg-white dark:bg-tertiary">
      <h1 className="text-secondary text-3xl font-semibold dark:text-white">
        {t("Add User", {
          ns: ["main", "home"],
        })}
      </h1>

      <form className="mt-7">
        <div className="flex gap-9 mb-6 ">
          <TextInput
            placeholder="Ayuk"
            label={t("First Name", {
              ns: ["main", "home"],
            })}
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
            label={t("Last Name", {
              ns: ["main", "home"],
            })}
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
            label={t("Role", {
              ns: ["main", "home"],
            })}
            onChange={(e) => {
              setForm({ ...form, role: e.target.value });
            }}
            value={form.role}
          />
          <SelectInput
            selectOptions={ENGINEERING_DEPARTMENTS}
            label={t("Department", {
              ns: ["main", "home"],
            })}
            onChange={(e) => {
              setForm({ ...form, department: e.target.value });
            }}
            value={form.department}
          />
        </div>

        <div className="w-full h-full mb-12 ">
          <TextInput
            placeholder={"example@gmail.com"}
            label={t("Email Address", {
              ns: ["main", "home"],
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

        {form.role === "lecturer" ? (
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
        )}

        <div className="flex gap-5 mt-1  mb-8">
          <Button
            text={t("Cancel", {
              ns: ["main", "home"],
            })}
            fullWidth={true}
            buttonType="TERTIARY"
          />
          <Button
            text={t("Confirm", {
              ns: ["main", "home"],
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
