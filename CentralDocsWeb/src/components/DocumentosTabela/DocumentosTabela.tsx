import "./DocumentosTabela.css";

const documentos = [
  {
    tipo: "Contrato de Prestação",
    formato: "PDF • 2.4 MB",
    numero: "#294.550-X",
    emissor: "Central Gov Authority",
    data: "12 Jan 2024",
    cor: "azul",
  },
  {
    tipo: "Documento de Identidade",
    formato: "PNG • 0.8 MB",
    numero: "92.110.455-8",
    emissor: "Secretaria de Segurança",
    data: "05 Nov 2023",
    cor: "verde",
  },
];

function DocumentosTabela() {
  return (
    <div className="documentos-tabela-card">
      <div className="documentos-tabela-wrapper">
        <table className="documentos-tabela">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Número</th>
              <th>Emissor</th>
              <th>Data de emissão</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {documentos.map((doc, index) => (
              <tr key={index}>
                <td>
                  <div className="documento-tipo">
                    <span className={`documento-icone ${doc.cor}`}>▤</span>

                    <div>
                      <strong>{doc.tipo}</strong>
                      <small>{doc.formato}</small>
                    </div>
                  </div>
                </td>

                <td>{doc.numero}</td>
                <td>{doc.emissor}</td>
                <td>{doc.data}</td>

                <td>
                  <div className="documento-acoes">
                    <button title="Visualizar">👁</button>
                    <button title="Editar">✎</button>
                    <button title="Excluir">🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="documentos-tabela-footer">
        <span>Exibindo 1-2 de 12 documentos</span>

        <div className="tabela-paginacao">
          <button>‹</button>
          <button>›</button>
        </div>
      </div>
    </div>
  );
}

export default DocumentosTabela;