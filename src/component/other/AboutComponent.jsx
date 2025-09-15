import React from "react";
import { motion } from "framer-motion";
import Doodhi from "./Doodhi.jsx";
import '../../index.css'


const AboutComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-10 px-6 py-16"  >
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Oldhandz
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          “We build digital solutions that inspire, educate, and grow your
          business. ✨”
        </p>

        <motion.p
          className="text-base text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are a professional Web Development Team delivering high-quality
          websites, web applications, e-commerce solutions, and student project
          support. Whether you’re a business, entrepreneur, or student, we
          transform ideas into fully functional digital experiences.
        </motion.p>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
         
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mb-4">
            We are a collaborative team of web developers and specializing in
            both professional and academic projects. We combine modern
            technology, clean code, and creative design to deliver scalable,
            secure, and user-friendly solutions.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Approach:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Understanding your goals and requirements 🎯",
              "Building responsive, high-performance websites 🌐",
              "Delivering projects on time with reliable support ⏱️",
              "Offering guidance and solutions for student projects 🎓",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                style={{listStyle:"none"}}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutComponent;
