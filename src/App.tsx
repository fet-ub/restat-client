import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/common/inputs/text-input/TextInput.common";
import PasswordInput from "./components/common/inputs/password-input/PasswordInput.common";
import Button from "./components/common/buttons/Button.common";
import SelectInput from "./components/common/inputs/select-input/SelectInput.common";
import { LANGUAGE_CONSTANTS } from "./repository/constants/constants";
function App() {
   const [form, setForm] = useState({
     email: "",
     password: "",
   });

  return (
    <div className="App">
      {/* <Button text="confirm" buttonType="TERTIARY" /> */}
      <SelectInput
        selectOptions={LANGUAGE_CONSTANTS}
        label="Language"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
        value={form.email}
      />
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
