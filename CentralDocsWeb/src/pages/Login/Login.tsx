import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
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
    <AuthLayout>
      <div className="login-header">
        <h1>Entrar na conta</h1>
        <p>Acesse sua plataforma</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>

          <div className="input-icon">
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="label-row">
            <label htmlFor="senha">Senha</label>
            <Link to="/esqueceu-senha" className="link">
              Esqueci minha senha
            </Link>
          </div>

          <div className="input-icon">
            <input
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button
              type="button"
              className="btn-eye"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              👁
            </button>
          </div>
        </div>

        <div className="remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Lembrar senha nesse dispositivo</label>
        </div>

        <button type="submit" className="btn-login">
          Entrar
        </button>
      </form>

      <div className="divider"></div>

      <p className="signup">
        Não tem uma conta?{" "}
        <Link to="/cadastro" className="link">
          Criar conta
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
