import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.jpg";
import phpImg from "../assets/php.png";
import laravelImg from "../assets/laravel.png";
import codeigniterImg from "../assets/Codeigniter.png";
import flutterImg from "../assets/flutter.png";
import mysqlImg from "../assets/mysql.png";

const Card = ({ data }) => {
  return data.map((item) => (
    <div key={item.id} className="col-4 col-sm-3 col-md-2">
      <img src={item.image} alt={item.alt} />
    </div>
  ));
};

const Skill = () => {
  const image = [
    { id: 1, image: htmlImg, alt: "HTML 5" },
    { id: 2, image: cssImg, alt: "CSS" },
    { id: 3, image: jsImg, alt: "Java Script" },
    { id: 4, image: reactImg, alt: "React Js" },
    { id: 5, image: phpImg, alt: "PHP" },
    { id: 6, image: laravelImg, alt: "Laravel Framework" },
    { id: 7, image: codeigniterImg, alt: "CodeIgniter Framework" },
    { id: 8, image: flutterImg, alt: "Flutter Framework" },
    { id: 9, image: mysqlImg, alt: "MySql Database" },
  ];

  return (
    <div className="skill container d-flex align-items-center justify-content-center">
      <div className="my-skill text-center">
        <h3 style={{ fontWeight: "bold", color: "#a8a8a8" }}>My Skill</h3>
        <div className="cards row justify-content-evenly gap-2">
          <Card data={image} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
