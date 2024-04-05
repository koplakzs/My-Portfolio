import githubImg from "../assets/Github.png";

const PortfolioCard = ({ data }) => {
  return data.map((item) => (
    <div key={item.id} class="card">
      <img src={item.image} class="card-img-top" alt={item.alt} />
      <div class="card-body position-relative p-3">
        <h5 class="card-title fw-bold"> {item.title} </h5>
        <p class="card-text mb-5">{item.text}</p>
        <a
          href={item.link}
          class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-2"
          target="_blank"
          rel="noreferrer"
        >
          {item.type}
        </a>
      </div>
    </div>
  ));
};

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      image: githubImg,
      alt: "Github Image",
      title: "EduFund",
      text: "Implement a comfortable ui design for visitors present. Processing scholarship data obtained from the backend through API and displaying the data. Zustand implementation to create state management",
      link: "-",
      type: "Repository",
    },
    {
      id: 2,
      image: githubImg,
      alt: "Github Image",
      title: "Simple Finance Management App",
      text: "Design the flow chart of the financial management application. Implement state management Get X for global state. Integration of SQFLite as a local database to handle incoming and outgoing financial data",
      link: "-",
      type: "Repository",
    },
    {
      id: 3,
      image: githubImg,
      alt: "Github Image",
      title: "Mechanical Comp",
      text: "Design the flow for the sale of goods in mechanical comp. Performs the sales process by forwarding the sales request to the store's WhatsApp.",
      link: "https://mechacomp.my.id",
      type: "Project Website",
    },
    {
      id: 4,
      image: githubImg,
      alt: "Github Image",
      title: "Dipterocarpaceae",
      text: "Create a simple and easy interface. Perform library integration in converting words into qrcodes",
      link: "https://dipterocarpaceae.my.id/",
      type: "Project Website",
    },
    {
      id: 5,
      image: githubImg,
      alt: "Github Image",
      title: "List Movie",
      text: "Create a simple consume api to take movie data and display it in an attractive ui/ux design",
      link: "https://github.com/koplakzs/Lemper-Movie-React.git",
      type: "Repository",
    },
  ];

  return (
    <div className="portfolio d-flex align-items-center justify-content-center">
      <div className="my-portfolio">
        <h3 className="text-center fw-bold mb-5" style={{ color: "#686868" }}>
          My Portfolio
        </h3>
        <div className="cards  d-flex justify-content-center flex-wrap">
          <PortfolioCard data={portfolio} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
