import "./CommentForm.scss";

function CommentForm() {
  return (
    <>
<section class="comment-section">
  
  <div class="comment-section__form">
  <div class="comment-section__form__avatar"></div>

 
    <div className="comment-section__form__details">
    <h3 class="comment-section__title">Join the Conversation</h3>

    <div class="comment-section__form__input">
      <textarea
        class="comment-section__form__textarea"
        placeholder="Add a new comment"
      ></textarea>
    </div>
    </div>

    <input type="button" value="Comment" className="comment-section__comment" />
    </div>

</section>

    </>
  );
}

export default CommentForm;
