import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "../index.css";

import { CTA, Footer } from "../components";
import { experiences, skills, CV } from "../constants";


import "react-vertical-timeline-component/style.min.css";
import { NavLink } from "react-router-dom";

import { uda, udadigi, xora, stramcertive } from "../assets/icons";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Karim
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Software Engineer with 4+ years of experience building scalable web applications and digital products. I specialize in full-stack development using the MERN stack — crafting responsive, user-centric front-ends with React and Next.js, and robust back-end systems with Node.js and Express.js.
          I've worked across SaaS platforms, e-commerce solutions, financial systems, and HR tools — always focused on clean architecture and real-world impact. Passionate about continuous learning and delivering experiences that go beyond expectations.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text blue-gradient_text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12 items-center justify-center">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <h1 className="blue-gradient_text">{skill.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href={CV}
        download="Karim-Emad-CV.pdf"
        className="subhead-text  blue-gradient_text font-semibold  button-My-Resume"
      >
        Download My Resume
      </a>

      <div className="what-i-do">
        <h3 className="subhead-text blue-gradient_text ">Empowering Learning Journey</h3>
        <div className="what-i-do-contanar">
          <div class="tex-what-i-do">
            <div>
              <div>
                <i class="fa-regular fa-file-code"></i>
                <div class="mt-5 flex flex-col gap-3 text-slate-500">
                  <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">
                    Certificates 📜
                  </h3>
                  A selection of courses and certifications that shaped my technical foundation — from front-end fundamentals to full-stack mastery.
                </div>
              </div>
            </div>
            <img src={udadigi} class="img-what-i-do" />
            <img src={stramcertive} class="img-what-i-do" />
            <img src={xora} class="img-what-i-do" />
            <img src={uda} class="img-what-i-do " />
          </div>

        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text blue-gradient_text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold blue-gradient_text">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2 ">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

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

export default About;
