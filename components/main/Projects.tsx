import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
      <h1 className="z-30 text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProjectCard
            src="/movie.png"
            title="Movie Ticketing App"
            href="https://tickticketing.netlify.app/"
            description="Next.js 14 / Tailwind "
          />
          <ProjectCard
            src="/NTB.png"
            title="NTB Website redesign"
            href="https://main--ntbnepal.netlify.app/"
            description="Next.js 14 / Tailwind"
          />
          <ProjectCard
            src="/geritch.png"
            title="Restaurant Landing Page"
            href="https://geritch-arogya.netlify.app/"
            description="React.js / GSAP"
          />
          <ProjectCard
            src="/travel.png"
            title="Travel Landing Page"
            href="https://kaleidoscopic-speculoos-59cd9b.netlify.app/"
            description="React.js / Next.js 13 / Tailwind"
          />

          <ProjectCard
            src="/snoofy.png"
            title="Snoofy Web for my doggo"
            href="https://arogyadh.github.io/Website/"
            description="HTML / CSS / JS / Bootstrap"
          />
          <ProjectCard
            src="/youtubeclone.png"
            title="Youtube Clone"
            href="https://y0utubecl0ne.netlify.app/"
            description="React.js / MUI 5 / RapidAPI"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
