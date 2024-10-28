import './Comments.scss'

import CommentList from '../CommentList/CommentList'
// import { useState } from 'react'


function Comments({comments}) {
    console.log(comments);
  
    return (
      <>
       
    <CommentList comments={comments} />
      </>
    );
  }
  
  export default Comments;