import "./DocumentosFiltros.css";

function DocumentosFiltros() {
  return (
    <div className="documentos-filtros">
      <div className="documentos-busca">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Pesquisar por nome, número ou emissor..."
        />
      </div>

      <div className="documentos-categorias">
        <button className="categoria ativa">Todos</button>
        <button className="categoria">Contratos</button>
        <button className="categoria">Identidade</button>
        <button className="categoria">Financeiro</button>
        <button className="categoria filtro-extra">☰</button>
      </div>
    </div>
  );
}

export default DocumentosFiltros;