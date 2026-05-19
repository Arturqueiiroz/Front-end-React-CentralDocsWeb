import "./DocumentosTabela.css";
import type { Documento } from "../../services/documentoService";

type Props = {
  documentos: Documento[];
};

function DocumentosTabela({ documentos }: Props) {
  return (
    <div className="documentos-tabela-card">
      <div className="documentos-tabela-wrapper">
        <table className="documentos-tabela">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Número</th>
              <th>Emissor</th>
              <th>Cidade</th>
              <th>Usuário</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {documentos.length === 0 ? (
              <tr>
                <td colSpan={6}>Nenhum documento cadastrado.</td>
              </tr>
            ) : (
              documentos.map((doc) => (
                <tr key={doc.id}>
                  <td>
                    <div className="documento-tipo">
                      <span className="documento-icone azul">▤</span>

                      <div>
                        <strong>{doc.tipo}</strong>
                        <small>Documento cadastrado</small>
                      </div>
                    </div>
                  </td>

                  <td>{doc.numero}</td>
                  <td>{doc.orgaoEmissor}</td>
                  <td>{doc.cidadeEmissao}</td>
                  <td>{doc.usuario}</td>

                  <td>
                    <div className="documento-acoes">
                      <button title="Visualizar">👁</button>
                      <button title="Editar">✎</button>
                      <button title="Excluir">🗑</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="documentos-tabela-footer">
        <span>
          Exibindo {documentos.length} de {documentos.length} documentos
        </span>

        <div className="tabela-paginacao">
          <button>‹</button>
          <button>›</button>
        </div>
      </div>
    </div>
  );
}

export default DocumentosTabela;