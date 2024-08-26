import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "react Commerce",
    video: "https://youtu.be/mw_aBeugSPY?si=SJeKFZBEm8_1uv_J",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
  },
  {
    id: 2,
    title: "Node Commerce",
    video: "https://youtu.be/mw_aBeugSPY?si=SJeKFZBEm8_1uv_J",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
  },
  {
    id: 3,
    title: "SwipNbuy",
    video: "https://www.youtube.com/watch?v=mw_aBeugSPY",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
  },
  {
    id: 4,
    title: "Lux swip",
    video: "https://www.youtube.com/watch?v=mw_aBeugSPY",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
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
              width="100%"
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
            <p>{item.desc}</p>
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
      </div>{" "}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
