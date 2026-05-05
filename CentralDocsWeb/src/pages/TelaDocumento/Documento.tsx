import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import DocumentosFiltros from "../..//components/DocumentosFiltros/DocumentosFiltros";
import DocumentosTabela from "../../components/DocumentosTabela/DocumentosTabela";
import DocumentosCards from "../../components/DocumentosCards/DocumentosCards";
import "./Documento.css";

function Documentos() {
  return (
    <div className="documentos-layout">
      <Header />

      <main className="documentos-page">
        <PageHeader
          badge="CentralDocs"
          titulo="Meus documentos"
          descricao="Gerencie, acompanhe e proteja seus arquivos institucionais em um ambiente moderno, seguro e organizado."
          textoBotao="Adicionar documento"
        />

        <section className="documentos-resumo">
          <div className="documentos-resumo-card">
            <span className="resumo-icon resumo-blue">▣</span>
            <div>
              <p>Total de documentos</p>
              <strong>128</strong>
            </div>
          </div>

          <div className="documentos-resumo-card">
            <span className="resumo-icon resumo-green">✓</span>
            <div>
              <p>Protegidos</p>
              <strong>116</strong>
            </div>
          </div>

          <div className="documentos-resumo-card">
            <span className="resumo-icon resumo-orange">!</span>
            <div>
              <p>Precisam revisar</p>
              <strong>12</strong>
            </div>
          </div>
        </section>

        <section className="documentos-content">
          <DocumentosFiltros />
          <DocumentosTabela />
        </section>

        <DocumentosCards />
      </main>
    </div>
  );
}

export default Documentos;