import React from 'react';
import styles from './CommentsItem.module.css';
import { IComment } from '../../../../models/tracks';

export const CommentItem: React.FC<IComment> = ({ _id, text, username }) => {
  return (
    <div className={styles.commentItem}>
      <div>
        {username}
      </div>
      <hr/>
      <div>
        {text}
      </div>
    </div>
  );
};
