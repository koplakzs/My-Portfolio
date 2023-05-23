import "./App.css";
import Home from "./components/Home";
import Deskripsi from "./components/Deskripsi";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="deskripsi">
        <Deskripsi />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
