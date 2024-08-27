import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tourist Package Prediction",
    video: "https://www.youtube.com/embed/mw_aBeugSPY",
    desc: (
      <>
        <p>
          My new web application designed for tours and travel companies to
          analyze and predict customer behavior regarding travel package
          purchases. This project is crafted to help companies understand their
          reach and refine their strategies based on customer decisions.
        </p>
        <br />
      </>
    ),
    repo: "https://github.com/Vaibhav725Sharma/Travel-Package-Purchase-project-", // GitHub repo link for this project
  },
  {
    id: 2,
    title: "Node Commerce",
    video: "https://www.youtube.com/embed/mw_aBeugSPY",
    desc: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem
        officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est
        ab iure, optio facilis reiciendis temporibus architecto? Fugit.
      </p>
    ),
    repo: "https://github.com/Vaibhav725Sharma/Travel-Package-Purchase-project-", // GitHub repo link
  },
  {
    id: 3,
    title: "SwipNbuy",
    video: "https://www.youtube.com/embed/F8orzRREY9k",
    desc: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem
        officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est
        ab iure, optio facilis reiciendis temporibus architecto? Fugit.
      </p>
    ),
    repo: "https://github.com/Vaibhav725Sharma/SwipNbuy", // GitHub repo link
  },
  {
    id: 4,
    title: "Power BI Dashboard",
    video: "https://www.youtube.com/embed/F8orzRREY9k",
    desc: (
      <p>
        I created a multipage Power BI dashboard for in-depth T20 World Cup
        analysis, showcasing my skills in data modeling, cleaning, and
        formatting across multiple tables. The dashboard features interactive
        visualizations that highlight top teams and players, with detailed
        insights into batting and bowling performances. This project provides a
        powerful tool for cricket enthusiasts and analysts to make informed
        decisions by exploring the finer details of T20 cricket.
      </p>
    ),
    repo: "https://github.com/Vaibhav725Sharma/POWER-BI-PROJECT/tree/main", // GitHub repo link
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: true,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="videoContainer" ref={ref}>
            <iframe
              width="70%"
              height="315"
              src={item.video}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <div>{item.desc}</div>
            <button>
              <a
                href={item.repo} // Dynamic repo link
                target="_blank"
                rel="noopener noreferrer"
              >
                Github repo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    layoutEffect: true,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
  });

  // Calculate the height of the portfolio section based on the number of items
  const portfolioHeight = items.length > 0 ? items.length * 700 : "100vh";

  return (
    <div className="portfolio" ref={ref} style={{ height: portfolioHeight }}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
