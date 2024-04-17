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
        {/* <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-pink-400 rounded-md text-xl">Download CV</button>
        </div> */}
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
              src="/icons/dribble.svg"
              className="h-16 w-16 p-3 border-2 rounded-full shadow-md"
              alt="hero"
              width={500}
              height={500}
            />
          </a>
        </div>
        <p>You dont go away from the light huose you go towards it</p>
      </div>
    </>
  );
};

export default Hero;
