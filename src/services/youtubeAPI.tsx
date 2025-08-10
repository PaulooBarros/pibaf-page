// youtubeApi/YouTubeVideos.tsx
import React, { useEffect, useState } from 'react';
import { Video } from '../types/types';

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
const MAX_RESULTS = 4; 

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando nossos vídeos mais recentes...</p>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhum vídeo disponível no momento. Volte em breve!</p>
      </div>
    );
  }

  const principal = videos[0];
  const secundarios = videos.slice(1);

  return (
    <div className="videos-content">
      {/* Vídeo em destaque */}
      <div className="video-highlight">
        <div className="highlight-header">
          <h3>Última Mensagem</h3>
          <span className="video-badge">Novo</span>
        </div>
        <div className="video-card featured">
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${principal.id.videoId}`}
              title={principal.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-info">
            <h4>{principal.snippet.title}</h4>
            <p className="video-date">
              Publicado em: {new Date(principal.snippet.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Vídeos secundários */}
      <div className="video-collection">
        <h3 className="collection-title">Mais Conteúdo para Você</h3>
        <div className="video-grid">
          {secundarios.map((video) => (
            <div key={video.id.videoId} className="video-card">
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>{video.snippet.title}</h4>
                <p className="video-description">
                  {video.snippet.description!.substring(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideos;