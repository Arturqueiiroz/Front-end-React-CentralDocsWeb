import "./DocumentosCards.css";

function DocumentosCards() {
  return (
    <section className="documentos-cards">
      <div className="info-card storage-card">
        <div className="info-card-top">
          <span className="info-icon">☁</span>
          <span className="status-disponivel">75% disponível</span>
        </div>

        <p>Espaço utilizado</p>
        <strong>2.5 GB / 10 GB</strong>

        <div className="storage-bar">
          <div></div>
        </div>
      </div>

      <div className="info-card security-card">
        <span className="security-icon">🛡</span>
        <h3>Proteção Blindada</h3>
        <p>
          Seus documentos são criptografados com padrão AES-256 e protegidos por
          biometria.
        </p>
      </div>

      <div className="info-card access-card">
        <div className="access-top">
          <span>↺</span>
          <a href="#">Ver histórico</a>
        </div>

        <p>Último acesso</p>
        <strong>Hoje, 14:22</strong>
        <small>Via CentralDocs Web App</small>
      </div>
    </section>
  );
}

export default DocumentosCards;