import pic2 from "../assets/pict1.jpg";

const Deskripsi = () => {
  return (
    <div className="deskripsi container">
      <div className="row justify-content-center">
        <div className="col-sm-4 text-center">
          <img
            src={pic2}
            alt="Ridho Alfandi"
            style={{ borderRadius: "50px" }}
          />
        </div>
        <div className="col-sm-8 myDeskripsi">
          <h3 style={{ fontWeight: "bold" }}>Ridho Alfandi</h3>
          <p>
            Lahir di Lubuk Pakam Provinsi Sumatra Utara. Memiliki hobi bermain
            catur dan memancing. Tertarik di bidang{" "}
            <span style={{ color: "#0ae100" }}>Web Developer</span> sejak 2020
            di masa Covid-19 yang melanda saat itu.
          </p>
          <div className="bio d-flex flex-wrap">
            <div className="biodate">
              <h5>Nama</h5>
              <p>Ridho Alfandi</p>
            </div>
            <div className="biodate">
              <h5>Umur</h5>
              <p>21 Tahun</p>
            </div>
            <div className="biodate">
              <h5>Status</h5>
              <p>Mahasiswa</p>
            </div>
            <div className="biodate ">
              <h5>Email</h5>
              <p>atom.go.76@gmail.com</p>
            </div>
            <div className="biodate">
              <h5>WhatsApp</h5>
              <p>082169911766</p>
            </div>
          </div>
          <button className="btn btn-success" style={{ margin: "auto" }}>
            <a
              style={{ textDecoration: "none", color: "#ffffff" }}
              href="#skillApp"
            >
              My Skill
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Deskripsi;
