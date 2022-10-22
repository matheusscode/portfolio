import "./Portfolio.css";
import data from "./data";

/*         */

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            image,
            title,
            description,
            technologies,
            githubLink,
            demo,
          }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>Descrição: {description}</h4>
                <h4>
                  Tecnologias utilizadas: <strong>{technologies}</strong>
                </h4>
                <div className="portfolio__item-cta">
                  <a href={githubLink} className="btn ">
                    GitHub
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
