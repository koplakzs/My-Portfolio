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
      title: "Temperature Conversion App",
      text: "Create a logic concept for temperature conversion. Create a conversion and implementation process with the flutter framework",
      link: "https://github.com/koplakzs/conversi_temperature-flutter.git",
      type: "Repository",
    },
    {
      id: 2,
      image: githubImg,
      alt: "Github Image",
      title: "Meme App",
      text: "Create a logic concept to cosume the API. Designing UI/UX for API consumption purposes",
      link: "https://github.com/koplakzs/Meme-App-Fluter.git",
      type: "Repository",
    },
    {
      id: 3,
      image: githubImg,
      alt: "Github Image",
      title: "Calculator App",
      text: "Create a logic calculator development. Implementation of logic and processes using the flutter framework. Design UI/UX Calculator",
      link: "https://github.com/koplakzs/Simple-Calculator-Flutter.git",
      type: "Repository",
    },
    {
      id: 4,
      image: githubImg,
      alt: "Github Image",
      title: "Suit App",
      text: "Create a logic Suit App development. Made two system modes namely hard mode and easy mode with different winning presentations",
      link: "https://github.com/koplakzs/Suit-Game-Flutter.git",
      type: "Repository",
    },
    {
      id: 4,
      image: githubImg,
      alt: "Github Image",
      title: "Weather Website",
      text: "Create a UI/UX for weather search in an area. Create logic to consume the weather API and make it work to search for weather.",
      link: "https://wheater-app-puce-tau.vercel.app",
      type: "Demo",
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
