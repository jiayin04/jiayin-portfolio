import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className="row-start-3 text-sm text-[hsl(var(--muted-foreground))]"
            style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--section-footer-from)), hsl(var(--section-footer-to)))` }}
        >
            <div className='border-t border-[hsl(var(--border))] border-2 mt-16'>
                <div className="flex flex-col items-center justify-center gap-4 text-center px-4 py-6">
                    {/* Social Links */}
                    <div className="flex gap-6 text-[hsl(var(--foreground))] text-xl">
                        <a href="https://github.com/jiayin04" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/jia-yin-kok-9767b528a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:jiayinkok@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* Credits */}
                    <p>Copyright &copy; {new Date().getFullYear()} Kok Jia Yin. All rights reserved.</p>
                    <p>Built with 💙</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
