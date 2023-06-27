import React from "react";
import { IconPropsType } from "../types";

const CertificateIcon = ({ width = 33, height = 50 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.458496 3.75V41.25C0.458496 42.2446 0.82066 43.1984 1.46532 43.9016C2.10997 44.6049 2.98431 45 3.896 45H18.7918V40.5812C17.9181 40.0309 17.2352 39.1814 16.849 38.1645C16.4629 37.1477 16.3952 36.0202 16.6563 34.957C16.9175 33.8939 17.4929 32.9544 18.2933 32.2844C19.0938 31.6143 20.0745 31.2511 21.0835 31.2511C22.0924 31.2511 23.0732 31.6143 23.8736 32.2844C24.6741 32.9544 25.2495 33.8939 25.5107 34.957C25.7718 36.0202 25.7041 37.1477 25.3179 38.1645C24.9318 39.1814 24.2489 40.0309 23.3752 40.5812V45H29.1043C30.016 45 30.8903 44.6049 31.535 43.9016C32.1797 43.1984 32.5418 42.2446 32.5418 41.25V3.75C32.5418 2.75544 32.1797 1.80161 31.535 1.09835C30.8903 0.395088 30.016 0 29.1043 0H3.896C2.98431 0 2.10997 0.395088 1.46532 1.09835C0.82066 1.80161 0.458496 2.75544 0.458496 3.75ZM21.0835 38.75C21.6913 38.75 22.2742 38.4866 22.7039 38.0178C23.1337 37.5489 23.3752 36.913 23.3752 36.25C23.3752 35.587 23.1337 34.9511 22.7039 34.4822C22.2742 34.0134 21.6913 33.75 21.0835 33.75C20.4757 33.75 19.8928 34.0134 19.463 34.4822C19.0333 34.9511 18.7918 35.587 18.7918 36.25C18.7918 36.913 19.0333 37.5489 19.463 38.0178C19.8928 38.4866 20.4757 38.75 21.0835 38.75ZM9.62516 8.75C9.62516 8.41848 9.74588 8.10054 9.96077 7.86612C10.1757 7.6317 10.4671 7.5 10.771 7.5H22.2293C22.5332 7.5 22.8247 7.6317 23.0396 7.86612C23.2544 8.10054 23.3752 8.41848 23.3752 8.75C23.3752 9.08152 23.2544 9.39946 23.0396 9.63388C22.8247 9.8683 22.5332 10 22.2293 10H10.771C10.4671 10 10.1757 9.8683 9.96077 9.63388C9.74588 9.39946 9.62516 9.08152 9.62516 8.75ZM6.18766 15C5.88377 15 5.59232 15.1317 5.37744 15.3661C5.16255 15.6005 5.04183 15.9185 5.04183 16.25C5.04183 16.5815 5.16255 16.8995 5.37744 17.1339C5.59232 17.3683 5.88377 17.5 6.18766 17.5H26.8127C27.1166 17.5 27.408 17.3683 27.6229 17.1339C27.8378 16.8995 27.9585 16.5815 27.9585 16.25C27.9585 15.9185 27.8378 15.6005 27.6229 15.3661C27.408 15.1317 27.1166 15 26.8127 15H6.18766ZM5.04183 21.25C5.04183 20.9185 5.16255 20.6005 5.37744 20.3661C5.59232 20.1317 5.88377 20 6.18766 20H26.8127C27.1166 20 27.408 20.1317 27.6229 20.3661C27.8378 20.6005 27.9585 20.9185 27.9585 21.25C27.9585 21.5815 27.8378 21.8995 27.6229 22.1339C27.408 22.3683 27.1166 22.5 26.8127 22.5H6.18766C5.88377 22.5 5.59232 22.3683 5.37744 22.1339C5.16255 21.8995 5.04183 21.5815 5.04183 21.25ZM6.18766 25C5.88377 25 5.59232 25.1317 5.37744 25.3661C5.16255 25.6005 5.04183 25.9185 5.04183 26.25C5.04183 26.5815 5.16255 26.8995 5.37744 27.1339C5.59232 27.3683 5.88377 27.5 6.18766 27.5H26.8127C27.1166 27.5 27.408 27.3683 27.6229 27.1339C27.8378 26.8995 27.9585 26.5815 27.9585 26.25C27.9585 25.9185 27.8378 25.6005 27.6229 25.3661C27.408 25.1317 27.1166 25 26.8127 25H6.18766Z"
        fill="white"
      />
      <path
        d="M18.792 50V45H23.3753V50L21.0837 48.125L18.792 50Z"
        fill="white"
      />
    </svg>
  );
};

export default CertificateIcon;
