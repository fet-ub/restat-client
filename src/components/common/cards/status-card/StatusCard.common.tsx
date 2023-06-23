import React from 'react'

import styles from "./statuscard.module.css";

import { StatusCardPropType } from '../../../../types/common/status-card/status-card.type';

// import { StatusCardType } from '../../../../types/atoms/enums.atoms';

const StatusCard = ({encrypted}:StatusCardPropType) => {
  return (
    <div
      className={`${styles.container}
     ${
       encrypted
         ? styles.encrypted
         : styles.empty
     }`}
    >
      <p>{encrypted?'Encrypted':'Empty'}</p>
    </div>
  );
}

export default StatusCard