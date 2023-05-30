import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/common/inputs/text-input/TextInput.common";
import PasswordInput from "./components/common/inputs/password-input/PasswordInput.common";
import Button from "./components/common/buttons/Button.common";
import SelectInput from "./components/common/inputs/select-input/SelectInput.common";
import { LANGUAGE_CONSTANTS } from "./repository/constants/constants";
import DashboardCard from "./components/common/cards/dashboard-card/DashboardCard.common";
import { IconRepository } from "./repository/icons/icon.repository";
import ModalContainer from "./components/common/modal/modal-container/ModalContainer.common";
import LogoutModal from "./components/common/modal/modules/logout/LogoutModal.module";
import DeleteModal from "./components/common/modal/modules/delete/DeleteModal.module";
import StatusModal from "./components/common/modal/modules/status/StatusModal.module";
import AddLecturerModal from "./components/common/modal/modules/add-lecturer/AddLecturerModal.module";
import AddUserModal from "./components/common/modal/modules/add-user/AddUserModal.module";
function App() {
   const [form, setForm] = useState({
     email: "",
     password: "",
   });

  return (
    <div className="App">
      <ModalContainer width="800px">
        <AddUserModal/>
        {/* <AddLecturerModal/> */}
       {/* <LogoutModal /> */}
       {/* <DeleteModal record="student"/> */}
       {/* <StatusModal
       status="SUCCESS"
       text="The new user has been added successfully"

       /> */}
      </ModalContainer>
      {/* <DashboardCard
      label="Students"
      stats={120}
      icon={<IconRepository.DashboardStudentIcon/>}
      /> */}
      {/* <Button text="confirm" buttonType="SECONDARY" /> */}
      {/* <SelectInput
        selectOptions={LANGUAGE_CONSTANTS}
        label="Language"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
        value={form.email}
      /> */}
      {/* <TextInput
        placeholder={"example@gmail.com"}
        label="Email Address"
        type="email"
        id="Email"
        name="Email"
        value={form.email}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      /> */}

      {/* <PasswordInput
        placeholder={"********"}
        label="Password"
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
      /> */}
    </div>
  );
}

export default App;
