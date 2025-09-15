import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Ourservice = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl text-center font-bold" style={{color:'#386138'}}>Our services</h1>

      <div style={{ textAlign: "center", marginTop: "20px",zIndex:6 }}>
        <motion.div
          animate={{
            y: [0, 15, 0], // bounce up and down
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ fontSize: "2rem", color: "white",backgroundColor:"black",display:'inline-block', padding:'10px',borderRadius:'50%' }}
        >
          <FaChevronDown />
        </motion.div>

        <p style={{ marginTop: "40px", color: "#6b7280" }}>
          Scroll down to see our services
        </p>
      </div>
    </div>
  );
};

export default Ourservice;
