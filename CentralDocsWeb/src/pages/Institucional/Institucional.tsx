import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import InstitutionalSection from "../../components/InstitutionalSection/InstitutionalSection";
import InstitutionalCards from "../../components/InstitutionalCards/InstitutionalCards";
import InstitutionalValues from "../../components/InstitutionalValues/InstitutionalValues";
import LeadershipBoard from "../../components/LeadershipBoard/LeadershipBoard";

import "./Institucional.css";

function Institucional() {
  return (
    <div className="institucional-page">
      <Header />

      <InstitutionalSection />

      <InstitutionalCards />

      <InstitutionalValues />

      <LeadershipBoard />

      <Footer />
    </div>
  );
}

export default Institucional;