import "./Header.css";

import { HeaderCTA } from "./HeaderCTA";
import { HeaderSocials } from "./HeaderSocials";
import { HeaderAnimation } from "./HeaderAnimation";

import TypeWriter from "typewriter-effect";

export const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container header__container">
          <h5>Olá, eu sou</h5>
          <h1 className="writing__my-name">
            <TypeWriter 
              onInit={(typewriter) => {
                typewriter.start().typeString("Matheus Figueiredo");
              }}
            />
          </h1> 
          <h5 className="text-light">Programador Front-End</h5>

          <HeaderCTA />
          <HeaderSocials />

          <div className="animation">
            <HeaderAnimation />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
};
