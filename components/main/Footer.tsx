import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <span className="text-[15px] lg:text-[25px] mb-5">Contacts</span>

        <Link
          target="_blank"
          href="https://github.com/Arogyadh"
          className="text-[12px] lg:text-[15px] hover:underline m-1 hover:opacity-[0.5] flex items-center"
        >
          <RxGithubLogo />
          <span className="ml-1">Github</span>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/arogya-dhaubhadel-6a2788252/"
          className="text-[12px] lg:text-[15px] hover:underline m-1 hover:opacity-[0.5] flex items-center"
        >
          <RxLinkedinLogo />
          <span className="ml-1">LinkedIn</span>
        </Link>
        <Link
          target="_blank"
          href="mailto:arogyadhdl@gmail.com"
          className="text-[12px] lg:text-[15px] hover:underline m-1 hover:opacity-[0.5] flex items-center"
        >
          <FaGoogle />
          <span className="ml-1">Google</span>
        </Link>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Arogya. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
