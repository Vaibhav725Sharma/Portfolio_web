import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "react Commerce",
    img: "https://images.unsplash.com/photo-1711139299064-f60e2753163f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
  },
  {
    id: 2,
    title: "Node Commerce",
    img: "https://images.unsplash.com/photo-1708583625790-732008e8f277?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
  },
  {
    id: 3,
    title: "SwipNbuy",
    img: "https://images.unsplash.com/photo-1708366399616-1961558313f7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem officia quibusdam nisi ut dicta ipsam, illum porro autem quam esse, est ab iure, optio facilis reiciendis temporibus architecto? Fugit.",
  },
  {
    id: 4,
    title: "Lux swip",
    img: "https://images.unsplash.com/photo-1711062714228-a668ce5664f1?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
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
    scaleX: [1, 1],
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
