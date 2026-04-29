import "./Efficiency.css";
import segurancaImg from "../../assets/img/backgroundTecnologia.png";
import experienciaImg from "../../assets/img/experienciaUsuario.png";
import iconeSeguranca from "../../assets/icones/iconeSeguranca.png";
import iconeTecnologia from "../../assets/icones/iconeTecnologia.png";
import iconeFlash from "../../assets/icones/iconeFlash.png";
import iconeClick from "../../assets/icones/iconeClick.png";

function Efficiency() {
  return (
    <section className="efficiency">
      <div className="efficiency-container">
        <div className="efficiency-header">
          <h2>Gerencie seus documentos sem complicação</h2>
          <p>
            Tudo organizado, seguro e fácil de encontrar. Chega de perder tempo
            procurando arquivos.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card feature-card-large">
            <div className="feature-content">
              <img src={iconeSeguranca} alt="" className="feature-icon" />

              <h3>Segurança de verdade</h3>

              <p>
                Seus documentos protegidos com criptografia e controle de acesso.
                Só quem pode, vê.
              </p>
            </div>

            <img
              src={segurancaImg}
              alt="Segurança de dados"
              className="feature-image"
            />
          </div>

          <div className="feature-card">
            <img src={iconeTecnologia} alt="" className="feature-icon" />

            <h3>Tudo no lugar certo</h3>

            <p>
              Organize com pastas, tags e filtros. Encontre qualquer documento
              em segundos.
            </p>
          </div>

          <div className="feature-card">
            <img src={iconeFlash} alt="" className="feature-icon" />

            <h3>Busca instantânea</h3>

            <p>
              Digite e encontre. Simples assim. Nada de perder tempo procurando
              arquivo.
            </p>
          </div>

          <div className="feature-card feature-card-large">
            <img
              src={experienciaImg}
              alt="Interface simples"
              className="feature-image"
            />

            <div className="feature-content">
              <img src={iconeClick} alt="" className="feature-icon" />

              <h3>Fácil de usar</h3>

              <p>
                Interface simples e direta. Qualquer pessoa consegue usar sem
                precisar aprender tudo do zero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Efficiency;