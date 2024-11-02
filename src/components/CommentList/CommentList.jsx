import React from "react";
import "./CommentList.scss";

function CommentList({ comments = [] }) {

  return (
    <div className="comments">
      <h3 className="comments__heading">
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
      </h3>
      <div className="comments__list">
        {comments.length ? (
          comments.map((comment) => {
            const date = new Date(comment.timestamp);
            return (
              <div key={comment.id} className="comment">
                <div className="comment__avatar"></div>
                <div className="comment__content">
                  <div className="comment__metadata">
                    <h2 className="comment__name">{comment.name}</h2>
                    <p className="comment__date">{date.toLocaleDateString()}</p>
                  </div>
                  <p className="comment__text">{comment.comment}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="comments__empty">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}

export default CommentList;
