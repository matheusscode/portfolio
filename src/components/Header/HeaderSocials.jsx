import "./Header.css";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/matheussfigueiredo/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/matheusscode" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.instagram.com/matheusscode/" target="_blank">
        <AiFillInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA"
        target="_blank"
      >
        <AiFillYoutube />
      </a>
    </div>
  );
};
