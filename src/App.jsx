import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import Video from "./components/Video/Video";
import VideoDescription from "./components//VideoDescription/VideoDescription";
import videoDetails from ".//Data/video-details.json";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  console.log(selectedVideo);

  return (
    <>
    
      <Header />
     
      <Video video={selectedVideo} />
      <div className="video__info">
        <div className="video__data">
      <VideoDescription video={selectedVideo} />
      <Comments comments={selectedVideo.comments} />
      </div>
      <div className="video__next">
      <NextVideos

        selectedVideo={selectedVideo}
        allVideos={videoDetails}
        setSelectedVideo={setSelectedVideo}
      />
      </div>
      </div>
    </>
  );
}

export default App;