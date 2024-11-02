import { useNavigate, Link } from "react-router-dom";
import "./UploadVideoPage.scss";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";

function UploadVideoPage() {
  const navigate = useNavigate();

  function handleSubmit() {
    alert("Published successfully");
    navigate("/");
  }

  function handleCancel() {
    alert("Publishing canceled");
    navigate("/upload");
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleCancel} className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <div className="upload__content">
          <div className="upload__thumbnail">
            Video Thumbnail{" "}
            <img src={uploadImage} alt="upload__img" className="upload__img" />
          </div>
          <div className="upload__input">
            <label htmlFor="videoTitle" className="upload__label">
              Title your video
              <textarea
                className="upload__textarea"
                placeholder="Add title to your video"
                rows="1"
              ></textarea>
            </label>
            <label htmlFor="videoDescription" className="upload__label">
              Add a video description
              <textarea
                className="upload__textarea"
                placeholder="Add a descriptionn to your video"
                rows="5"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className="buttons__publish">
            {" "}
            Publish{" "}
          </button>
          <button type="reset" className="buttons__cancel">
            {" "}
            Cancel{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default UploadVideoPage;
