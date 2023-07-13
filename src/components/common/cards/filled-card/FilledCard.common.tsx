import React from "react";
import styles from "../status-card/statuscard.module.css";
import { FilledCardPropType } from "../../../../types/common/filled-card/filled-card.type";

const FilledCard = ({ filled }: FilledCardPropType) => {
  return (
    <div
      className={`${styles.container}
     ${filled === "filled" ? styles.encrypted : styles.empty}`}
    >
      <p>{filled}</p>
    </div>
  );
};

export default FilledCard;
