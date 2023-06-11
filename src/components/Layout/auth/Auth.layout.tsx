import React from 'react'


import { IconRepository } from '../../../repository/icons/icon.repository';
import { ImageAssets } from '../../../assets';
import { AuthLayoutPropTypes } from '../../../types/layout/auth-layout.type';

const AuthLayout = ({children}:AuthLayoutPropTypes) => {
     
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#f4f4f4]   ">
      {/* form box */}
      <div
        className="w-[70%] h-[85%] bg-white rounded-lg flex "
        style={{ boxShadow: "0px 20px 25px rgba(76, 103, 100, 0.1)" }}
      >
        <div className="w-1/2 min-h-full bg-primary flex flex-col justify-center items-center rounded-l-lg">
          <div className="flex flex-col justify-center items-center">
            <img
              src={ImageAssets.Auth.FemaleImage}
              className="w-[320px] h-auto"
              alt="female"
            />
            <h1 className="font-medium text-[18px] text-center text-white mt-4 mb-4">
              The Record Management system for the <br /> University of Buea
            </h1>

            <div className="mt">
              <IconRepository.LogoIcon height={70} width={70} />
            </div>
          </div>
        </div>

        <div className="bg-white w-1/2 h-full rounded-lg flex justify-center items-center px-12">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout