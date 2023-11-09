import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[2px] lg:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/navlogo.png
            "
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[10px] px-[15px] py-[5px] lg:mr-[15px] lg:px-[20px] lg:py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer hover:opacity-[0.8] hover:underline"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:opacity-[0.8] hover:underline"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:opacity-[0.8] hover:underline"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-5 ">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-[0.8]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
