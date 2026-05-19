import "./DocumentosCards.css";
import type { Documento } from "../../services/documentoService";

type Props = {
  documentos: Documento[];
};

function DocumentosCards({ documentos }: Props) {
  return (
    <section className="documentos-cards">
      <div className="info-card storage-card">
        <div className="info-card-top">
          <span className="info-icon">☁</span>
          <span className="status-disponivel">75% disponível</span>
        </div>

        <p>Documentos cadastrados</p>
        <strong>{documentos.length}</strong>

        <div className="storage-bar">
          <div></div>
        </div>
      </div>

      <div className="info-card security-card">
        <span className="security-icon">🛡</span>
        <h3>Proteção Blindada</h3>
        <p>
          Seus documentos são protegidos por autenticação segura e acesso
          controlado.
        </p>
      </div>

      <div className="info-card access-card">
        <div className="access-top">
          <span>↺</span>
          <a href="#">Ver histórico</a>
        </div>

        <p>Última atualização</p>
        <strong>Agora</strong>
        <small>Dados carregados da API</small>
      </div>
    </section>
  );
}

export default DocumentosCards;