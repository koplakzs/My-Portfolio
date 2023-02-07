const Service = () => {
  return (
    <div className="service">
      <h3
        className="text-center"
        style={{ fontWeight: "bold", color: "#ffffff" }}
      >
        My Service
      </h3>
      <div className="cards d-flex flex-wrap gap-5">
        <div className="card">
          <i class="bx bx-devices" undefined></i>
          <div className="card-body">
            <h5 className="card-tittle">Front-End Dev</h5>
            <p>Membangun UI/UX sebuah Website</p>
          </div>
        </div>
        <div className="card">
          <i class="bx bx-desktop"></i>
          <div className="card-body">
            <h5 className="card-tittle">Landing Page</h5>
            <p>Membangun Simple Landing Page untuk Bisnis dan UMKM</p>
          </div>
        </div>
        <div className="card">
          <i class="bx bx-coin-stack"></i>
          <div className="card-body">
            <h5 className="card-tittle">Back-End Dev</h5>
            <p>Membangun Database untuk website yang dinamis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
