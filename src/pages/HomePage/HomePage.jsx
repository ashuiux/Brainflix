import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../components/Video/Video';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import NextVideos from '../../components/NextVideos/NextVideos';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import './HomePage.scss';

const base_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080/videos';

function HomePage() {
  const { videoId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);

  const getAllVideos = async () => {
    try {
      const response = await axios.get(base_URL);
      setAllVideos(response.data);

      if (!videoId && response.data.length > 0) {
        window.location.href = `/videos/${response.data[0].id}`;
      }
    } catch (error) {
      console.error('Error fetching video list:', error);
    }
  };

  const getVideoById = async (id) => {
    try {
      const response = await axios.get(`${base_URL}/${id}`);
      setSelectedVideo(response.data);
    } catch (error) {
      console.error('Error fetching video by id:', error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideoById(videoId);
    }
  }, [videoId]);

  if (!selectedVideo) return <div> Your video is loading </div>;

  return (
    <div>
      <Video video={selectedVideo} />
      <div className="video-info">
        <div className="video-info__data">
          <VideoDescription video={selectedVideo} />
          <CommentForm />
          <CommentList comments={selectedVideo.comments || []} />
        </div>
        <div className="video-info__next">
          <NextVideos allVideos={allVideos} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
