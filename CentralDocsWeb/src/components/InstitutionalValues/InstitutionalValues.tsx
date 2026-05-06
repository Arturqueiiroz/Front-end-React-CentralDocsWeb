import "./InstitutionalValues.css";

function InstitutionalValues() {
  return (
    <section className="institutional-values">
      <div className="value-box">
        <h3>Nossa Missão</h3>

        <p>
          Capacitar organizações com documentação
          segura e inteligente.
        </p>
      </div>

      <div className="value-box">
        <h3>Nossa Visão</h3>

        <p>
          Tornar-se referência global em gestão
          documental.
        </p>
      </div>

      <div className="value-box">
        <h3>Nossos Valores</h3>

        <ul>
          <li>Segurança</li>
          <li>Eficiência</li>
          <li>Inovação</li>
        </ul>
      </div>
    </section>
  );
}

export default InstitutionalValues;