import React from 'react';

import data from '../../data.json'

const Work = () => {
  return (
    <section id='work' className="bg-gray-100 py-20">
  <div className="container mx-auto px-4">
    <h2 className="md:text-6xl text-3xl font-bold text-center mb-10">Work</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {data.projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-64 object-cover" src={project.image} alt={project.title} />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Check it out</a>
            </div>
          </div>
        </div>
      ))}   
    </div>
  </div>
</section>

  );
};

export default Work;
