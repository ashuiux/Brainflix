import React from "react";
import "./CommentList.scss";

function CommentList({ comments }) {
  
  return (
    <div>
      {comments.map((comment) => {
        const date = new Date(comment.timestamp);
        return (
          <div key={comment.id} className="comment">
            <h2>{comment.name}</h2>
            <p>{date.toDateString()}</p>
            <p>{comment.comment}</p>
          
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
