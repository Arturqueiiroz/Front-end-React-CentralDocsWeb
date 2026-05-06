import "./InstitutionalCards.css";

function InstitutionalCards() {
  return (
    <section className="institutional-cards">
      <span>O OBJETIVO</span>

      <h2>Arquitetando a Clareza Organizacional</h2>

      <div className="cards-grid">
        <div className="large-card">
          <h3>
            Unificando Fluxos de Trabalho
            Fragmentados
          </h3>

          <p>
            CentralDocs conecta setores e melhora a
            eficiência operacional.
          </p>
        </div>

        <div className="blue-card">
          <h3>Confiança Institucional</h3>

          <p>
            Segurança e transparência para decisões
            organizacionais.
          </p>
        </div>
      </div>

      <div className="mini-cards">
        <div className="mini-card">
          <h4>Recuperação Otimizada</h4>
          <p>Busca inteligente de documentos.</p>
        </div>

        <div className="mini-card">
          <h4>Design escalável</h4>
          <p>Estrutura adaptável.</p>
        </div>

        <div className="mini-card">
          <h4>Conformidade Rigorosa</h4>
          <p>Integridade e segurança.</p>
        </div>
      </div>
    </section>
  );
}

export default InstitutionalCards;