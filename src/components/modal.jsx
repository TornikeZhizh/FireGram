import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handeOnClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handeOnClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="Enlarged Image"
        initial={{ x: "-100vh", y: "-100vh" }}
        animate={{ x: "0", y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
