import React from 'react'
import { IconPropsType } from '../types';

const DeleteIcon = ({ width = 32, height = 32 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_51_47)">
        <path
          d="M19.04 2.66666C19.5997 2.6668 20.1451 2.84304 20.5991 3.1704C21.053 3.49776 21.3925 3.95966 21.5693 4.49066L22.2933 6.66666H26.6667C27.0203 6.66666 27.3594 6.80713 27.6095 7.05718C27.8595 7.30723 28 7.64637 28 7.99999C28 8.35361 27.8595 8.69275 27.6095 8.9428C27.3594 9.19285 27.0203 9.33332 26.6667 9.33332L26.6627 9.42799L25.5067 25.6187C25.4345 26.6275 24.9829 27.5715 24.2427 28.2607C23.5025 28.95 22.5287 29.3332 21.5173 29.3333H10.4827C9.47128 29.3332 8.49748 28.95 7.75729 28.2607C7.0171 27.5715 6.56548 26.6275 6.49333 25.6187L5.33733 9.42666C5.33492 9.3956 5.33359 9.36447 5.33333 9.33332C4.97971 9.33332 4.64057 9.19285 4.39052 8.9428C4.14048 8.69275 4 8.35361 4 7.99999C4 7.64637 4.14048 7.30723 4.39052 7.05718C4.64057 6.80713 4.97971 6.66666 5.33333 6.66666H9.70667L10.4307 4.49066C10.6076 3.95944 10.9472 3.49739 11.4015 3.17001C11.8557 2.84263 12.4014 2.66652 12.9613 2.66666H19.04ZM23.996 9.33332H8.004L9.15333 25.428C9.17727 25.7643 9.3277 26.079 9.57435 26.3088C9.82099 26.5386 10.1455 26.6665 10.4827 26.6667H21.5173C21.8545 26.6665 22.179 26.5386 22.4257 26.3088C22.6723 26.079 22.8227 25.7643 22.8467 25.428L23.996 9.33332ZM13.3333 13.3333C13.6599 13.3334 13.9751 13.4533 14.2192 13.6703C14.4632 13.8873 14.6191 14.1863 14.6573 14.5107L14.6667 14.6667V21.3333C14.6663 21.6732 14.5362 22 14.3029 22.2471C14.0696 22.4943 13.7507 22.643 13.4115 22.6629C13.0722 22.6828 12.7382 22.5724 12.4776 22.3543C12.217 22.1362 12.0495 21.8268 12.0093 21.4893L12 21.3333V14.6667C12 14.313 12.1405 13.9739 12.3905 13.7238C12.6406 13.4738 12.9797 13.3333 13.3333 13.3333ZM18.6667 13.3333C19.0203 13.3333 19.3594 13.4738 19.6095 13.7238C19.8595 13.9739 20 14.313 20 14.6667V21.3333C20 21.6869 19.8595 22.0261 19.6095 22.2761C19.3594 22.5262 19.0203 22.6667 18.6667 22.6667C18.313 22.6667 17.9739 22.5262 17.7239 22.2761C17.4738 22.0261 17.3333 21.6869 17.3333 21.3333V14.6667C17.3333 14.313 17.4738 13.9739 17.7239 13.7238C17.9739 13.4738 18.313 13.3333 18.6667 13.3333ZM19.04 5.33332H12.96L12.516 6.66666H19.484L19.04 5.33332Z"
          fill="#E1444F"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_47">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeleteIcon