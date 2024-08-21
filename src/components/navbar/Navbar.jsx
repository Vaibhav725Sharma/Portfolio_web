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
          Made by Vaibhav
        </motion.span>
        <div className="navigation">
          <a href="https://portfolio-54xx.onrender.com/">Home</a>
          <a href="#Resume">Resume</a>
          <a href="#About">About</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
