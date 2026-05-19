// src/pages/Configuracoes/Configuracoes.tsx

import "./Configuracoes.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Configuracoes() {
    return (
        <>
            <Header />

            <div className="config-page">

                <main className="config-content">

                    <div className="topbar">
                        <h1>Configurações</h1>

                        <p>
                            Gerencie preferências da conta,
                            segurança e aparência da plataforma.
                        </p>
                    </div>

                    <div className="cards-grid">

                        {/* Tema */}
                        <section className="card">
                            <h3>Tema</h3>

                            <div className="tema-box">

                                <button className="tema ativo">
                                    <div className="tema-preview claro"></div>

                                    <span>Claro</span>
                                </button>

                                <button className="tema">
                                    <div className="tema-preview escuro"></div>

                                    <span>Escuro</span>
                                </button>

                            </div>
                        </section>

                        {/* Notificações */}
                        <section className="card">
                            <h3>Notificações</h3>

                            <div className="switch-group">
                                <div>
                                    <strong>Alertas por e-mail</strong>

                                    <p>
                                        Receba notificações importantes.
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                />
                            </div>

                            <div className="switch-group">
                                <div>
                                    <strong>
                                        Notificações no sistema
                                    </strong>

                                    <p>
                                        Alertas dentro da plataforma.
                                    </p>
                                </div>

                                <input type="checkbox" />
                            </div>

                            <div className="switch-group">
                                <div>
                                    <strong>
                                        Avisos de segurança
                                    </strong>

                                    <p>
                                        Atividades suspeitas da conta.
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                />
                            </div>
                        </section>

                        {/* Segurança */}
                        <section className="card">
                            <h3>Segurança</h3>

                            <div className="security-box">
                                <div>
                                    <strong>
                                        Autenticação em 2 fatores
                                    </strong>

                                    <p>
                                        Adicione uma camada extra
                                        de segurança.
                                    </p>
                                </div>

                                <button>
                                    Habilitar
                                </button>
                            </div>

                            <div className="security-box">
                                <div>
                                    <strong>
                                        Sessão atual
                                    </strong>

                                    <p>
                                        Conta autenticada.
                                    </p>
                                </div>

                                <span className="ativo-status">
                                    Ativo
                                </span>
                            </div>

                            <button className="senha-btn">
                                Mudar senha
                            </button>
                        </section>

                        {/* Preferências */}
                        <section className="card">
                            <h3>Preferências</h3>

                            <label>Idioma</label>

                            <select>
                                <option>
                                    Português (Brasil)
                                </option>

                                <option>
                                    English
                                </option>
                            </select>

                            <label>Horário</label>

                            <select>
                                <option>
                                    (GMT-03:00) São Paulo
                                </option>
                            </select>

                            <button className="danger">
                                Desativar conta
                            </button>
                        </section>

                    </div>

                </main>

            </div>

            <Footer />
        </>
    );
}

export default Configuracoes;