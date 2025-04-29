// YouTubeSection.tsx
import React from 'react';
import './style.css';
import YouTubeVideos from '../../services/YoutubeAPI';

const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="section youtube-section">
      <div className="container">
        <h2 className="section-title">Mensagens</h2>
        {/* Componente que busca e renderiza os vídeos automaticamente */}
        <YouTubeVideos />
      </div>
    </section>
  );
};

export default YouTubeSection;
