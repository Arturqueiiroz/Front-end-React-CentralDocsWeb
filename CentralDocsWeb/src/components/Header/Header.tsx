import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/LogoCentralDocsNova.png";
import MenuLateral from "../MenuLateral/MenuLateral";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function abrirMenu() {
    setMenuAberto(true);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <>
      <MenuLateral aberto={menuAberto} fecharMenu={fecharMenu} />

      <header className="header">
        <div className="container-header">
          <div className="header-left">
            <button
              className="menu-btn"
              aria-label="Abrir menu"
              onClick={abrirMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="header-brand">
              <img src={logo} alt="CentralDocs Logo" className="logo-img" />
            </div>
          </div>

          <nav className="header-nav">
            <ul className="nav-lista">
              <Link to="/documentos">Documentos</Link>
              <Link to="/Institucional">Sobre nós</Link>
              <Link to="/Acessibilidade">Acessibilidade</Link>
              <li><a href="#">Compartilhado</a></li>
              <li><a href="#">Recentes</a></li>
            </ul>
          </nav>

          <div className="header-acoes">
            <div className="pesquisa-fake">
              <span className="search-icon">⌕</span>
              <span>Digite o que você procura...</span>
            </div>

            <Link to="/login" className="btn-login">
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;