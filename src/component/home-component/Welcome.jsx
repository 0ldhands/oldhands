import { motion } from "framer-motion";
import idea from "../../assets/idea.jpg";
import '../../index.css';

const Welcome = () => {
  const text =
    `Great things are built together. Let’s turn your ideas into a powerful web solution that drives results`

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,  
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-auto sm:flex h-90 sm:h-auto bg-white m-10 mt-20 rounded-2xl box-border">
      <div className="sm:w-100">
        <img src={idea} alt="Idea" className="rounded-2xl" />
      </div>

      <div className="box-border sm:mt-10">
        <h1
          id="text-color"
          className="sm:text-2xl text-1xl font-bold p-3 pb-0"
        >
          ✨ Welcome! Oldhandz web service
        </h1>

        <motion.div
          className="box-border sm:mt-6 text-sm p-3 flex flex-wrap"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        > 🚀 .
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
