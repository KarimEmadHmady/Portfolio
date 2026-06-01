import { Link } from "react-router-dom";

import { CTA, Footer } from "../components";
import { projects } from "../constants";
import { arrow , CV} from "../assets/icons";

import "../index.css";

const Projects = () => {
  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    const category = project.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});

  const categories = Object.keys(groupedProjects);

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
A mix of client work and personal builds — spanning SaaS platforms, e-commerce, real estate, and management systems.
      </p>

      {/* Render projects by category */}
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 border-b-2 border-blue-500 pb-3">
            {category}
          </h2>
          
          <div className="flex flex-wrap my-10 gap-16">
            {groupedProjects[category].map((project) => (
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
        </div>
      ))}

      <hr className="border-slate-200" />

      <CTA />
      <Footer />

      {/* Download CV Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <style>{`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 25px rgba(34, 211, 238, 0.8);
            }
          }
          
          @keyframes bounce-arrow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }
          
          .cv-btn {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .cv-btn:hover svg {
            animation: bounce-arrow 0.6s ease-in-out infinite;
          }
        `}</style>
        <a
          href={CV}
          download="Karim Emad CV"
          className="cv-btn inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          CV
        </a>
      </div>
    </section>
  );
};

export default Projects;
