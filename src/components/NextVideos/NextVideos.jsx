import "./NextVideos.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";
import { Link } from "react-router-dom";

function NextVideos({ selectedVideo, allVideos }) {
  const filteredVideos = allVideos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="videos">
      <h2 className="videos__heading">NEXT VIDEOS</h2>
      {filteredVideos.map((video) => (
        <Link key={video.id} to={`/video/${video.id}`} className="videos__link">
          <NextVideoCard video={video} />
        </Link>
      ))}
    </div>
  );
}

export default NextVideos;
