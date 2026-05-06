import "./LeadershipBoard.css";

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
          <img
            src=""
            alt=""
          />

          <h4>Matheus Cantanhede da Silva</h4>

          <p>Desenvolvedor back-end</p>
        </div>

        <div className="leader-card">
          <img
            src=""
            alt=""
          />

          <h4>Artur Cosmos Queiroz</h4>

          <p>Desenvolvedor Full-Stack</p>

          
        <div className="leader-card">
          <img
            src=""
            alt=""
          />

          <h4>Nicolay Neves</h4>

          <p>Desenvolvedor Front-end</p>
        </div>

        </div>
      </div>
    </section>
  );
}

export default LeadershipBoard;