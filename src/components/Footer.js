const Footer = () => {
  return (
    <div class="footer container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <span class="mb-3 mb-md-0 text-muted">
            Ridho Alfandi &copy; 2023 My Portfolio
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-4">
            <a
              href="https://wa.me/6282169911766"
              rel="noreferrer"
              target="_blank"
            >
              <i class="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li class="ms-4">
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
          </li>
          <li class="ms-4">
            <a
              href="https://www.linkedin.com/in/ridho-alfandi-9a6741273/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="bx bxl-linkedin" style={{ color: "#00d4ff" }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
