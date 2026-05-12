import { useState } from "react";

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import PersonalInfoCard from "../../components/PersonalInfoCard/PersonalInfoCard";
import SecurityPanel from "../../components/SecurityPanel/SecurityPanel";
import MenuLateral from "../../components/MenuLateral/MenuLateral";

import "./Perfil.css";

function Perfil() {
  const [menuAberto, setMenuAberto] = useState(true);

  return (
    <div className="profile-layout">
        
      <MenuLateral
        aberto={menuAberto}
        fecharMenu={() => setMenuAberto(false)}
      />

      <div className="profile-content">
        <ProfileHeader />

        <div className="profile-body">
          <h1>Meu Perfil</h1>

          <p>
            Gerencie suas informações pessoais e configurações
            de segurança.
          </p>

          <div className="profile-cards">
            <UserProfileCard />
            <PersonalInfoCard />
          </div>

          <SecurityPanel />
        </div>
      </div>
    </div>
  );
}

export default Perfil;