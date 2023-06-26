import React from "react";

import styles from "./tabs.module.css";

type TabsPropType = {
  labels: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<TabsPropType> = ({
  labels,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className={styles.tabs}>
      {labels.length > 0 &&
        labels.map((item, index) => {
          return (
            <button
              className={`${styles.button} ${
                activeIndex === index ? styles.active : ""
              } text-secondary dark:text-white`}
              onClick={() => {
                setActiveIndex(index);
              }}
              key={index}
            >
              {item}
            </button>
          );
        })}
    </div>
  );
};

export default Tabs;
