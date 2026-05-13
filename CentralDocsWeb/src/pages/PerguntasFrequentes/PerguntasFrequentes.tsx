import { useState } from "react";
import Header from "../../components/Header/Header";
import "./PerguntasFrequentes.css";

type Pergunta = {
  pergunta: string;
  resposta: string;
};

function PerguntasFrequentes() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  const perguntas: Pergunta[] = [
    {
      pergunta: "O que é o CentralDocs?",
      resposta:
        "O CentralDocs é uma plataforma criada para organizar, armazenar e facilitar o acesso a documentos importantes de forma segura e prática.",
    },
    {
      pergunta: "Preciso estar logado para acessar meus documentos?",
      resposta:
        "Sim. Para proteger suas informações, apenas usuários cadastrados e logados conseguem acessar páginas como documentos, perfil e configurações.",
    },
    {
      pergunta: "Meus documentos ficam seguros?",
      resposta:
        "Sim. A proposta do sistema é oferecer mais segurança no armazenamento e gerenciamento de documentos, evitando perda de informações e acessos indevidos.",
    },
    {
      pergunta: "Posso acessar o sistema pelo celular?",
      resposta:
        "Sim. A interface foi pensada para funcionar em diferentes tamanhos de tela, incluindo computadores, tablets e celulares.",
    },
    {
      pergunta: "Como faço para recuperar minha senha?",
      resposta:
        "Na tela de login, clique em 'Esqueci minha senha'. Depois, siga as instruções para iniciar o processo de recuperação.",
    },
    {
      pergunta: "Quem pode usar o CentralDocs?",
      resposta:
        "O sistema pode ser utilizado por usuários que precisam gerenciar documentos institucionais, pessoais ou corporativos em um ambiente centralizado.",
    },
  ];

  function alternarPergunta(index: number) {
    if (perguntaAberta === index) {
      setPerguntaAberta(null);
    } else {
      setPerguntaAberta(index);
    }
  }

  return (
    <>
      <Header />

      <main className="faq-page">
        <section className="faq-hero">
          <span className="faq-tag">Central de ajuda</span>

          <h1>Perguntas frequentes</h1>

          <p>
            Encontre respostas rápidas sobre o funcionamento do CentralDocs,
            acesso à conta, segurança e gerenciamento de documentos.
          </p>
        </section>

        <section className="faq-container">
          <div className="faq-info-card">
            <h2>Precisa de ajuda?</h2>

            <p>
              Reunimos aqui as principais dúvidas para facilitar sua experiência
              dentro da plataforma.
            </p>

            <div className="faq-info-box">
              <strong>Dica</strong>
              <span>
                Clique em uma pergunta para abrir ou fechar a resposta.
              </span>
            </div>
          </div>

          <div className="faq-lista">
            {perguntas.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  perguntaAberta === index ? "faq-item-aberto" : ""
                }`}
              >
                <button
                  type="button"
                  className="faq-pergunta"
                  onClick={() => alternarPergunta(index)}
                >
                  <span>{item.pergunta}</span>
                  <strong>{perguntaAberta === index ? "−" : "+"}</strong>
                </button>

                {perguntaAberta === index && (
                  <p className="faq-resposta">{item.resposta}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default PerguntasFrequentes;