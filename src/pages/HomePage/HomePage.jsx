import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import NextVideos from "../../components/NextVideos/NextVideos";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";

const API_KEY = "6a208584-4f67-46cb-bf09-d42701a738b4";
const BASE_URL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos`;

function HomePage() {
  const { videoId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState({});
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
        setAllVideos(response.data);
        const selectedVideoId = videoId || response.data[0]?.id;
        if (selectedVideoId) {
          getVideoById(selectedVideoId);
        }
      } catch (error) {
        console.error("Error fetching videos list:", error);
      }
    };

    getAllVideos();
  }, [videoId]);

  const getVideoById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}`);
      setSelectedVideo(response.data);
    } catch (error) {
      console.error("Error fetching video by id", error);
    }
  };

  return (
    <>
      <Video video={selectedVideo} />
      <div className="video-info">
        <div className="video-info__data">
          <VideoDescription video={selectedVideo} />
          <CommentForm />
          <CommentList comments={selectedVideo.comments} />
        </div>
        <div className="video-info__next">
          {" "}
          <NextVideos
            selectedVideo={selectedVideo}
            allVideos={allVideos}
            setSelectedVideo={setSelectedVideo}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
