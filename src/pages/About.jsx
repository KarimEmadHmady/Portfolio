import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "../index.css";

import { CTA, Footer } from "../components";
import { experiences, skills, CV } from "../constants";

import "react-vertical-timeline-component/style.min.css";

import { uda, udadigi, xora, stramcertive } from "../assets/icons";

// Same file name for every download button so the browser always saves a .pdf
const CV_FILE_NAME = "Karim-Emad-CV.pdf";

const certificates = [
  { src: udadigi, alt: "Udacity Digital Marketing certificate" },
  { src: stramcertive, alt: "Stream Creations certificate" },
  { src: xora, alt: "Wxora training certificate" },
  { src: uda, alt: "Udacity Front-End Web Development certificate" },
];

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
          Software Engineer with 5 years of experience in web development and
          e-commerce, including 3+ years of full-stack development. I specialize
          in the MERN stack and Next.js, building multi-tenant SaaS platforms,
          Progressive Web Apps (PWAs), and role-based business systems for HR,
          finance, restaurant ordering, and yacht sales.
        </p>
        <p>
          I handle projects end-to-end, from development to deployment with
          CI/CD pipelines (GitHub Actions), and I've led the migration and
          refactoring of complex legacy systems.
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
                <span className="blue-gradient_text">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href={CV}
        download={CV_FILE_NAME}
        className="subhead-text blue-gradient_text font-semibold button-My-Resume"
      >
        Download My Resume
      </a>

      <div className="what-i-do">
        <h3 className="subhead-text blue-gradient_text">
          Empowering Learning Journey
        </h3>
        <div className="what-i-do-contanar">
          <div className="tex-what-i-do">
            <div>
              <div>
                <i className="fa-regular fa-file-code"></i>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                  <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">
                    Certificates 📜
                  </h3>
                  A selection of courses and certifications that shaped my
                  technical foundation, from front-end fundamentals to
                  full-stack development.
                </div>
              </div>
            </div>
            {certificates.map((cert) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                className="img-what-i-do"
              />
            ))}
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
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.date}`}
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

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={`experience-point-${pointIndex}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
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

      {/* Floating Download CV Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <a
          href={CV}
          download={CV_FILE_NAME}
          className="cv-btn inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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