"use client";
import React from "react";
import { motion } from "framer-motion";
import data from "../../data.json";
const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {

  return (
    <section id="skills" className="flex flex-col items-center justify-center h-screen mb-16 md:mb-24 lg:mb-32 text-center">
        <h2 className="text-6xl font-semibold text-gray-800 dark:text-white">Skills</h2>
      <ul className="flex mt-8 hover:cursor-pointer flex-wrap justify-center text-lg gap-2 text-gray-800">
        {data.skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border-2 border-gray-400 rounded-xl px-2 py-2 w-auto md:w-32 lg:w-48"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>  
    </section>
  );
}
