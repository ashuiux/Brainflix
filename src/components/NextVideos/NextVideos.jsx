import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NextVideoCard from '../NextVideoCard/NextVideoCard';
import './NextVideos.scss';

function NextVideos({ allVideos }) {
  const { videoId } = useParams();

  return (
    <div className="videos">
      <h2 className="videos__heading">NEXT VIDEOS</h2>
      {allVideos
        .filter((video) => video.id !== videoId)
        .map((video) => (
          <Link key={video.id} to={`/videos/${video.id}`} className="videos__link">
            <NextVideoCard video={video} />
          </Link>
        ))}
    </div>
  );
}

export default NextVideos;
