import githubImg from "../assets/Github.png";

const PortfolioCard = ({ data }) => {
  return data.map((item) => (
    <div key={item.id} class="card" style={{ width: "16rem" }}>
      <img src={item.image} class="card-img-top" alt={item.alt} />
      <div class="card-body position-relative p-3">
        <h5 class="card-title"> {item.title} </h5>
        <p class="card-text mb-5">{item.text}</p>
        <a
          href={item.link}
          class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-2"
          target="_blank"
          rel="noreferrer"
        >
          Repository
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
    },
    {
      id: 2,
      image: githubImg,
      alt: "Github Image",
      title: "Meme App",
      text: "Create a logic concept to cosume the API. Designing UI/UX for API consumption purposes",
      link: "https://github.com/koplakzs/Meme-App-Fluter.git",
    },
    {
      id: 3,
      image: githubImg,
      alt: "Github Image",
      title: "Calculator App",
      text: "Create a logic calculator development. Implementation of logic and processes using the flutter framework. Design UI/UX Calculator",
      link: "https://github.com/koplakzs/Simple-Calculator-Flutter.git",
    },
    {
      id: 4,
      image: githubImg,
      alt: "Github Image",
      title: "Suit App",
      text: "Create a logic Suit App development. Made two system modes namely hard mode and easy mode with different winning presentations",
      link: "https://github.com/koplakzs/Suit-Game-Flutter.git",
    },
  ];

  return (
    <div className="portfolio">
      <h3 className="text-center" style={{ fontWeight: "bold" }}>
        My Portfolio
      </h3>
      <div className="my-portfolio d-flex justify-content-center flex-wrap gap-5">
        <PortfolioCard data={portfolio} />
      </div>
    </div>
  );
};

export default Portfolio;
