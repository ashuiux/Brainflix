import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments'
import NextVideos from './components/NextVideos/NextVideos';
import Video from './components/Video/Video';
import videoDetails from './/Data/video-details.json';



function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  console.log(selectedVideo);

  

  return (
    <>
     <Header />
     <Video video={selectedVideo}/>
     <Comments comments={selectedVideo.comments} />
     <NextVideos selectedVideo={selectedVideo} allVideos={videoDetails} setSelectedVideo={setSelectedVideo} />
    
    </>
  )
}

export default App


// const filteredVideo = allVideos.filter((plant) => {
//   return video.id !== selectedVideo.id
// })

//map over filtered video to create components