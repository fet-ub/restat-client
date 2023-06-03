import styles from './ProgressSteps.module.css'
import { progressStepTypeProp } from '../../../types/common/progress-steps/progress-steps.type'
const ProgressSteps = ({ currentStep }: progressStepTypeProp) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.stepContainer}>
        <div key={1} className={styles.wrapper}>
          <div className={currentStep === 0 ? styles.stepStyle : styles.filled}>
            <p className={styles.stepCount}>{1}</p>
          </div>
        </div>
        <hr
          className={
            currentStep === 1 || currentStep === 2 || currentStep === 3 || currentStep === 4
              ? styles.regularLine
              : styles.brokenLine
          }
        />
        <div key={2} className={styles.wrapper}>
          <div
            className={currentStep === 0 || currentStep === 1 ? styles.stepStyle : styles.filled}
          >
            <p className={styles.stepCount}>{2}</p>
          </div>
        </div>
        <hr
          className={
            currentStep === 2 || currentStep === 3 || currentStep === 4
              ? styles.regularLine
              : styles.brokenLine
          }
        />
        <div key={3} className={styles.wrapper}>
          <div className={currentStep === 4 ? styles.filled : styles.stepStyle}>
            <p className={styles.stepCount}>{3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressSteps
