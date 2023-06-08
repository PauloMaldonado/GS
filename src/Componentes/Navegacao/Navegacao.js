import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Ferramentas/imagens/logo6.png";
import "./Navegacao.css";

const Navegacao = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className={color ? "header header-bg" : 'header'}>
      <div className="cconteudo">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width={290} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/sobre">
                Sobre nós
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/alimentos">
                Alimentos
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/tecnologias">
                Tecnologias
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contato">
                Contato
              </NavLink>
            </li>

            <li onClick={handleClick}>
              <Link to="/doacao" className="button">
                Doe Agora
              </Link>
            </li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navegacao;
