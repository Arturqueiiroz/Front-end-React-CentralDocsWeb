import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/LogoCentralDocsNova.png";
import MenuLateral from "../MenuLateral/MenuLateral";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const usuarioSalvo = localStorage.getItem("usuario");
  const usuario = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

  function abrirMenu() {
    setMenuAberto(true);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  function sairConta() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
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
              <li>
                <Link to="/documentos">Documentos</Link>
              </li>

              <li>
                <Link to="/Institucional">Sobre nós</Link>
              </li>

              <li>
                <a href="#">Recentes</a>
              </li>
            </ul>
          </nav>

          <div className="header-acoes">
            <div className="pesquisa-fake">
              <span className="search-icon">⌕</span>
              <span>Digite o que você procura...</span>
            </div>

            {!token ? (
              <Link to="/login" className="btn-login">
                Login
              </Link>
            ) : (
              <div className="perfil-header">
                <div className="perfil-avatar">
                  {usuario?.nome?.charAt(0).toUpperCase() ||
                    usuario?.Nome?.charAt(0).toUpperCase() ||
                    "U"}
                </div>

                <div className="perfil-info">
                  <span>Olá,</span>
                  <strong>{usuario?.nome || usuario?.Nome || "Usuário"}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;