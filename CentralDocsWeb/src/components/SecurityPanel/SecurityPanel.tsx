import "./SecurityPanel.css";

function SecurityPanel() {
  return (
    <div className="security-panel">
      <h3>Segurança</h3>

      <div className="security-item">
        <div>
          <strong>Alterar senha</strong>

          <p>
            Recomendamos trocar sua senha a cada 90 dias.
          </p>
        </div>

        <span>›</span>
      </div>

      <div className="security-item">
        <div>
          <strong>Autenticação em duas etapas</strong>

          <p>
            Proteja sua conta com verificação adicional.
          </p>
        </div>

        <button>ATIVADO</button>
      </div>
    </div>
  );
}

export default SecurityPanel;