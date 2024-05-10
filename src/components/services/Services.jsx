import "./services.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What I did?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {[...Array(4)].map((_, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{ background: "Lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              vel fuga velit, dolorum qui voluptates asperiores porro,
              necessitatibus ad, est possimus sapiente repellat veniam magni
              soluta temporibus ipsa quod a!
            </p>
            <button>Go!</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
