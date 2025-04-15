// youtubeApi/YouTubeVideos.tsx
import React, { useEffect, useState } from 'react';
import { Video } from '../types/types';

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
const MAX_RESULTS = 4;

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        console.log(response)
        setVideos(data.items);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    };

    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return <p>Carregando vídeos...</p>;
  }

  const principal = videos[0];
  const secundarios = videos.slice(1);

  return (
    <>
      {/* Vídeo em destaque */}
      <div className="highlighted-video">
        <div className="video-card">
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${principal.id.videoId}`}
              title={principal.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Miniaturas */}
      <div className="mini-videos-grid">
        {secundarios.map((video) => (
          <div key={video.id.videoId} className="video-card small">
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h4>{video.snippet.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default YouTubeVideos;
