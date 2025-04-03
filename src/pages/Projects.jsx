import { Link } from "react-router-dom";

import { CTA, Footer } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import "../index.css";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain height-small-image"
                />
              </div>
            </div>

            <div className="mt-1 flex flex-col contain-of-pro-page">
              <h4 className="text-2xl font-poppins font-semibold header-title-of-proje">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 title-on-proj-page">
                {project.description}
              </p>
              <div className="img-box">
                <img src={project.imgProdu} alt="" />
              </div>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
              {project.demo && (
                <div className="mt-0 flex items-center gap-2  text-sm">
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-black"
                  >
                    frontend code
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              )}
                            {project.codeback && (
                <div className="mt-0 flex items-center gap-2  text-sm">
                  <Link
                    to={project.codeback}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-black"
                  >
                    Backend code 
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
      <Footer />
    </section>
  );
};

export default Projects;
