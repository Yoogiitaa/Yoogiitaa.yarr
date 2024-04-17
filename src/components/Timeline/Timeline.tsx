'use client'
import { useEffect, useState } from 'react';
import data from '../../data.json'; // Import data.json file

const Timeline = () => {
  const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // setEvents(data.events); // Set events from imported data
//   }, []);

  return (
    <div className="bg-hero py-20 p-4">
    <h2 className="text-3xl md:text-6xl text-center text-gray-900 font-bold mb-12">Work Experience</h2>
    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
            <div
                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">Graduate Trainee Engineer</h3>
                <p className="text-xs leading-6">Vodafone idea</p>
                <p className=''>Learnt about telecom tools and technologies</p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-purple-300 rounded-t-full bg-gradient-to-b from-purple-400 to-purple-300">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
            </div>
            
        </div>

        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-purple-300"></div>
                </div>  
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">Intern and Organiser</h3>
                <p className="text-xs leading-6">AICTE Labs</p>
                <p className="mt-2 leading-6">Description of the second event.</p>
                <span className="absolute text-sm text-purple-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
            </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
            <div
                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">New Event 3</h3>
                <p className="mt-2 leading-6">Description of the first event.</p>
                <span className="absolute text-sm text-purple-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-purple-300 rounded-t-full bg-gradient-to-b from-purple-400 to-purple-300">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-purple-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
                <p className="mt-2 leading-6">Description of the second event.</p>
                <span className="absolute text-sm text-purple-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
            </div>
        </div>

    </div>
</div>
  );
};

export default Timeline;
