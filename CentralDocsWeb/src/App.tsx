import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;