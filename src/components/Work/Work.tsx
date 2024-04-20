'use client'
import { motion } from 'framer-motion';

import Image from 'next/image';
import data from '../../data.json';

const Work = () => {
  return (
    <motion.section
      id='work'
      className="bg-gray-100 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-center mb-10">Work</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {data.projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image height={1080} width={1080} className="w-full h-64 object-cover" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Check it out</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
