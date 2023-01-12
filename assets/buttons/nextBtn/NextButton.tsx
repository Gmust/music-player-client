import React from 'react';
import styles from './NextButton.module.css';


type TNextButtonProps = {
  title: string
  isValid: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const NextButton: React.FC<TNextButtonProps> = ({
                                                         title,
                                                         isValid, type
                                                       }) => {

  return (
    <div className={styles.nextBtnStyle}>
      <button className={isValid ? styles.validBtn : styles.invalidBtn} disabled={!isValid}
              type='submit'>
        {title}
      </button>
    </div>
  );
};

