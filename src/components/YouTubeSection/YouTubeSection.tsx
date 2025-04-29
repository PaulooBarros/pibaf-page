// YouTubeSection.tsx
import React from 'react';
import './style.css';
import YouTubeVideos from '../../services/YoutubeAPI';

const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="section youtube-section">
      <div className="container">
        <h2 className="section-title">Mensagens</h2>
        <YouTubeVideos />
      </div>
    </section>
  );
};

export default YouTubeSection;
