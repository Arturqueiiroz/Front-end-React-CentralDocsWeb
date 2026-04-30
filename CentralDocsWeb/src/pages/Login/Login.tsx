import React, { useState } from "react";
import logo from "../../assets/img/LogoCentralDocsNova.png";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className="login">
      <div className="login-box">
        <img src={logo} alt="CentralDocs" className="logo"/>
        <p className="subtitle">Acesse sua plataforma institucional</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>E-mail</label>
            <div className="input-icon">
              <span>✉</span>
              <input
                type="email"
                placeholder="nome@instituicao.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Senha</label>
              <span className="link">Esqueci minha senha</span>
            </div>

            <div className="input-icon">
              <span>🔒</span>
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <span
                className="eye"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                👁
              </span>
            </div>
          </div>

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar senha nesse dispositivo</label>
          </div>

          <button className="btn-login">
            Entrar
          </button>
        </form>

        <div className="divider"></div>

<p className="signup">
  Não tem uma conta? <Link to="/cadastro" className="link">Criar conta</Link>
</p>
      </div>

      <div className="bottom">

      </div>
    </div>
  );
}

export default Login;