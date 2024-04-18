import Image from "next/image";
import data from "../../data.json";

const Hero = () => {
  return (
    <>
      <div className="bg-hero h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-9xl font-buenos-aires font-bold text-center">
          {data.title}
        </h1>
        <span className="font-buenos-aires text-center font-thiin md:text-2xl mt-4">
          {data.subtitle.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
        </span>
        <div className="mt-6 flex gap-6">
          <a href={data.behance} className="hover:shadow-lg rounded-full">
            <Image
              src="/icons/behance.svg"
              className="h-16 w-16 p-4 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </a>
          <a href={data.linkedin} className="hover:shadow-lg rounded-full">
            <Image
              src="/icons/linkedin.svg"
              className="h-16 w-16 rounded-full p-3 border-2 shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </a>
          <a href={data.twitter} className="hover:shadow-lg rounded-full">
            <Image
              src="/icons/twitter.svg"
              className="h-16 w-16 p-0 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </a>
          <a href={data.dribble} className="hover:shadow-lg rounded-full">
            <Image
              src="/icons/medium.svg"
              className="h-16 w-16 p-3 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </a>
        </div>
        
<figure className="max-w-screen-md mt-8 mx-auto text-center">
    <blockquote>
        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">&#x201C;You don't go away from the Lighthouse, you go towards it.&#x201D;</p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img width={1080} height={1080} className="w-6 h-6 rounded-full" src="/shantanu.png" alt="profile picture" />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">Shantanu Naidu </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">General Manager</cite>
        </div>  
    </figcaption> 
</figure>

      </div>
    </>
  );
};

export default Hero;
