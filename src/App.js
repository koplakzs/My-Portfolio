import "./App.css";
import Home from "./components/Home";
import Deskripsi from "./components/Deskripsi";
import Skill from "./components/Skill";
import Service from "./components/Service";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div id="homeApp">
        <Home />
      </div>
      <div id="deskripsiApp">
        <Deskripsi />
      </div>
      <div id="skillApp">
        <Skill />
      </div>
      <div id="serviceApp">
        <Service />
      </div>
      <div id="footerApp">
        <Footer />
      </div>
    </div>
  );
}

export default App;
