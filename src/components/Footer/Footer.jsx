import "./Footer.css";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MATHEUSCODE
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Início</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#experience">Expêriencias</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contate-me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/matheussfigueiredo/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/matheusscode" target="_blank">
          <AiOutlineGithub />
        </a>
        <a href=" https://www.instagram.com/matheusscode/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA"
          target="_blank"
        >
          <AiFillYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MATHEUSCODE. Todos os direitos reservados</small>
      </div>
    </footer>
  );
};
