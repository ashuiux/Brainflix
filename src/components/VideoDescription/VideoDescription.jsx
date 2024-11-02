import "./VideoDescription.scss";

import LikeIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";

function VideoDescription({ video }) {
  const date = new Date(video.timestamp);

  return (
    <>
      <div className="video">
        <div className="video__content">
          <h2 className="video__title">{video.title}</h2>
          <div className="video__metadata">
            <div className="video__channel-info">
              <h3 className="video__creator">by {video.channel}</h3>
              <p className="video__date">{date.toLocaleDateString()}</p>
            </div>
            <div className="video__icons">
              <div className="video__views">
                <img  className="video__views-icon" src={ViewsIcon} alt="view-icon" /> {" "}   {video.views}
              </div>
              <div className="video__likes">
                <img className="video__likes-icon" src={LikeIcon} alt="like-icon"/>{" "} {video.likes}
              </div>
            </div>
          </div>
          <p className="video__description"> {video.description}</p>
        </div>
      </div>
    </>
  );
}

export default VideoDescription;
