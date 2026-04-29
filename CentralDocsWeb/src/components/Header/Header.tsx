import "./Header.css";
import logo from "../../assets/img/LogoCentralDocsNova.png";

function Header() {
  return (
    <header className="header">
      <div className="container-header">

        <div className="header-left">
          <button className="menu-btn" aria-label="Abrir menu">
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
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Compartilhado</a></li>
            <li><a href="#">Recentes</a></li>
          </ul>
        </nav>

        <div className="header-acoes">
          <div className="pesquisa-fake">
            <span className="search-icon">⌕</span>
            <span>Digite o que você procura...</span>
          </div>

          <button className="btn-login">Login</button>
        </div>

      </div>
    </header>
  );
}

export default Header;