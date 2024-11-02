import "./Video.scss";

function Video({ video }) {
  const date = new Date(video.timestamp);

  return (
    <>
      <div className="video">
        <div className="video__container">
          <video className="video__media" poster={video.image} controls></video>
        </div>
      </div>
    </>
  );
}

export default Video;
