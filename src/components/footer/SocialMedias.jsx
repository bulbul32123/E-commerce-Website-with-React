import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";

export default function SocialMedias() {
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"> Social Medias </h2>
                <nav className="list-none mb-10">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61550563621219" target='_blank' className='flex gap-1 md:justify-normal justify-center items-center hover:text-white'> <FaFacebook size={30} className='hover:text-[#1877f2]  mb-2' /> Facebook</a>

                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/md-bulbul-islam-8b005b275/" className='flex gap-1 md:justify-normal justify-center  items-center hover:text-white' target='_blank'><FaLinkedin size={30} className='hover:text-[#0e76a8] mb-2' /> Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/bulbul32123" className='flex gap-1 md:justify-normal justify-center  items-center hover:text-white' target='_blank'><FaGithub size={30} className='hover:text-[#211F1F] mb-2' /> GitHub</a>
                    </li>
                    <li>
                        <a href="" className='flex gap-1 items-center md:justify-normal justify-center  hover:text-white' target='_blank'> <TbBrandFiverr size={30} className='hover:text-[#0de60daa]' /> Fiverr</a>
                    </li>
                </nav>
            </div>
        </>
    )
}
