import "./NextVideoCard.scss";

function NextVideoCard({ video, onClick }) {
  return (
    <>
      <div onClick={onClick} className="videocard">
        <img className="videocard__media" src={video.image} />
        <div className="videocard__info">
          <h2 className="videocard__title">{video.title}</h2>
          <p className="videocard__author">by {video.channel}</p>
        </div>
      </div>
    </>
  );
}

export default NextVideoCard;
