import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./UploadVideoPage.scss";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";

function UploadVideoPage() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.elements.videoTitle.value;
    const description = event.target.elements.videoDescription.value;

    const videoData = {
      title,
      channel: "Default Channel", 
      description,
    };

    axios
      .post("http://localhost:8080/videos", videoData)
      .then(() => {
        alert("Published successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error uploading the video");
      });
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
                name="videoTitle"
                className="upload__textarea"
                placeholder="Add title to your video"
                rows="1"
              ></textarea>
            </label>
            <label htmlFor="videoDescription" className="upload__label">
              Add a video description
              <textarea
                name="videoDescription"
                className="upload__textarea"
                placeholder="Add a description to your video"
                rows="5"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className="buttons__publish">
            Publish
          </button>
          <Link to="/upload" className="buttons__cancel">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}

export default UploadVideoPage;
