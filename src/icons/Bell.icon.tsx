import React from 'react'
import { IconPropsType } from '../types';

const BellIcon = ({width=35,height=37}:IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.9883 26.927C33.0127 25.2465 31.5625 20.4916 31.5625 14.2812C31.5625 10.5516 30.081 6.97479 27.4437 4.33756C24.8065 1.70033 21.2296 0.21875 17.5 0.21875C13.7704 0.21875 10.1936 1.70033 7.55635 4.33756C4.91912 6.97479 3.43754 10.5516 3.43754 14.2812C3.43754 20.4934 1.98558 25.2465 1.01 26.927C0.760865 27.3542 0.62879 27.8395 0.627092 28.3341C0.625394 28.8287 0.754134 29.3149 1.00033 29.7438C1.24652 30.1728 1.60147 30.5292 2.02936 30.7772C2.45726 31.0251 2.94298 31.1559 3.43754 31.1562H10.6112C10.9356 32.7438 11.7984 34.1706 13.0537 35.1953C14.309 36.22 15.8796 36.7797 17.5 36.7797C19.1204 36.7797 20.6911 36.22 21.9464 35.1953C23.2016 34.1706 24.0645 32.7438 24.3889 31.1562H31.5625C32.0569 31.1556 32.5424 31.0246 32.9701 30.7765C33.3977 30.5284 33.7524 30.1719 33.9984 29.7431C34.2444 29.3142 34.373 28.8281 34.3712 28.3337C34.3694 27.8393 34.2374 27.354 33.9883 26.927ZM17.5 33.9688C16.6278 33.9685 15.7772 33.6979 15.0651 33.1942C14.353 32.6905 13.8146 31.9786 13.5239 31.1562H21.4762C21.1855 31.9786 20.647 32.6905 19.935 33.1942C19.2229 33.6979 18.3722 33.9685 17.5 33.9688ZM3.43754 28.3438C4.79105 26.0164 6.25004 20.6234 6.25004 14.2812C6.25004 11.2976 7.4353 8.43608 9.54509 6.3263C11.6549 4.21651 14.5164 3.03125 17.5 3.03125C20.4837 3.03125 23.3452 4.21651 25.455 6.3263C27.5648 8.43608 28.75 11.2976 28.75 14.2812C28.75 20.6182 30.2055 26.0111 31.5625 28.3438H3.43754Z"
        fill="#CBD5E1"
      />
    </svg>
  );
}

export default BellIcon