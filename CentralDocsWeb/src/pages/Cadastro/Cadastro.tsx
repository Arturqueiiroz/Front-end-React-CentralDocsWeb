import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/LogoCentralDocsNova.png";
// import cadastroVisual from "../../assets/img/cadastro-visual.png.png";
import cadastroVisual from "../../assets/img/cadastro-visual-centraldocs.png";
import "./Cadastro.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      nome,
      cpf,
      email,
      senha,
      confirmarSenha,
    });
  };

  return (
    <main className="cadastro-page">
      <section className="cadastro-card">
        <div className="cadastro-form-area">
          <img src={logo} alt="CentralDocs" className="cadastro-logo" />

          <div className="cadastro-header">
            <h1>Criar sua conta</h1>
            <p>Preencha os dados abaixo para acessar a plataforma.</p>
          </div>

          <form className="cadastro-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <div className="input-wrapper">
                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <div className="input-wrapper">
                <input
                  id="cpf"
                  type="text"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="password-row">
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <div className="input-wrapper">
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
                    👁️
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmarSenha">Confirmar senha</label>
                <div className="input-wrapper">
                  <input
                    id="confirmarSenha"
                    type={mostrarConfirmarSenha ? "text" : "password"}
                    placeholder="Confirme a senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn-eye"
                    onClick={() =>
                      setMostrarConfirmarSenha(!mostrarConfirmarSenha)
                    }
                  >
                    👁️
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="btn-cadastrar">
              Criar conta
            </button>
          </form>

          <div className="cadastro-divider">
            <span></span>
            <p>ou</p>
            <span></span>
          </div>

          <p className="login-link">
            Já tem uma conta? <Link to="/login">fazer login</Link>
          </p>
        </div>

        <div className="cadastro-image-area">
          <img
            src={cadastroVisual}
            alt="Ilustração CentralDocs"
            className="cadastro-visual"
          />
        </div>
      </section>
    </main>
  );
}

export default Cadastro;
