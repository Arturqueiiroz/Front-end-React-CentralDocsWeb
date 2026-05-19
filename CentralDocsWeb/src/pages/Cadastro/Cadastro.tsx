import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Cadastro.css";
import { API_URL } from "../../services/api";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMensagem("");
    setErro("");

    if (!nome || !cpf || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (cpf.length !== 11) {
      setErro("O CPF deve conter exatamente 11 números.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    

    try {
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/api/Usuario/CriarUsuario`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            cpf,
            email,
            senha,
            confirmarSenha,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok || dados.erro || dados.Erro) {
        setErro(dados.mensagem || dados.Mensagem || "Erro ao criar usuário.");
        return;
      }

      setMensagem("Conta criada com sucesso!");

      setNome("");
      setCpf("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setErro("Não foi possível conectar com a API.");
      console.error(error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <AuthLayout>
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
              maxLength={11}
              onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
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

        {erro && <p className="mensagem-erro">{erro}</p>}
        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}

        <button type="submit" className="btn-cadastrar" disabled={carregando}>
          {carregando ? "Criando conta..." : "Criar conta"}
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
    </AuthLayout>
  );
}

export default Cadastro;