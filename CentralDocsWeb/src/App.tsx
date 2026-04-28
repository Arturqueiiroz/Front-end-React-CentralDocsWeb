import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
        <Hero />

      <Footer />
    </div>
  );
}

export default App;