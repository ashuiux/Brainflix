import "./CommentForm.scss";

function CommentForm() {
  return (
    <>
      <section className="comment-section">
        <div className="comment-section__form">
          <div className="comment-section__form__contemt">
            <div className="comment-section__form__avatar"></div>

            <div className="comment-section__form__details">
              <h3 className="comment-section__title">Join the Conversation</h3>
              <div className="comment-section__form__input">
                <textarea
                  className="comment-section__form__textarea"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
            </div>
          </div>

          <input
            type="button"
            value="Comment"
            className="comment-section__comment"
          />
        </div>
      </section>
    </>
  );
}

export default CommentForm;
