"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ToggleTheme from "./toggle_theme_button";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const sections = ["home", "about", "projects", "skills", "contact"];

  const dark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      let foundSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
            foundSection = id;
          }
        }
      });

      setActiveSection(foundSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {

  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <nav className="p-4 fixed w-full top-0 inset-x-0 z-50 mx-auto flex bg-opacity-80 backdrop-blur-xs bg-white/5 dark:bg-black/30 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/"><h1 className="text-2xl font-bold font-[family-name:var(--font-playfairdisplay)]">KJY</h1> </Link>

        {/* Desktop View */}
        <ul className={`hidden md:flex space-x-9 items-center gap-1 rounded-full p-2 ${dark ? "border border-white/10 bg-white/5" : "border border-black/10 bg-black/5"} pl-5 pr-5`}>
          {
            sections.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`navlink ${activeSection === id ? "text-blue-400 font-bold" : ""}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))
          }

          {/* <li><Link href="/" className="navlink">Home</Link></li>
          <li><Link href="/about" className="navlink">About</Link></li>
          <li><Link href="/projects" className="navlink">Projects</Link></li>
          <li><Link href="/skills" className="navlink">Skills</Link></li>
          <li><Link href="/contact" className="navlink">Contact</Link></li> */}
        </ul>

        {/* Toggle Theme*/}
        <div className="flex items-center space-x-4">
          <ToggleTheme />
          <button className="md:hidden text-3xl focus:outline-none ml-auto focus:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className={`md:hidden absolute top-16 right-0 w-64 h-auto ${dark ? "border border-white/10 bg-gray-900" : "border border-black/10 bg-neutral-100"} flex flex-col space-y-4 p-5 border border-gray-700 rounded-lg shadow-lg`}>
          {
            sections.map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className={`navlink ${activeSection === id ? "text-blue-500 font-bold" : ""}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))
          }
          {/* <Link href="/" onClick={() => setIsOpen(false)} className="navlink hover:border hover:rounded-full">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="navlink">About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="navlink">Projects</Link>
          <Link href="/skills" onClick={() => setIsOpen(false)} className="navlink">Skills</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="navlink">Contact</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import ToggleTheme from "./toggle_theme_button";
// import { useTheme } from "next-themes";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// const Navbar = () => {
//   const { theme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const [activeSection, setActiveSection] = useState("home");

//   const dark = theme === "dark";

//   // Scroll to a section smoothly
//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(id); // Update active section when clicked
//     }
//     setIsOpen(false); // Close mobile menu after clicking
//   };

//   // Detect scroll position & update activeSection
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "projects", "skills", "contact"];
//       let foundSection = "home";

//       sections.forEach((id) => {
//         const section = document.getElementById(id);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
//             foundSection = id;
//           }
//         }
//       });

//       setActiveSection(foundSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="p-4 fixed w-full top-0 shadow-lg inset-x-0 z-50 mx-auto flex bg-opacity-80 backdrop-blur-md">
//       <div className="container mx-auto flex justify-between items-center">
//       <Link href="/"><h1 className="text-2xl font-bold font-[family-name:var(--font-playfairdisplay)]">KJY</h1> </Link>

//         {/* Desktop Menu */}
//         <ul className={`hidden md:flex space-x-9 items-center gap-1 rounded-full p-2 ${dark ? "border border-white/10 bg-white/5" : "border border-black/10 bg-black/5"} pl-5 pr-5`}>
//           {["home", "about", "projects", "skills", "contact"].map((id) => (
//             <li key={id}>
//               <button
//                 onClick={() => scrollToSection(id)}
//                 className={`navlink ${activeSection === id ? "text-blue-500 font-bold" : ""}`}
//               >
//                 {id.charAt(0).toUpperCase() + id.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Toggle Theme & Mobile Menu Button */}
//         <div className="flex items-center space-x-4">
//           <ToggleTheme />
//           <button className="md:hidden text-3xl focus:outline-none ml-auto focus:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={25} /> : <Menu size={25} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div ref={menuRef} className={`md:hidden absolute top-16 right-0 w-64 h-auto ${dark ? "border border-white/10 bg-gray-900" : "border border-black/10 bg-neutral-100"} flex flex-col space-y-4 p-5 border border-gray-700 rounded-lg shadow-lg`}>
//           {["home", "about", "projects", "skills", "contact"].map((id) => (
//             <button key={id} onClick={() => scrollToSection(id)} className={`navlink ${activeSection === id ? "text-blue-500 font-bold" : ""}`}>
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
