import Contact from "./Contact";
import Projects from "./Projects";
import TeckStack from "./TeckStack";

const Main = () => {
  return (
    <main className="text-gray-200 w-full mx-auto lg:w-11/12 px-8 mt-8 pt-20">
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl mb-8" id="about">
          Software engineer, <br /> and full-stack <br /> developer
        </h1>
        <h4 className="text-sm sm:text-base text-gray-400 leading-7">
          Hi there! I'm Ahmed, a Software engineer and full-stack developer. I am a
          creative problem-solver who is always looking for ways to optimize and
          improve the user experience. My ability to work independently, as well
          as collaborate with cross-functional teams, makes me a valuable asset
          to any project.
          <br />
          <p className="mt-5">
            <i>
              Growing up, I always had an affinity for everything tech related.
              Installing custom ROMS on my Android phone (and nearly bricking it)
            </i>

          </p>
        </h4>
        <div className="flex gap-5 mt-8 text-xl text-gray-400">
          <a href="https://github.com/ahmedgamer4" target="_blank">
            <i className="fa-brands fa-github hover:text-cyan-600 transition-colors"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alseidy-89558420a/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin hover:text-cyan-600 transition-colors"></i>
          </a>
        </div>
      </div>
      <TeckStack />
      <div className="mt-24">
        <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
        <Projects />
      </div>
      <Contact />
    </main>
  );
};

export default Main;
