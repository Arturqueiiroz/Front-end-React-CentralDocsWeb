import "./MenuLateral.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/LogoCentralDocsNova.png";

type MenuLateralProps = {
  aberto: boolean;
  fecharMenu: () => void;
};

function MenuLateral({ aberto, fecharMenu }: MenuLateralProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const usuarioSalvo = localStorage.getItem("usuario");
  const usuario = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

  const nomeUsuario = usuario?.nome || usuario?.Nome || "Usuário";
  const inicialUsuario = nomeUsuario.charAt(0).toUpperCase();

  function itemAtivo(caminho: string) {
    return location.pathname === caminho;
  }

  function sairConta() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    fecharMenu();
    navigate("/login");
  }

  return (
    <>
      <div
        className={`menu-overlay ${aberto ? "menu-overlay-aberto" : ""}`}
        onClick={fecharMenu}
      ></div>

      <aside className={`menu-lateral ${aberto ? "menu-lateral-aberto" : ""}`}>
        <div>
          <div className="menu-topo">
            <div className="menu-logo-area">
              <img src={logo} alt="CentralDocs" className="menu-logo" />
            </div>

            <button
              className="menu-fechar"
              onClick={fecharMenu}
              aria-label="Fechar menu"
            >
              ×
            </button>
          </div>

          <nav className="menu-nav">
            <Link
              to="/"
              className={`menu-item ${itemAtivo("/") ? "ativo" : ""}`}
              onClick={fecharMenu}
            >
              <span className="menu-icon">⌂</span>
              Home
            </Link>

            <Link
              to="/documentos"
              className={`menu-item ${itemAtivo("/documentos") ? "ativo" : ""}`}
              onClick={fecharMenu}
            >
              <span className="menu-icon">▣</span>
              Meus documentos
            </Link>

            <Link
              to="/perfil"
              className={`menu-item ${itemAtivo("/perfil") ? "ativo" : ""}`}
              onClick={fecharMenu}
            >
              <span className="menu-icon">♟</span>
              Perfil
            </Link>

            <Link
              to="/configuracoes"
              className={`menu-item ${
                itemAtivo("/configuracoes") ? "ativo" : ""
              }`}
              onClick={fecharMenu}
            >
              <span className="menu-icon">⚙</span>
              Configurações
            </Link>

            <Link
              to="/acessibilidade"
              className={`menu-item ${
                itemAtivo("/acessibilidade") ? "ativo" : ""
              }`}
              onClick={fecharMenu}
            >
              <span className="menu-icon">✦</span>
              Acessibilidade
            </Link>

            <Link
              to="/compartilhado"
              className={`menu-item ${
                itemAtivo("/compartilhado") ? "ativo" : ""
              }`}
              onClick={fecharMenu}
            >
              <span className="menu-icon">⇄</span>
              Compartilhado
            </Link>    
            <Link
                to="/perguntas-frequentes"
                className={`menu-item ${
                  itemAtivo("/perguntas-frequentes") ? "ativo" : ""
                }`}
                onClick={fecharMenu}
              >
                <span className="menu-icon">?</span>
                Perguntas frequentes
            </Link>          
          </nav>
        </div>

        <div className="menu-rodape">
          <div className="menu-usuario">
            <div className="usuario-info">
              <div className="usuario-avatar">{inicialUsuario}</div>

              <div>
                <strong>{nomeUsuario}</strong>
                <span>Conta CentralDocs</span>
              </div>
            </div>
          </div>

          <button type="button" className="logout-btn" onClick={sairConta}>
            <span>↪</span>
            Sair da conta
          </button>
        </div>
      </aside>
    </>
  );
}

export default MenuLateral;