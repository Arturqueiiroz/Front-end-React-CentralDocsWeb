import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        
        <div className="footer-left">
          <h4 className="footer-brand-name">CentralDocs</h4>
          <p className="footer-copyright">
            © 2026 CentralDocs. Todos os direitos reservados.
          </p>
        </div>

        <nav className="footer-right">
          <ul className="footer-links">
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Serviço</a></li>
            <li><a href="#">Central de Ajuda</a></li>
            <li><a href="#">Documentação da API</a></li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;