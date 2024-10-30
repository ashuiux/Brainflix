import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import CommentList from "./components/CommentList/CommentList";
import NextVideos from "./components/NextVideos/NextVideos";
import Video from "./components/Video/Video";
import VideoDescription from "./components//VideoDescription/VideoDescription";
import videoDetails from "./data/video-details.json";
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage"

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  console.log(selectedVideo);

  return (
    <BrowserRouter>
    <>
    
      <Header />
      <Routes>
    
      <Route path="/" element={
              <>
                <Video video={selectedVideo} />
                <div className="video__info">
                  <div className="video__data">
                    <VideoDescription video={selectedVideo} />
                    <CommentList comments={selectedVideo.comments} />
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
            }
          />

      <Route path="/upload" element={<UploadVideoPage />} />
      </Routes>
    </>
  </BrowserRouter>
  
    
  );
}

export default App;