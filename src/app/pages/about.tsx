"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume [KOK JIA YIN].pdf";
    link.download = "Kok Jia Yin_Resume.pdf";
    link.click();
  };
  
  return (
    <div id="about" className="px-6 py-6 md:px-12 lg:px-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text my-3">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--secondary-foreground))] my-3">
          A passionate software engineering student, always eager to learn and innovate.
        </p>
        <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 my-4 rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">
            Who Am I?
          </h2>
          <p className="text-md md:text-lg text-[hsl(var(--secondary-foreground))] md:text-justify leading-relaxed">
            I am <span className="font-semibold text-purple-400">Jia Yin</span>, a dedicated software engineering student passionate about
            building applications. From solving complex problems to creating innovative solutions, I thrive in the world of coding.
          </p>
          <p className="mt-4 text-md md:text-lg text-[hsl(var(--secondary-foreground))] md:text-justify leading-relaxed">
            Believe in continuous learning, collaboration, and leveraging technology to make an impact. My journey in software development is fueled
            by curiosity and a drive to push boundaries.
          </p>

          <Button className='mt-10 cursor-pointer border-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--secondary-foreground))] 
                              px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ease-in-out 
                              hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] hover:shadow-lg 
                              focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-1 
                              active:scale-95 h-12' onClick={handleDownloadResume}>Download Resume Here! </Button>
        </div>

        <motion.div
          initial={{ y: 10 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative rounded-full p-2 bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg">
            <Image
              src="/profilePic.jpg"
              alt="Kok Jia Yin"
              width={300}
              height={300}
              className="rounded-full border-4 border-gray-300 dark:border-gray-700"
            />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
