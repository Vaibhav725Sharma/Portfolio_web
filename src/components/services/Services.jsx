import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./services.scss";
import Modal from "./Modal";

// Function to handle PDF download
const handleDownload = () => {
  const url = "/index.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "What do I know.pdf"; // Specify the desired filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Animation variants for section and images
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

// Information for each technology
const information = {
  Python: {
    title: "Python",
    description:
      "Python is a high-level, interpreted programming language known for its readability and versatility. It is widely used for web development, data analysis, artificial intelligence, and more.",
    link: "https://www.python.org/",
  },
  Docker: {
    title: "Docker",
    description:
      "Docker is an open-source platform that automates the deployment, scaling, and management of applications using containerization technology.",
    link: "https://www.docker.com/",
  },
  AWS: {
    title: "Amazon Web Services (AWS)",
    description:
      "AWS is a comprehensive and widely adopted cloud platform offering over 200 fully featured services from data centers globally.",
    link: "https://aws.amazon.com/",
  },
  Tensorflow: {
    title: "TensorFlow",
    description:
      "TensorFlow is an open-source machine learning framework developed by Google, used for a wide range of machine learning and deep learning tasks.",
    link: "https://www.tensorflow.org/",
  },
  SQL: {
    title: "SQL",
    description:
      "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.",
    link: "https://www.sql.org/",
  },
  PowerBi: {
    title: "Power BI",
    description:
      "Power BI is a business analytics tool by Microsoft that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
    link: "https://powerbi.microsoft.com/",
  },
};

const Services = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (key) => {
    setModalContent(information[key]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
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
          {Object.keys(information).map((key) => (
            <motion.div
              className="box"
              whileHover={{ background: "Lightgray", color: "black" }}
              key={key}
            >
              <h2>{key}</h2>
              <div style={{ width: "100%", height: "100%" }}>
                <motion.img
                  src={`/${key.toLowerCase()}.png`}
                  alt={`${key} Logo`}
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="whileTap"
                  style={{ width: "112px", height: "112px", display: "block" }}
                />
              </div>
              <button onClick={() => openModal(key)}>View Details</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          description={modalContent.description}
          link={modalContent.link}
        />
      )}
    </>
  );
};

export default Services;
