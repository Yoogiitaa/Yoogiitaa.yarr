"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "../../data.json";

const Hero = () => {
  return (
    <>
      <motion.div
        className="bg-hero h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-9xl  font-bold text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {data.title}
        </motion.h1>
        <motion.span
          className=" text-center font-thiin md:text-2xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {data.subtitle.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </motion.span>
        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a
            href={data.behance}
            className="hover:shadow-lg rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/icons/behance.svg"
              className="h-16 w-16 p-4 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </motion.a>
          <motion.a
            href={data.linkedin}
            className="hover:shadow-lg rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/icons/linkedin.svg"
              className="h-16 w-16 p-4 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </motion.a>
          <motion.a
            href={data.behance}
            className="hover:shadow-lg rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/icons/twitter.svg"
              className="h-16 w-16 p-2 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </motion.a>
          <motion.a
            href={data.medium}
            className="hover:shadow-lg rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/icons/medium.svg"
              className="h-16 w-16 p-4 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </motion.a>
          {/* Repeat similar motion.a tags for other social icons */}
        </motion.div>
        <motion.figure
          className="max-w-screen-md mt-8 mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <p className="text-2xl italic font-medium text-gray-900">
              &#x201C;You don&#39;t go away from the Lighthouse, you go towards
              it.&#x201D;
            </p>
          </motion.blockquote>
          <motion.figcaption
            className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <motion.img
              width={1080}
              height={1080}
              className="w-6 h-6 rounded-full"
              src="/shantanu.png"
              alt="profile picture"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 ">
              <motion.cite
                className="pe-3 font-medium text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
              >
                Shantanu Naidu
              </motion.cite>
            </div>
          </motion.figcaption>
        </motion.figure>
      </motion.div>
    </>
  );
};

export default Hero;