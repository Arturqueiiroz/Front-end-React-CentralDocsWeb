import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import DocumentosFiltros from "../../components/DocumentosFiltros/DocumentosFiltros";
import DocumentosTabela from "../../components/DocumentosTabela/DocumentosTabela";
import DocumentosCards from "../../components/DocumentosCards/DocumentosCards";
import { buscarDocumentos } from "../../services/documentoService";
import type { Documento } from "../../services/documentoService";
import "./Documento.css";
import { useNavigate } from "react-router-dom";

function Documentos() {
  const navigate = useNavigate();
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarDocumentos() {
    try {
      setCarregando(true);
      setErro("");

      const dados = await buscarDocumentos();
      setDocumentos(dados);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível carregar os documentos.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarDocumentos();
  }, []);

  return (
    <div className="documentos-layout">
      <Header />

      <main className="documentos-page">
      <PageHeader
        badge="CentralDocs"
        titulo="Meus documentos"
        descricao="Gerencie, acompanhe e proteja seus arquivos institucionais em um ambiente moderno, seguro e organizado."
        textoBotao="Adicionar documento"
        onClickBotao={() => navigate("/documentos/novo")}
      />

        <section className="documentos-resumo">
          <div className="documentos-resumo-card">
            <span className="resumo-icon resumo-blue">▣</span>
            <div>
              <p>Total de documentos</p>
              <strong>{documentos.length}</strong>
            </div>
          </div>

          <div className="documentos-resumo-card">
            <span className="resumo-icon resumo-green">✓</span>
            <div>
              <p>Protegidos</p>
              <strong>{documentos.length}</strong>
            </div>
          </div>

          <div className="documentos-resumo-card">
            <span className="resumo-icon resumo-orange">!</span>
            <div>
              <p>Precisam revisar</p>
              <strong>0</strong>
            </div>
          </div>
        </section>

        {carregando && <p>Carregando documentos...</p>}
        {erro && <p className="mensagem-erro">{erro}</p>}

        {!carregando && !erro && (
          <>
            <section className="documentos-content">
              <DocumentosFiltros />
              <DocumentosTabela documentos={documentos} />
            </section>

            <DocumentosCards documentos={documentos} />
          </>
        )}
      </main>
    </div>
  );
}

export default Documentos;