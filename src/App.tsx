import React from "react";
import "./App.css";
import InputField from "./components/login/InputField";
import CustomButton from "./components/common/CustomButton";


function App() {
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="col-span-6 flex flex-col justify-center items-center bg-bluishColor">
        <div className="mt-8">
          <img
            src="./female.png"
            className="w-[450px] h-auto"
            alt="illustration"
          />
        </div>
        <div className="mt-2 mb-2">
          <p className=" font-medium text-[24px] text-center">
            The Record Management system for the <br /> University of Buea
          </p>
        </div>
        <div>
          <img
            src="./university.png"
            className=" w-[80px] h-auto"
            alt="ub logo"
          />
        </div>
      </div>

      <div className="col-span-6 flex justify-center items-center bg-white">
        {/* form container */}
        <div className="w-[80%] h-[70%] flex  flex-col justify-center items-center  ">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-brandColor">Restat</span>
          </h1>
          <form className="w-[65%]">
            <div className="mt-12">
              <InputField
                labelTitle="Username"
                placeholderTitle="Enter your username"
                inputType="text"
              />
            </div>
            <div className="mt-8">
              <InputField
                labelTitle="Password"
                placeholderTitle="Enter your password"
                inputType="password"
              />
            </div>
            <div className="text-right mt-3 mb-3">
              <p className="font-medium text-brandColor text-[17px]">
                Forgot Password?
              </p>
            </div>
            <div>
              <CustomButton/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
