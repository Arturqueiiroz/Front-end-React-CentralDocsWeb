import logo from "../../assets/img/LogoCentralDocsNova.png";
import authVisual from "../../assets/img/cadastro-visual-centraldocs.png";
import "./AuthLayout.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-form-area">
          <img src={logo} alt="CentralDocs" className="auth-logo" />

          {children}
        </div>

        <div className="auth-image-area">
          <img
            src={authVisual}
            alt="Ilustração CentralDocs"
            className="auth-visual"
          />
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;