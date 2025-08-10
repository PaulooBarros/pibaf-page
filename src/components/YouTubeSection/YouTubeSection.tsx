// YouTubeSection.tsx
import React from 'react';
import './style.css';
import YouTubeVideos from '../../services/YoutubeAPI';

const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="youtube-section">
      <div className="youtube-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Nosso Conteúdos
            <span className="title-decoration"></span>
          </h2>
          <p className="section-subtitle">
            Acesse nossas mensagens, devocionais e cultos para edificação espiritual
          </p>
        </div>
        <YouTubeVideos />
      </div>
    </section>
  );
};

export default YouTubeSection;