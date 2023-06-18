import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import TextInput from '../../../common/inputs/text-input/TextInput.common';
import PasswordInput from '../../../common/inputs/password-input/PasswordInput.common';
import Button from '../../../common/buttons/Button.common';


const LoginTemplate = () => {
     const navigate = useNavigate();
     const [form, setForm] = useState({
       email: "",
       password: "",
     });

     const handleSubmit = () => {
       navigate("/dashboard");
     };

     const handleNavigation=()=>{
      navigate("/auth/forgot-password");
     }

     const [theme, setTheme] = useState<any>("light");

     useEffect(() => {
       if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         setTheme("dark");
       } else {
         setTheme("light");
       }
     }, []);

     useEffect(() => {
       if (theme === "dark") {
         document.documentElement.classList.add("dark");
       } else {
         document.documentElement.classList.remove("dark");
       }
     }, [theme]);

    //  const handleThemeSwitch = () => {
    //    setTheme(theme === "dark" ? "light" : "dark");
    //  };
  return (
<div className="w-full ">
            {/* form */}
            <h3 className="text-4xl font-bold mb-8 dark:text-white">
              Welcome to <span className="text-primary">Restat</span>
            </h3>

            <div className="mb-8">
              <TextInput
                label="Email"
                type="email"
                name="Email"
                id="Email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
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