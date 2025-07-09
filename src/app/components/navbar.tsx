
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ToggleTheme from "./toggle_theme_button";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, systemTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "projects", "skills", "experience"];

  useEffect(() => {
    setMounted(true);
  }, []);

   const dark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
  // const dark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let foundSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            foundSection = id;
          }
        }
      });

      setActiveSection(foundSection);
    };

    const throttle = (func: Function, limit: number) => {
      let lastFunc: number;
      let lastRan: number;
      return function (this: any) {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = window.setTimeout(function () {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      }
    };

    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="p-4 fixed w-full top-0 inset-x-0 z-50 mx-auto flex bg-opacity-80 backdrop-blur-xs bg-white/5 dark:bg-black/30 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-playfairdisplay)]">KJY</h1>
        </Link>

        {/* Desktop View */}
        {mounted && (
          <ul
            className={`hidden md:flex space-x-9 items-center gap-1 rounded-full p-2 border border-solid pl-5 pr-5 ${dark ? "border-white/10 bg-white/5" : "border-black/10"}`}
          >
            {sections.map((id) => (
              <li key={id} className="relative">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium
                  ${activeSection === id
                      ? dark
                        ? "text-blue-400 border-white/10 bg-white/10"
                        : "text-blue-500 border-blue-500 bg-blue-100"
                      : dark
                        ? "text-gray-300 border-transparent hover:border-white/10 hover:bg-white/5"
                        : "text-gray-700 border-transparent hover:border-blue-300 hover:bg-blue-50"
                    }
        `       }
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        )}
        
        {/* Toggle Theme*/}
        <div className="flex items-center space-x-4">
          <ToggleTheme />
          <button
            className="md:hidden text-3xl focus:outline-none ml-auto focus:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className={`md:hidden fixed top-16 right-4 w-64 h-auto flex flex-col space-y-4 p-5 rounded-lg shadow-lg z-50
      ${dark ? "border border-white/10 bg-gray-900" : "border border-black/10 bg-neutral-100"}
    `}
        >
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 rounded-full border text-sm font-medium text-left transition-all duration-200
          ${activeSection === id
                  ? dark
                    ? "text-blue-400 border-white/10 bg-white/10"
                    : "text-blue-500 border-blue-500 bg-blue-100"
                  : dark
                    ? "text-gray-300 border-transparent hover:border-white/10 hover:bg-white/5"
                    : "text-gray-700 border-transparent hover:border-blue-300 hover:bg-blue-50"
                }
        `}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;