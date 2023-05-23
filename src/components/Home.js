import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="home d-flex align-items-center justify-content-center">
      <div className="intro">
        <h3 className="mb-5" style={{ fontWeight: "bold" }}>
          Hi! I am a{" "}
          <span style={{ fontWeight: "bold", color: "#00e6e6" }}>
            <Typewriter
              words={["Web Developer", "College Student", "Mobile Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>{" "}
        </h3>

        <p>
          Studying at a University in Riau with a major in informatics made me
          pursue this field, especially in the field of web developer and mobile
          developer.
        </p>
        <button className="mt-5 btn btn-success">
          <a
            href="#deskripsiApp"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            About me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
