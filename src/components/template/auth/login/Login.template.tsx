import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import TextInput from '../../../common/inputs/text-input/TextInput.common';
import PasswordInput from '../../../common/inputs/password-input/PasswordInput.common';
import Button from '../../../common/buttons/Button.common';


const LoginTemplate = () => {
     const navigate = useNavigate();
     const [form, setForm] = useState({
       username: "",
       password: "",
     });

     const handleSubmit = () => {
       navigate("/dashboard");
     };

     const handleNavigation=()=>{
      navigate("/auth/forgot-password");
     }
  return (
<div className="w-full ">
            {/* form */}
            <h3 className="text-4xl font-bold mb-8">
              Welcome to <span className="text-primary">Restat</span>
            </h3>

            <div className="mb-8">
              <TextInput
                label="Username"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
              />
            </div>

            <div className="mb-8">
              <PasswordInput
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="******"
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>

            <div className="text-right mb-3">
              <p className="font-medium text-primary text-[17px] cursor-pointer" onClick={handleNavigation}>
                Forgot Password?
              </p>
            </div>

            <Button text="Login" fullWidth={true} buttonType="PRIMARY" onClick={handleSubmit} />
          </div>
  )
}

export default LoginTemplate