"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="max-h-[350px] relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain "
          style={{
            filter: hovered ? "grayscale(0)" : "grayscale(70%)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "filter 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
        <div className="relative p-4">
          <h1 className="text-xl font-semibold text-white lg:text-2xl">
            {title}
          </h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
