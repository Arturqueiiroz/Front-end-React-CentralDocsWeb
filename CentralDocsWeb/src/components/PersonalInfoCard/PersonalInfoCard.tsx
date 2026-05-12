import "./PersonalInfoCard.css";

function PersonalInfoCard() {
  return (
    <div className="personal-info-card">
      <div className="info-header">
        <h3>Informações Pessoais</h3>

        <button>Editar informações</button>
      </div>

      <div className="info-grid">
        <div>
          <small>NOME</small>
          <p>Ricardo de Oliveira Silva</p>
        </div>

        <div>
          <small>CPF</small>
          <p>123.456.789-00</p>
        </div>

        <div>
          <small>E-MAIL</small>
          <p>ricardo.silva@centraldocs.com.br</p>
        </div>

        <div>
          <small>DATA DE CRIAÇÃO</small>
          <p>15 de Maio, 2023</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoCard;