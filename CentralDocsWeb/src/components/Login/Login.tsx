import React, { useState } from "react";
import logo from "../../assets/img/LogoCentralDocsNova.png";
import "./Login.css";

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
        <img src={logo} alt="CentralDocs" className="LogoCentralDocsNova.png" />
        <p className="subtitle">Acesse sua plataforma institucional</p>

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
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

          {/* SENHA */}
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

          {/* CHECKBOX */}
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar senha nesse dispositivo</label>
          </div>

          {/* BOTÃO */}
          <button className="btn-login">
            Entrar
          </button>
        </form>

        <div className="divider"></div>

        <p className="signup">
          Não tem uma conta? <span className="link">Criar conta</span>
        </p>
      </div>

      {/* RODAPÉ */}
      <div className="bottom">

      </div>
    </div>
  );
}

export default Login;