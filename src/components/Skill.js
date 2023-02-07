import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.jpg";
const Skill = () => {
  return (
    <div className="skill container text-center">
      <h3 style={{ fontWeight: "bold", color: "#a8a8a8" }}>My Skill</h3>
      <div className="cards d-flex flex-wrap justify-content-evenly gap-5">
        <div className="card">
          <img src={htmlImg} alt="HTML5" />
          <div className="card-body">
            <p className="card-text">BASIC</p>
          </div>
        </div>
        <div className="card">
          <img src={cssImg} alt="HTML5" />
          <div className="card-body">
            <p className="card-text">BASIC</p>
          </div>
        </div>
        <div className="card">
          <img src={jsImg} alt="HTML5" />
          <div className="card-body">
            <p className="card-text">BASIC</p>
          </div>
        </div>
        <div className="card">
          <img src={reactImg} alt="HTML5" />
          <div className="card-body">
            <p className="card-text">BASIC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
