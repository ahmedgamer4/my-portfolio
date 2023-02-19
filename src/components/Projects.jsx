import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import jobFinderImg from "./assets/job_finder.png";
import markdownImg from "./assets/markdown_notes.png";
import { useEffect } from "react";

const Project = ({
  img,
  projectName,
  description,
  previewLink,
  githubLink,
  built,
}) => {
  const [offsetY, setOffsetY] = useState();
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="relative flex flex-col sm:flex-row w-full">
      <img
        className="opacity-60 w-full sm:w-6/12 max-w-lg object-cover"
        src={img}
        alt="project_img"
      />

      <div
        className="relative top-32 -left-2 sm:-left-20 -scroll-mt-10"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      >
        <h3 className="text-xl bg-cyan-700 w-32 text-center">{projectName}</h3>
        <div className="bg-black p-7">
          <p className="text-base sm:text-lg">{description}</p>
          <div className="border-t border-t-slate-600 mt-10 py-4">{built}</div>
          <div className="flex justify-end -t border-t-slate-600">
            <div className="text-base sm:text-lg mt-1">
              <a
                target="_blank"
                href={githubLink}
                className="mr-4 hover:text-cyan-600 transition-colors"
              >
                Github
              </a>
              <a
                target="_blank"
                href={previewLink}
                className="hover:text-cyan-600 transition-colors"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const projects = [
  {
    img: jobFinderImg,
    projectName: "Job Finder",
    built: "Build using React, TypeScript and Tailwind CSS",
    description: `Job Finder is an application that shows a list of jobs.
                  The app uses Rmotive.io API to fetch data and lays the data
                  out in a user-friendly format. The main page shows a list of jobs.
                  You can see more information about a certain job by click it.`,
    previewLink: "https://comforting-semifreddo-a39cca.netlify.app/",
    githubLink: "https://github.com/ahmedgamer4/jobs-finder.git",
    key: 1,
  },
  {
    img: markdownImg,
    projectName: "Markdown Notes",
    built: "Build using React, TypeScript and React Bootstrap",
    description: `Markdown Notes lets you write notes in md format and save it to
                  your local storage. The app use React Bootstrap to offer a gorgeous layout.
                  `,
    previewLink: "https://glowing-strudel-07224b.netlify.app/",
    githubLink: "https://github.com/ahmedgamer4/markdown-notes.git",
    key: 2,
  },
];

const Projects = () => {
  return (
    <section className="my-16 flex flex-col sm:gap-72 w-full" id="projects">
      {projects.map((project) => (
        <Project
          key={project.key}
          img={project.img}
          built={project.built}
          githubLink={project.githubLink}
          previewLink={project.previewLink}
          description={project.description}
          projectName={project.projectName}
        />
      ))}
    </section>
  );
};

export default Projects;
