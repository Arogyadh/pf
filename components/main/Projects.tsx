import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center mx-auto justify-center py-20 max-w-7xl"
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
            src="/foodordering.png"
            title="Food Ordering App"
            href="https://main--arogya-food-ordering.netlify.app/"
            description="A FullStack food ordering app made with Nextjs , tailwindcss, NextAuth, MongoDB, Stripe etc. with Admin and Customer panels."
          />
          <ProjectCard
            src="/movie.png"
            title="Movie Ticketing App"
            href="https://tickticketing.netlify.app/"
            description="A Frontend Project thats fetches Movies Data from API and allows for ticket purchase using Next.js 14 / Tailwind "
          />
          <ProjectCard
            src="/NTB.png"
            title="NTB Website redesign"
            href="https://main--ntbnepal.netlify.app/"
            description="A Frontend Project showing different places in Nepal with a unique Style using Next.js 14 / Tailwind"
          />
          <ProjectCard
            src="/geritch.png"
            title="Restaurant Landing Page"
            href="https://geritch-arogya.netlify.app/"
            description="A Frontend Landing Page for a restaurant using React.js / GSAP"
          />
          <ProjectCard
            src="/travel.png"
            title="Travel Landing Page"
            href="https://kaleidoscopic-speculoos-59cd9b.netlify.app/"
            description="A Frontend Landing Page for a travel app using Next.js 13 / Tailwindcss"
          />

          <ProjectCard
            src="/snoofy.png"
            title="Snoofy Web for my doggo"
            href="https://arogyadh.github.io/Website/"
            description="A Starting Project featuring my doggo using HTML / CSS / JS / Bootstrap"
          />
          <ProjectCard
            src="/youtubeclone.png"
            title="Youtube Clone"
            href="https://y0utubecl0ne.netlify.app/"
            description="A Frontend Project using API that clones youtube using React.js / MUI 5 / RapidAPI"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
