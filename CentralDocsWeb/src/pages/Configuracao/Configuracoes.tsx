// src/pages/Configuracoes/Configuracoes.tsx

import "./Configuracoes.css";

function Configuracoes() {
    return (
        <div className="config-page">

            <aside className="sidebar">
                <div className="logo">
                    <h2>CentralDocs</h2>
                    <span>ARMAZENAMENTO EMPRESARIAL</span>
                </div>

                <nav className="menu">
                    <button>Início</button>
                    <button>Documentos</button>
                    <button>Perfil</button>
                    <button className="active">Configurações</button>
                    <button>Acessibilidade</button>
                </nav>

                <div className="perfil-box">
                    <strong>Nick Silva</strong>
                    <span>PLANO PREMIUM</span>
                </div>
            </aside>

            <main className="config-content">

                <div className="topbar">
                    <h1>Configurações</h1>
                </div>

                <div className="cards-grid">

                    <section className="card">
                        <h3>Tema</h3>

                        <div className="tema-box">
                            <button className="tema ativo">
                                Claro
                            </button>

                            <button className="tema">
                                Escuro
                            </button>
                        </div>
                    </section>

                    <section className="card">
                        <h3>Notificações</h3>

                        <div className="switch-group">
                            <div>
                                <strong>Alertas por e-mail</strong>
                                <p>Receba notificações importantes.</p>
                            </div>

                            <input type="checkbox" defaultChecked />
                        </div>

                        <div className="switch-group">
                            <div>
                                <strong>Notificações na área</strong>
                                <p>Alertas dentro do sistema.</p>
                            </div>

                            <input type="checkbox" />
                        </div>
                    </section>

                    <section className="card">
                        <h3>Segurança</h3>

                        <div className="security-box">
                            <div>
                                <strong>Autenticação 2 fatores</strong>
                                <p>Proteja sua conta.</p>
                            </div>

                            <button>Habilitar</button>
                        </div>

                        <div className="security-box">
                            <div>
                                <strong>Sessão atual</strong>
                                <p>Status da conta</p>
                            </div>

                            <span className="ativo-status">
                                Ativo
                            </span>
                        </div>
                    </section>

                    <section className="card">
                        <h3>Preferências</h3>

                        <label>Idioma</label>

                        <select>
                            <option>Português (Brasil)</option>
                        </select>

                        <label>Timezone</label>

                        <select>
                            <option>(GMT-03:00) São Paulo</option>
                        </select>

                        <button className="danger">
                            Desativar conta
                        </button>
                    </section>

                </div>

            </main>

        </div>
    );
}

export default Configuracoes;