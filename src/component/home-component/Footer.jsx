import { FaGithub } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gmailId = 'oldhands00@gmail.com';

  return (
    <footer className="w-full  h-15 flex justify-center items-center relative" style={{backgroundColor:'#6fa16f'}}>
      <div>
        <p className="font-medium text-gray-800 text-sm sm:text-sm pt-2.5">
          © 2025 Oldhandz. All rights reserved
        </p>
        <div className="flex justify-center box-border mt-2 pb-2">
          <ul className="flex items-center">
            <li className="inline-block mr-10">
              <a href="https://github.com/0ldhands" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </li>
            <li className="inline-block mr-10">
              <a href="https://www.instagram.com/old_.hands?igsh=NWtqdHFnYTR5aWRl" target="_blank" rel="noopener noreferrer"className="text-pink-500">
                <RiInstagramLine size={24} />
              </a>
            </li>
            <li 
              className="inline-block relative cursor-pointer text-4xl text-red-600 mr-10"
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              <BiLogoGmail size={24} />
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap"
                  >
                    {gmailId}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li className="inline-block mr-10 text-blue-800">
              <IoLogoLinkedin size={24} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
