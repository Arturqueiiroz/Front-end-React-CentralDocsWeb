import "./LeadershipBoard.css";
import MatheusImg from "../../assets/img/Matheus.jpg";
import ArturImg from "../../assets/img/Artur.jpg";
import NicolayImg from "../../assets/img/Nicolay.jpg";

function LeadershipBoard() {
  return (
    <section className="leadership-board">
      <span>LIDERANÇA</span>

      <h2>
        As Mentes por Trás do
        <br />
        CentralDocs
      </h2>

      <div className="leaders">
        <div className="leader-card">
          <img src={MatheusImg} alt="Matheus" />

          <h4>Matheus Cantanhede da Silva</h4>

          <p>Desenvolvedor back-end</p>
        </div>

        <div className="leader-card">
          <img src={ArturImg} alt="Artur" />

          <h4>Artur Cosmos Queiroz</h4>

          <p>Desenvolvedor Full-Stack</p>
        </div>

        <div className="leader-card">
          <img src={NicolayImg}alt="Nicolay" />

          <h4>Nicolay Neves</h4>

          <p>Desenvolvedor Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default LeadershipBoard;
