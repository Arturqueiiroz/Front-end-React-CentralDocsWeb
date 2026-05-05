import "./PageHeader.css";

type PageHeaderProps = {
  titulo: string;
  descricao: string;
  badge?: string;
  textoBotao?: string;
  onClickBotao?: () => void;
};

function PageHeader({
  titulo,
  descricao,
  badge,
  textoBotao,
  onClickBotao,
}: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="page-header-conteudo">
        {badge && <span className="page-header-badge">{badge}</span>}

        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>

      {textoBotao && (
        <button className="page-header-button" onClick={onClickBotao}>
          <span>+</span>
          {textoBotao}
        </button>
      )}
    </div>
  );
}

export default PageHeader;