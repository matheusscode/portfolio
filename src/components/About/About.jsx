import "./About.css";
import ME from "../../../public/assets/about__image/me-image.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Me conheça</h5>
      <h2>Quem sou eu?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre Mim" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>0 Acctualy</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>5 Completeded</small>
            </article>
          </div>
          <p>
            Meu nome é Matheus Figueiredo e eu sou um amante da tecnologia que
            decidiu trilhar o caminho da programação. Estudo frameworks e
            linguagens para o Desenvolvimento Web. Atualmente estou focando nas
            tecnologias voltadas ao Front-End. Desenvolvo sites
            modernos para pessoas físicas e jurídicas que desejam um site com
            design moderno, responsivo que atraia resultados satisfatórios em
            seu empreendimento. <br />
            Para a criação das aplicações web conto com as
            mais modernas ferramentas e tecnologias do mercado para fazer a
            gestão, design, desenvolvimento do projeto e por fim obter os
            resultados esperados.
          </p>
          <a href="#contact" className="btn btn-primary">
            Fale Comigo
          </a>
        </div>
      </div>
    </section>
  );
};
