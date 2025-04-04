// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import HomePage from "./pages/home";
// import { About } from "./pages/about";
// import { Project } from "./pages/project";
// import { Skills } from "./pages/skills";

// export default function Home() {

//   return (
//     <div className="relative flex flex-col font-[family-name:var(--font-inter)] min-h-screen overflow-x-hidden">
//       <div className="absolute inset-0 bg-cover bg-center bg-no-repeat backgroundImage z-[-1]">
//         <div className="absolute inset-0 backdrop-blur-xl"></div>
//       </div>
//       <Navbar></Navbar>
//       <div className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start flex-grow z-10 pt-35 ">
//         <HomePage />
//       </div>
//       <div>
//         <About />
//         <Project />
//         <Skills />
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }
"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Skills from "./pages/skills";

import { useEffect, useState } from "react";

export default function Home() {
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowBackground(false);
      } else {
        setShowBackground(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col font-sans min-h-screen overflow-x-hidden">
      {showBackground && (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat backgroundImage z-[-1]">
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>
      )}

      <div className="mb-22"><Navbar /></div>

      <section id="home" className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start flex-grow z-10 pt-18 md:pt-35 justify-center ">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

