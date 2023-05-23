import myPict from "../assets/myPict.jpg";
// import file from "../assets/"
const Deskripsi = () => {
  return (
    <div className="deskripsi d-flex align-items-center justify-content-center">
      <div className="intro">
        <div className="col-sm-4 text-center">
          <img
            src={myPict}
            alt="Ridho Alfandi"
            style={{ borderRadius: "50px" }}
          />
        </div>
        <div className="col-sm-6 my-deskripsi">
          <h3 style={{ fontWeight: "bold" }}>Ridho Alfandi</h3>
          <p>
            Born in Lubuk Pakam, North Sumatra Province, has an interest in the
            world of Informatics since 2020. Started learning the basics of
            website and mobile development since then. Have hobbies like other
            people in general, such as fishing, playing chess and reading
            documentation and stackoverflow as self-development suggestions.
            Experienced in development for at least 1 year. The more difficult
            the customer's request, the more I can develop myself
          </p>
          <div className="bio d-flex flex-wrap justify-content-between">
            <div className="biodate">
              <h5>Name</h5>
              <p>Ridho Alfandi</p>
            </div>
            <div className="biodate">
              <h5>Date of Birth</h5>
              <p>20 January 2002</p>
            </div>
            <div className="biodate">
              <h5>Gender</h5>
              <p>Man</p>
            </div>
            <div className="biodate">
              <h5>Address</h5>
              <p>Damai Street, Pekanbaru City </p>
            </div>
            <div className="biodate ">
              <h5>Religion</h5>
              <p>Islam</p>
            </div>
          </div>
          <div className="contact d-flex justify-content-start">
            <a
              href="mailto:atom.go.76@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i
                class="bx bxl-gmail bx-flip-horizontal"
                style={{ color: "#ff0000" }}
              ></i>
            </a>
            <a
              href="https://github.com/koplakzs"
              rel="noreferrer"
              target="_blank"
            >
              <i class="bx bxl-github"></i>
            </a>
            <a
              href="https://wa.me/6282169911766"
              rel="noreferrer"
              target="_blank"
            >
              <i class="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ridho-alfandi-9a6741273/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="bx bxl-linkedin" style={{ color: "#00d4ff" }}></i>
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="assets/CV-Ridho-Alfandi.pdf" download={"CV Ridho Alfandi"}>
              <button className="btn btn-primary">Download My CV</button>
            </a>
            <button className="btn btn-success">
              <a
                style={{ textDecoration: "none", color: "#ffffff" }}
                href="#skill"
              >
                My Skill
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deskripsi;
