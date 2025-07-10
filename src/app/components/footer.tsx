import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ProfileInfo } from '../models/type';
import { supabase } from '@/lib/supabase';

const Footer = () => {


    const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);

    useEffect(() => {
        const fetchProfileInfo = async () => {
            const { data, error } = await supabase
                .from('profile_info')
                .select('email, github, linkedin')
                .single();

            if (error) {
                console.error("Error fetching profile info: ", error.message);
            } else {
                setProfileInfo(data);
            }
        };

        fetchProfileInfo();
    }, []);

    return (
        <footer
            className="row-start-3 text-sm text-[hsl(var(--muted-foreground))]"
            style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--section-footer-from)), hsl(var(--section-footer-to)))` }}
        >
            <div className='border-t border-[hsl(var(--border))] border-2 mt-16'>
                <div className="flex flex-col items-center justify-center gap-4 text-center px-4 py-6">
                    {/* Social Links */}
                    <div className="flex gap-6 text-[hsl(var(--foreground))] text-xl">
                        {profileInfo?.github && (
                            <a href={profileInfo.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        )}

                        {profileInfo?.linkedin && (
                            <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        )}

                        {profileInfo?.email && (
                            <a  href={`mailto:${profileInfo.email}`}>
                                <FaEnvelope />
                            </a>
                        )}

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
