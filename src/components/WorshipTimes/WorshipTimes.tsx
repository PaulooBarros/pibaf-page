import { useEffect, useRef } from "react";
import "./style.css";

const WorshipSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="worship-section" id="worship" ref={sectionRef}>
      <div className="worship-container">
        <div className="worship-header">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Horário dos Cultos
            <span className="title-decoration"></span>
          </h2>
          <p className="welcome-message">Será um grande prazer te receber em nossa igreja</p>
        </div>

        <div className="worship-schedule">
          <div className="worship-day">
            <div className="day-header">
              <h4>Quinta-feira</h4>
              <div className="time-badge">19:30h</div>
            </div>
            <div className="day-footer">
              <span className="divider"></span>
              <p className="day-description">Momento de oração e estudo bíblico</p>
            </div>
          </div>

          <div className="worship-day featured">
            <div className="day-header">
              <h4>Domingo</h4>
              <div className="time-badge morning">09:00h</div>
              <div className="time-badge evening">18:00h</div>
            </div>
            <div className="day-footer">
              <span className="divider"></span>
              <p className="day-description">Culto de celebração e comunhão</p>
            </div>
          </div>
        </div>

        <div className="worship-footer">
          <div className="address-card">
            <div className="address-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="address-details">
              <h5>Nossa Localização</h5>
              <a 
                href="https://maps.app.goo.gl/4ETFhuA7BbHMnNiS8" 
                target="_blank" 
                rel="noreferrer"
                className="address-link"
              >
                R. José Alves Pereira, 79, Farolândia - Aracaju/SE
              </a>
              <p className="address-zip">CEP: 49030-460</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;