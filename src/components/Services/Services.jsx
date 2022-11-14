import "./Services.css";
import { BiCheck } from "react-icons/bi";

export const Services = () => {
  return (
    <section id="services">
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Esboço o produto para alinhar as necessidades do usuário.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Transformo sua ideia para conceito em MVP.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Converto o design em uma aplicação web</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento.</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Moderno.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Melhores Tecnologias.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Facilmente Personalizável.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsivo para Celular.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Robusto Fluxo de Trabalho.</p>
            </li>
          </ul>
        </article>

        {/* END OF DEVELOPER WEB */}

        <article className="service">
          <div className="service__head">
            <h3>Criação do Conteúdo</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Planejamento.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Atento aos detalhes para impedir erros.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conteúdo bem Organizado.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Múltiplos Blocos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Escaneabilidade.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
