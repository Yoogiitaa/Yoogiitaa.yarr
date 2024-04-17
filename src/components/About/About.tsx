import Image from "next/image";
import data from "../../data.json";
const AboutSection = () => {
  return (
    <section id="about" className="bg-white h-screen flex justify-center items-center md:px-40 px-4 my-12 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative overflow-hidden w-96 h-full">
              <Image
                src={data.aboutImg}
                alt="Profile Picture"
                width={1080}
                height={1080}
              /> 
            </div>
          </div> 
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-buenos-aires font-bold text-center md:text-center mb-6">
              About Me
            </h2>
            {data.about.map((line, index) => (
              <p key={index} className="text-lg text-center text-gray-700">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
