import "./UserProfileCard.css";

function UserProfileCard() {
  return (
    <div className="user-profile-card">
      <img
        src="https://i.pravatar.cc/200"
        alt=""
      />

      <h2>Ricardo Silva</h2>

      <span>Administrador Enterprise</span>

      <div className="status">
        <small>Status da Conta</small>

        <strong>ATIVO</strong>
      </div>

      <div className="status-bar"></div>
    </div>
  );
}

export default UserProfileCard;