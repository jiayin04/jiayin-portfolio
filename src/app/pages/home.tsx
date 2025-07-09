"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';
import { Typewriter } from "react-simple-typewriter";
import ContactForm from '../components/contact_form';

const HomePage = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const handleSubmitContactForm = (success: boolean) => {
        if (success) setOpenDialog(false);
    }

    return (
        <div className="w-full flex flex-col items-center min-h-[80vh]">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 pt-10 px-4">
                <div className="flex flex-col text-center md:text-left max-w-x2 animate-fadeIn mr-8">
                    <div className="mb-5">
                        <p className="leading-relaxed">
                            <span className="font-bold text-5xl md:text-6xl md:ml-0 font-[family-name:var(--font-playfairdisplay)] mt-4">
                                Work Hard, Dream Big <br /><br />
                            </span>
                            <span className="text-3xl md:text-4xl">
                                Hi! I am{" "}
                                <span className="text-gray-400 font-semibold">
                                    <Typewriter
                                        words={["Kok Jia Yin", "a Developer", "a Problem Solver", "an Innovator"]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={30}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </span>
                        </p>
                    </div>

                </div>

                {/* Graphic */}

                <div className="relative animate-fadeIn">
                    <Image
                        src="/3D_Graphic_Coding.png"
                        alt="Profile Picture of Kok Jia Yin"
                        width={400}
                        height={500}
                        className="md:rotate-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>


            </div>
            <div>
                <Button className='mt-15 cursor-pointer border-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--secondary-foreground))] 
                    px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ease-in-out 
                    hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] hover:shadow-lg 
                    focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-1 
                    active:scale-95 h-12' onClick={() => setOpenDialog(true)}>Let's connect! </Button>
            </div>

            {openDialog && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:delay-200 data-[state=closed]:delay-200"
                    onClick={() => setOpenDialog(false)}
                >

                    <div
                        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] p-5 rounded-t-3xl shadow-lg bg-[hsl(var(--card-bg))] animate-slide-up transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="flex justify-end cursor-pointer">
                            <button onClick={() => setOpenDialog(false)}>
                                <X size={24} className="text-inherit dark:text-white cursor-pointer" />
                            </button>
                        </div>

                        {/* Social links */}
                        <div className="flex flex-row gap-8 p-3 justify-center">
                            <Link href="https://github.com/jiayin04" target="_blank">
                                <Image src="https://skillicons.dev/icons?i=github" width={50} height={50} alt="GitHub" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jia-yin-kok-9767b528a/" target="_blank">
                                <Image src="https://skillicons.dev/icons?i=linkedin" width={50} height={50} alt="LinkedIn" />
                            </Link>
                            {/* <Link href="https://discordapp.com/users/1006886530612203640" target="_blank">
                                <Image src="https://skillicons.dev/icons?i=discord" width={50} height={50} alt="Discord" />
                            </Link> */}
                            <Link href={"mailto:jiayinkok@gmail.com"}>
                                <Image src={"https://skillicons.dev/icons?i=gmail"} width={50} height={50} alt="Gmail" />
                            </Link>
                        </div>

                        <div>
                            <ContactForm onSubmitFormStatus= {handleSubmitContactForm}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
