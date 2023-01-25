import React from 'react';
import styles from './Comments.module.css';
import { IComment } from '../../../models/tracks';
import { CommentItem } from './commentItem/CommentItem';


export const Comments = ({ comments }: any) => {


  return (
    <div className={styles.commentsWrapper}>
      <span>
        Comments
      </span>
      {
        comments.length != 0 ?
          comments.map(({ _id, text, username }: IComment) =>
            <CommentItem key={_id} _id={_id} text={text}
                         username={username} />)
          :
          <h2>There is no comments yet</h2>
      }
    </div>
  );
};

