import './Comments.scss'

import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList'
// import { useState } from 'react'


function Comments({comments}) {
    console.log(comments);
  
    return (
      <>
        <h2>Comments</h2>
    <CommentList comments={comments} />
      </>
    );
  }
  
  export default Comments;