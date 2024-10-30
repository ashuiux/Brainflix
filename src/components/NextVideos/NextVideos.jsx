import "./NextVideos.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideos({ selectedVideo, allVideos, setSelectedVideo }) {
  const filteredVideos = allVideos.filter((video) => {
    return video.id !== selectedVideo.id;
  });
  function updateSelectedVideo(videoId) {
    const foundVideo = allVideos.find((video) => video.id == videoId);

    setSelectedVideo(foundVideo);
  }

  return (
    <>
      <div className="videos">
        <h2 className="videos__heading"> NEXT VIDEOS</h2>
        {filteredVideos.map((video) => (
          <NextVideoCard
            onClick={() => updateSelectedVideo(video.id)}
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </>
  );
}

export default NextVideos;
