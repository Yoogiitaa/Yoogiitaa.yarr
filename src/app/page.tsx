import About from "@/components/About/About";
import Blog from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/Timeline/Timeline";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Timeline />
      <Blog />
      <Contact />
    </>
  );
}
