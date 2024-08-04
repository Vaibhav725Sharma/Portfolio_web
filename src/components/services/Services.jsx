import "./services.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const handleDownload = () => {
  const url = "/index.pdf"; // Assuming the file is in the public directory
  const link = document.createElement("a");
  link.href = url;
  link.download = "What do I know.pdf"; // Specify the desired filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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

const imageVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    opacity: 0.7,
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
  whileTap: {
    scale: 0.95,
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
          Data Scientist <br />
          Turning data into insights.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Bringing</motion.b>{" "}
            Clarity
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>to Complex</motion.b>{" "}
            Data.
          </h1>
          <motion.button
            whileHover={{
              backgroundColor: "black",
              color: "white",
              fontSize: "26px",
            }}
            onClick={handleDownload}
          >
            What do I know?
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Python</h2>
          <div style={{ width: "100%", height: "100%" }}>
            <motion.img
              src="/python.png"
              alt="Python Logo"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              whileTap="whileTap"
              style={{ width: "112px", height: "112px", display: "block" }}
            />
          </div>
          <button>Go!</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Docker</h2>
          <div style={{ width: "100%", height: "100%" }}>
            <motion.img
              src="/Docker.png"
              alt="Docker Logo"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              whileTap="whileTap"
              style={{ width: "112px", height: "112px", display: "block" }}
            />
          </div>
          <button>Go!</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>AWS</h2>
          <div style={{ width: "100%", height: "100%" }}>
            <motion.img
              src="/aws.png"
              alt="AWS Logo"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              whileTap="whileTap"
              style={{ width: "112px", height: "112px", display: "block" }}
            />
          </div>
          <button>Go!</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Tensorflow</h2>
          <div style={{ width: "100%", height: "100%" }}>
            <motion.img
              src="/tensorflow.png"
              alt="Tensorflow Logo"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              whileTap="whileTap"
              style={{ width: "112px", height: "112px", display: "block" }}
            />
          </div>
          <button>Go!</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>SQL</h2>
          <div style={{ width: "100%", height: "100%" }}>
            <motion.img
              src="/sql.png"
              alt="SQL Logo"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              whileTap="whileTap"
              style={{ width: "112px", height: "112px", display: "block" }}
            />
          </div>
          <button>Go!</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Power Bi</h2>
          <div style={{ width: "100%", height: "100%" }}>
            <motion.img
              src="/PowerBi.png"
              alt="Power Bi"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              whileTap="whileTap"
              style={{ width: "112px", height: "112px", display: "block" }}
            />
          </div>
          <button>Go!</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
