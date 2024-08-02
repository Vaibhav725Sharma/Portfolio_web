import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      {/*Sidebar*/}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio Website
        </motion.span>
        <div className="social">
          <a href="https://youtube.com/@vaibhavsharma7159?si=hABPR8-Be2YJfT8c">
            <img src="public\youtube.png" alt="youtube" />
          </a>

          <a href="https://www.linkedin.com/in/vsharma4038">
            <img src="public\linkedin.png" alt="Linkedin" />
          </a>

          <a href="https://github.com/Vaibhav725Sharma">
            <img src="public\GitHub.png" alt="GitHub" />
          </a>
          <a href="https://www.kaggle.com/vaibhav7252">
            <img src="public\kaggle.png" alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
