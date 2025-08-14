import React from "react";
import "../styles/Header.scss";
import logo from "../assets/Header/logo.svg";
import langArm from "../assets/Header/Arm.svg";
import langRus from "../assets/Header/Rus.svg";
import langEng from "../assets/Header/Us.svg";

const Header = () => {
  const scrollDown = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header__title">
        <img src={logo} alt="Logo" className="header__logo" />
        <div className="header__text">
          <span className="header__title">LONDON</span>
          <span className="header__subtitle">BUS</span>
        </div>
      </div>
      <nav className="header__nav">
        <ul>
            <li onClick={() => scrollDown('home')}>Գլխավոր</li>
            <li onClick={() => scrollDown('about')}>Մեր մասին</li>
            <li onClick={() => scrollDown('groups')}>Խմբեր</li>
            <li onClick={() => scrollDown('parents')}>Ծնողները մեր մասին</li>
            <li onClick={() => scrollDown('ourday')}>Մեր առօրյան</li>
            <li onClick={() => scrollDown('contacts')}>Կոնտակտներ</li>
        </ul>
      </nav>
      <div className="header__lang">
        <img src={langArm} alt="Armenian" />
        <img src={langRus} alt="Russian" />
        <img src={langEng} alt="English" />
      </div>
    </header>
  );
};

export default Header;
