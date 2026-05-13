import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Efficiency from "./components/Efficiency/Efficiency";
import CTA from "./components/Cta/Cta";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import Documentos from "./pages/TelaDocumento/Documento";
import "./index.css";
import "./App.css";
import Institucional from "./pages/Institucional/Institucional";
import Perfil from "./pages/Perfil/Perfil";
import Acessibilidade from "./pages/Acessibilidade/Acessibilidade";

function Home() {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <Efficiency />
      <CTA />
      <Footer />
    </div>
  );
}

function RotaPrivada({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />

        {/* Rotas privadas */}
        <Route path="/documentos" element={ <RotaPrivada> <Documentos /> </RotaPrivada>
        }
        />

        <Route
          path="/institucional" element={ <RotaPrivada> <Institucional /> </RotaPrivada>
          }
        />

        <Route path="/perfil" element={ <RotaPrivada> <Perfil /> </RotaPrivada>
          }
        />

        <Route path="/acessibilidade" element={ <RotaPrivada> <Acessibilidade /> </RotaPrivada>
          }
        />
        <Route path="/perguntas-frequentes" element={ <RotaPrivada> <PerguntasFrequentes /> </RotaPrivada>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;