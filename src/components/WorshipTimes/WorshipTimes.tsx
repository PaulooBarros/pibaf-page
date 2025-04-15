import "./style.css";
const WorshipSection = () => {
  return (
    <section className="worship-section" id="worship">
      <div className="worship-header">
        <h2 className="worship-title">Horários de Culto</h2>
      </div>

      <div className="worship-schedule">
        <div className="worship-day active">
          <h4>Terça</h4>
          <div className="times-container">
          <p className="worship-time">19:00h</p>
          </div>
        </div>

        <div className="worship-day active">
          <h4>Quinta</h4>
          <div className="times-container">
          <p className="worship-time">19:30h</p>
          </div>
        </div>

        <div className="worship-day active">
          <h4>Domingo</h4>
          <div className="times-container">
            <p className="worship-time">09:00h</p>
            <p className="worship-time">18:00h</p>{" "}
          </div>
        </div>
      </div>

      <div className="worship-footer">
        <p>Venha adorar conosco. Esperamos por você!</p>
      </div>
    </section>
  );
};

export default WorshipSection;
