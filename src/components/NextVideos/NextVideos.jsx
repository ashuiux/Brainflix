import "./NextVideos.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function NextVideos({ allVideos, setSelectedVideo }) {
  const { videoId } = useParams();

  useEffect(() => {
    const newSelectedVideo = allVideos.find((video) => video.id === videoId);
    if (newSelectedVideo) setSelectedVideo(newSelectedVideo);
  }, [videoId, allVideos, setSelectedVideo]);

  return (
    <div className="videos">
      <h2 className="videos__heading">NEXT VIDEOS</h2>
      {allVideos .filter((video) => video.id !== videoId)
        .map((video) => (
          <Link key={video.id} to={`/videos/${video.id}`} className="videos__link">
            <NextVideoCard video={video} />
          </Link>
        ))}
    </div>
  );
}

export default NextVideos;
