import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Login.css";
import { API_URL, USE_MOCK } from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function efetuarLoginMock() {
    localStorage.setItem("token", "mock_token_123456");
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        id: 1,
        nome: email ? email.split("@")[0] : "Usuário Demo",
        email: email || "demo@centraldocs.com",
      })
    );

    setMensagem("Login simulado com sucesso (Modo Mock)!");
    setTimeout(() => {
      navigate("/");
    }, 800);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMensagem("");
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (USE_MOCK) {
      efetuarLoginMock();
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/api/Usuario/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok || dados.erro || dados.Erro) {
        setErro(
          dados.mensagem || dados.Mensagem || "E-mail ou senha inválidos."
        );
        return;
      }

      localStorage.setItem("token", dados.token || dados.Token);
      localStorage.setItem(
        "usuario",
        JSON.stringify(dados.usuario || dados.Usuario)
      );

      setMensagem("Login realizado com sucesso!");

      setEmail("");
      setSenha("");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.warn("Erro de conexão na API, alternando para login mockado:", error);
      efetuarLoginMock();
    } finally {
      setCarregando(false);
    }
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

        {erro && <p className="mensagem-erro">{erro}</p>}
        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}

        <button type="submit" className="btn-login" disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar"}
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