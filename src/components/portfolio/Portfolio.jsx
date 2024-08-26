import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tourist Package Pridection",
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
        <p>
          <h4>Github repo</h4>
          <a
            href="https://lnkd.in/gAxDhVgk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>https://lnkd.in/gAxDhVgk</p>
          </a>
        </p>
      </>
    ),
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
  },
  {
    id: 4,
    title: "Lux swip",
    video: "https://www.youtube.com/embed/F8orzRREY9k",
    desc: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem
        officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est
        ab iure, optio facilis reiciendis temporibus architecto? Fugit.
      </p>
    ),
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
            <button>See Demo</button>
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
