import { Link } from "react-router-dom";
import "./NextVideoCard.scss";

function NextVideoCard({ video }) {
  return (
    <Link to={`/videos/${video.id}`} className="videocard__link">
      <div className="videocard">
        <img className="videocard__media" src={video.image} alt={video.title} />
        <div className="videocard__info">
          <h2 className="videocard__title">{video.title}</h2>
          <p className="videocard__author">by {video.channel}</p>
        </div>
      </div>
    </Link>
  );
}

export default NextVideoCard;
