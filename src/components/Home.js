import pic1 from "../assets/pict2.jpg";

const Home = () => {
  return (
    <div className="home container">
      <div className="row justify-content-center">
        <div className=" col-sm-5 text-center">
          <img src={pic1} alt="Ridho Alfandi" style={{ borderRadius: "50%" }} />
        </div>
        <div className="col-sm-7 text-center align-self-center">
          <h3 style={{ fontWeight: "bold" }}>Hi, Saya Ridho Alfandi</h3>
          <div className="d-flex justify-content-center">
            <h5>
              Mahasiswa |
              <span style={{ fontWeight: "bold", color: "#0ae100 " }}>
                | Junior Web Developer
              </span>
            </h5>
          </div>
          <p>
            Saya telah mempelajari dan mengimplementasikan basic pemograman web
            developer dalam kurun waktu 1 tahun. Disamping itu saya juga
            merupakan salah satu mahasiswa Teknik Informatika di salah satu
            Universitas di Riau.
          </p>
          <button className="btn btn-success">
            <a
              href="#deskripsiApp"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Deskripsi
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
