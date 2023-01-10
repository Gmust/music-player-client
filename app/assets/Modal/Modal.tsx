import React, { FC } from 'react';
import styles from './Modal.module.css';
import { setShowModal } from '../../../store/view';


type TModalProps = {
  children: React.ReactNode
  showModal: boolean
}

const Modal: FC<TModalProps> = ({ children, showModal }) => {


  return (
    <div className={showModal ? `${styles.modalWrapper}  ${styles.activeW}` : styles.modalWrapper}
         onClick={() => setShowModal(false)}
    >
      <div className={showModal ? `${styles.modalContent}  ${styles.activeC}` : styles.modalContent}
           onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;