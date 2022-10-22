import "./Header.css";
import CV from "/assets/CV.pdf"

export const HeaderCTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Fale comigo
      </a>
    </div>
  );
};

