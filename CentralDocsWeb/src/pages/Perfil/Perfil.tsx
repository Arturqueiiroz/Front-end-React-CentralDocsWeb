import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import "./Perfil.css";

type Usuario = {
  id?: number;
  Id?: number;
  nome?: string;
  Nome?: string;
  cpf?: string;
  CPF?: string;
  email?: string;
  Email?: string;
  dataCriacao?: string;
  DataCriacao?: string;
  ativo?: boolean;
  Ativo?: boolean;
};

function Perfil() {
  const [menuAberto, setMenuAberto] = useState(false);

  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [editando, setEditando] = useState(false);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");

    if (!usuarioSalvo) {
      setErro("Usuário não encontrado. Faça login novamente.");
      return;
    }

    const dadosUsuario: Usuario = JSON.parse(usuarioSalvo);

    setUsuario(dadosUsuario);
    setNome(dadosUsuario.nome || dadosUsuario.Nome || "");
    setEmail(dadosUsuario.email || dadosUsuario.Email || "");
    setCpf(dadosUsuario.cpf || dadosUsuario.CPF || "");
  }, []);

  const pegarPrimeiraLetra = () => {
    const nomeUsuario = nome || "U";
    return nomeUsuario.charAt(0).toUpperCase();
  };

  const formatarData = () => {
    const data = usuario?.dataCriacao || usuario?.DataCriacao;

    if (!data) {
      return "Não informada";
    }

    return new Date(data).toLocaleDateString("pt-BR");
  };

  const cancelarEdicao = () => {
    if (!usuario) return;

    setNome(usuario.nome || usuario.Nome || "");
    setEmail(usuario.email || usuario.Email || "");
    setCpf(usuario.cpf || usuario.CPF || "");

    setEditando(false);
    setErro("");
    setMensagem("");
  };

  const salvarAlteracoes = async () => {
    setErro("");
    setMensagem("");

    if (!nome || !email || !cpf) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      setErro("Digite um e-mail válido.");
      return;
    }

    const usuarioAtualizado = {
      ...usuario,
      nome,
      Nome: nome,
      email,
      Email: email,
      cpf,
      CPF: cpf,
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));

    setUsuario(usuarioAtualizado);
    setEditando(false);
    setMensagem("Informações atualizadas com sucesso.");
  };

  return (
    <div className="perfil-page">
      <Header />

      <MenuLateral
        aberto={menuAberto}
        fecharMenu={() => setMenuAberto(false)}
      />

      <main className="perfil-content">
        <section className="perfil-hero">
          <div>
            <span>CentralDocs</span>
            <h1>Meu perfil</h1>
            <p>
              Veja e atualize suas informações pessoais da sua conta.
            </p>
          </div>

          <button
            type="button"
            className="btn-abrir-menu"
            onClick={() => setMenuAberto(true)}
          >
            Abrir menu
          </button>
        </section>

        <section className="perfil-grid">
          <aside className="perfil-card-usuario">
            <div className="perfil-main-avatar">
              {pegarPrimeiraLetra()}
            </div>

            <h2>{nome || "Usuário"}</h2>
            <p>{email || "E-mail não informado"}</p>

            <div className="perfil-status">
              <span>Status da conta</span>
              <strong>Ativo</strong>
            </div>
          </aside>

          <section className="perfil-card-info">
            <div className="perfil-card-header">
              <div>
                <h3>Informações pessoais</h3>
                <p>Esses dados são usados para identificar sua conta.</p>
              </div>

              {!editando && (
                <button
                  type="button"
                  className="btn-editar"
                  onClick={() => setEditando(true)}
                >
                  Editar informações
                </button>
              )}
            </div>

            <div className="perfil-form">
              <div className="perfil-campo">
                <label>Nome</label>
                <input
                  type="text"
                  value={nome}
                  disabled={!editando}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="perfil-campo">
                <label>E-mail</label>
                <input
                  type="email"
                  value={email}
                  disabled={!editando}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="perfil-campo">
                <label>CPF</label>
                <input
                  type="text"
                  value={cpf}
                  disabled={!editando}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>

              <div className="perfil-campo">
                <label>Data de criação</label>
                <input
                  type="text"
                  value={formatarData()}
                  disabled
                />
              </div>
            </div>

            {erro && <p className="perfil-erro">{erro}</p>}
            {mensagem && <p className="perfil-sucesso">{mensagem}</p>}

            {editando && (
              <div className="perfil-actions">
                <button
                  type="button"
                  className="btn-cancelar"
                  onClick={cancelarEdicao}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="btn-salvar"
                  onClick={salvarAlteracoes}
                >
                  Salvar alterações
                </button>
              </div>
            )}
          </section>
        </section>

        <section className="perfil-card-seguranca">
          <div>
            <h3>Segurança</h3>
            <p>
              Em breve você poderá alterar sua senha e configurar opções de segurança.
            </p>
          </div>

          <button type="button" disabled>
            Alterar senha
          </button>
        </section>
      </main>
    </div>
  );
}

export default Perfil;