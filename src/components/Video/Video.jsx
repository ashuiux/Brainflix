import "./Video.scss";

import LikeIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";

function Video({ video }) {
  const date = new Date(video.timestamp);
  console.log(date.toDateString());

  return (
    <>
      <div className="video">
        <div className="video__container">
        <video
          className="video__media"
          poster={video.image}
          controls
        ></video>
        </div>
        <h2 className="video__title">{video.title}</h2>
        <h3 className="video__channel">by {video.channel}</h3>
        <div className="video__icons">
          <div className="video__likes">
            <img
              className="video__likes-icon" src={LikeIcon} alt="like-icon" /> {video.likes}
          </div>
          <div className="video__views">
            <img className="video__views-icon" src={ViewsIcon}  alt="view-icon"/>
            {video.views}
          </div>
        </div>
        <p className="video__date">{date.toDateString()}</p>
        <p className="video_description">{video.description}</p>
      </div>
    </>
  );
}

export default Video;
