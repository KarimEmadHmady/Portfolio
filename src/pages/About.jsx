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
        Hello, I’m Karim, a passionate Software Engineer with over 4 years of experience in web development.
        I specialize in crafting dynamic and user-centric applications,
        with 1.5 years of expertise in React and Next.js for building scalable front-end solutions.
        On the back end, I have 1 year of experience with Node.js and Express.js,
        delivering robust and efficient server-side systems. Proficient in JavaScript,
        I’m committed to continuous learning and staying up-to-date 
        with modern technologies to create seamless digital experiences that exceed user expectations.
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
                  Website programming and development play a crucial role in
                  today's digital landscape. Businesses and project owners rely
                  on it to enhance their services, showcase their products, and
                  present a more professional image to customers. To achieve
                  this, I utilize some of the most popular and efficient
                  programming languages in web development, including HTML, CSS,
                  and JavaScript, along with the React framework for building
                  fast, dynamic, and interactive user interfaces. Additionally,
                  I specialize in the MERN stack (MongoDB, Express.js, React,
                  and Node.js), enabling the creation of powerful, scalable
                  full-stack applications that deliver seamless user experiences
                  and robust functionality.
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
    </section>
  );
};

export default About;
