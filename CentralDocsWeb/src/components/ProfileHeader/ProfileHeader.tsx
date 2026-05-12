import "./ProfileHeader.css";

function ProfileHeader() {
  return (
    <header className="profile-header">
      <div></div>

      <div className="header-actions">
        <span>🔔</span>

        <img
          src="https://i.pravatar.cc/100"
          alt=""
        />
      </div>
    </header>
  );
}

export default ProfileHeader;