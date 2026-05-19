import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  buscarTiposDocumento,
  criarDocumento,
} from "../../services/documentoService";
import type { TipoDocumento } from "../../services/documentoService";
import "./CadastrarDocumento.css";

function CadastrarDocumento() {
  const navigate = useNavigate();

  const [numero, setNumero] = useState("");
  const [orgaoEmissor, setOrgaoEmissor] = useState("");
  const [dataEmissao, setDataEmissao] = useState("");
  const [cidadeEmissao, setCidadeEmissao] = useState("");
  const [tipoDocumentoId, setTipoDocumentoId] = useState("");

  const [tipos, setTipos] = useState<TipoDocumento[]>([]);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarTipos() {
      try {
        const dados = await buscarTiposDocumento();

        setTipos(dados);

        if (dados.length > 0) {
          setTipoDocumentoId(String(dados[0].id));
        }
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar os tipos de documento.");
      }
    }

    carregarTipos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErro("");
    setMensagem("");

    if (
      !numero ||
      !orgaoEmissor ||
      !dataEmissao ||
      !cidadeEmissao ||
      !tipoDocumentoId
    ) {
      setErro("Preencha todos os campos.");
      return;
    }

    const usuarioSalvo = localStorage.getItem("usuario");
    const usuario = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

    const usuarioId = usuario?.id || usuario?.Id;

    if (!usuarioId) {
      setErro("Usuário não encontrado. Faça login novamente.");
      return;
    }

    try {
      setCarregando(true);

      await criarDocumento({
        numero,
        orgaoEmissor,
        dataEmissao: `${dataEmissao}T00:00:00.000Z`,
        cidadeEmissao,
        usuarioId,
        tipoDocumentoId: Number(tipoDocumentoId),
      });

      setMensagem("Documento cadastrado com sucesso!");

      setTimeout(() => {
        navigate("/documentos");
      }, 1200);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro("Não foi possível cadastrar o documento.");
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="cadastrar-documento-layout">
      <Header />

      <main className="cadastrar-documento-page">
        <div className="cadastrar-documento-header">
          <span>CentralDocs</span>
          <h1>Cadastrar documento</h1>
          <p>
            Preencha as informações abaixo para adicionar um novo documento à
            plataforma.
          </p>
        </div>

        <form className="cadastrar-documento-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento</label>

            <select
              id="tipoDocumento"
              value={tipoDocumentoId}
              onChange={(e) => setTipoDocumentoId(e.target.value)}
            >
              <option value="">Selecione um tipo</option>

              {tipos.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número do documento</label>

            <input
              id="numero"
              type="text"
              placeholder="Ex: 123456789"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="orgaoEmissor">Órgão emissor</label>

            <input
              id="orgaoEmissor"
              type="text"
              placeholder="Ex: Secretaria de Segurança Pública"
              value={orgaoEmissor}
              onChange={(e) => setOrgaoEmissor(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dataEmissao">Data de emissão</label>

              <input
                id="dataEmissao"
                type="date"
                value={dataEmissao}
                onChange={(e) => setDataEmissao(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidadeEmissao">Cidade de emissão</label>

              <input
                id="cidadeEmissao"
                type="text"
                placeholder="Ex: São Paulo"
                value={cidadeEmissao}
                onChange={(e) => setCidadeEmissao(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="foto">Foto do documento</label>

            <input id="foto" type="file" disabled />

            <small>Envio de foto será implementado depois.</small>
          </div>

          {erro && <p className="mensagem-erro">{erro}</p>}
          {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}

          <div className="form-actions">
            <button
              type="button"
              className="btn-cancelar"
              onClick={() => navigate("/documentos")}
            >
              Cancelar
            </button>

            <button type="submit" className="btn-salvar" disabled={carregando}>
              {carregando ? "Salvando..." : "Salvar documento"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CadastrarDocumento;