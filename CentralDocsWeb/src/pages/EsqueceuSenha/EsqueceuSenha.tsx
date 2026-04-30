import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./EsqueceuSenha.css";

function EsqueceuSenha() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
    });
  };

  return (
    <AuthLayout>
      <div className="forgot-header">
        <h1>Recuperar acesso</h1>
        <p>
          Insira o seu e-mail á  sua conta para receber as instruções de recuperação de senha.
        </p>
      </div>

      <form className="forgot-form" onSubmit={handleSubmit}>
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

        <button type="submit" className="btn-forgot">
          Enviar instruções
        </button>
      </form>

      <div className="divider"></div>

      <p className="back-login">
        <Link to="/login" className="link">
          ← Voltar ao login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default EsqueceuSenha;