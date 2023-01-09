import React from 'react';
import styles from './CommentsForm.module.css';


export const CommentsForm = () => {
  return (
    <div className={styles.commentsForm}>

      <textarea placeholder='Type comment here...' />
      <br />
      <span>
        <input placeholder='User Email' />

        <button>
          Send
        </button>
      </span>

    </div>
  );
};

