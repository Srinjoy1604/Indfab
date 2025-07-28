import React from 'react';
import { motion } from "framer-motion";

const TitleHeading = ({ title , Textcolor="black" }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12 } }
  };

  return (
    <motion.div
  className={`border-l-4 border-red-600 pl-[10px] m-[1%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-wrap leading-tight font-Oxanium font-bold`}
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
>
  {title.split(" ").map((word, wordIndex) => (
    <motion.span key={wordIndex} className="mr-2" variants={letter} style={{ color: Textcolor }}>
      {word}
    </motion.span>
  ))}
</motion.div>
  );
};

export default TitleHeading;

