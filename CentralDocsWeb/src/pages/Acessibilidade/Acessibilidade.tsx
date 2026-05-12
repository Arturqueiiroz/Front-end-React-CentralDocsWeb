import './Acessibilidade.css'

import {
    Eye,
    Keyboard,
    Volume2,
    Palette
} from "lucide-react";

function Acessibilidade() {
    return (
        <div className="layout">
            <div className="content">
                <main className="main-content">

                    <span className="breadcrumb">
                        Configurações &gt; Acessibilidade
                    </span>

                    <h1>Acessibilidade</h1>

                    <p className="description">
                        Personalize sua experiência no CentralDocs.
                    </p>

                    <section className="cards">

                        {/* VISUAL */}

                        <div className="card">

                            <div className="card-title">

                                <Eye size={22} />

                                <h2>Visual</h2>

                            </div>

                            <div className="option">

                                <div>
                                    <strong>Modo de alto contraste</strong>

                                    <p>
                                        Aumenta a visibilidade da interface.
                                    </p>
                                </div>

                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>

                            </div>

                            <div className="option">

                                <div>
                                    <strong>Redução de movimento</strong>

                                    <p>
                                        Minimiza animações do sistema.
                                    </p>
                                </div>

                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>

                            </div>

                        </div>

                        {/* NAVEGAÇÃO */}

                        <div className="card">

                            <div className="card-title">

                                <Keyboard size={22} />

                                <h2>Navegação</h2>

                            </div>

                            <div className="option">

                                <div>
                                    <strong>Atalhos de teclado</strong>

                                    <p>
                                        Navegação rápida e eficiente.
                                    </p>
                                </div>

                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>

                            </div>

                            <div className="option">

                                <div>
                                    <strong>Cabeçalhos fixos</strong>

                                    <p>
                                        Mantém títulos visíveis.
                                    </p>
                                </div>

                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>

                            </div>

                        </div>

                    </section>

                    {/* BANNER */}

                    <section className="banner">

                        <div className="banner-content">

                            <span className="tag">
                                Otimização de voz
                            </span>

                            <div className="banner-title">

                                <Volume2 size={28} />

                                <h2>Leitor de tela avançado</h2>

                            </div>

                            <p>
                                Compatível com NVDA, JAWS e VoiceOver.
                            </p>

                            <button>
                                Configurar narração
                            </button>

                        </div>

                    </section>

                    {/* CORES */}

                    <section className="color-section">

                        <div className="card-title">

                            <Palette size={22} />

                            <h2>Perfis de cores</h2>

                        </div>

                        <div className="colors">

                            <div className="color-card active-color">

                                <div className="color blue"></div>

                                <strong>Azul padrão</strong>

                                <p>Padrão CentralDocs</p>

                            </div>

                            <div className="color-card">

                                <div className="color dark"></div>

                                <strong>Monocromático</strong>

                                <p>Maior contraste visual</p>

                            </div>

                            <div className="color-card">

                                <div className="color orange"></div>

                                <strong>Protanopia</strong>

                                <p>Adaptação vermelho-verde</p>

                            </div>

                            <div className="color-card">

                                <div className="color green"></div>

                                <strong>Tritanopia</strong>

                                <p>Adaptação azul-amarelo</p>

                            </div>

                        </div>

                    </section>

                    {/* BOTÕES */}

                    <div className="actions">

                        <button className="secondary">
                            Redefinir
                        </button>

                        <button className="primary">
                            Salvar preferências
                        </button>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Acessibilidade;