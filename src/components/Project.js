import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/project.scss";
import { RiComputerFill } from "react-icons/ri";
import { SiMysql, SiNetlify, SiVercel, SiStrapi, SiTailwindcss, SiNextdotjs, SiHeroku, SiSequelize, SiNodedotjs, SiExpress } from "react-icons/si";
import { FaReact, FaFolder } from "react-icons/fa";
import { BsGithub, BsFillCalendarDateFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText } from 'react-icons/hi';
const Project = () => {
  const renderTooltip = (text) => (
    <Tooltip placement="top" className="in" id="tooltip-top">
      {text}
    </Tooltip>
  );

  return (
    <Fade bottom duration={2000}>
      <div className="project-container">

        <div className="project-heading">🚀 Projects.</div>
        <div className="project-grid">
          <div class="project">
            <div class="project-image">

              <img className='image' src={require("../img/findmystay.png").default} alt="" />
            </div>
            <div className='project-content'>
              <div class="title-links">
                <div class="title"> <FaFolder /> Findmystay</div>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      href="https://findmystay.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink className='link' />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      href="https://findmystay.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub className='link' />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      href="https://findmystay.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div class="description">
                A straight forward mock web app to find hotels in California. The information on the hotels are listed down using the headless CMS <span className="underlined-text highlight">Strapi API</span> hosted on <span className="underlined-text highlight">Heroku</span>, and the frontend was built with <span className="underlined-text highlight">Next JS</span> for great SEO. The frontend is hosted on <span className="underlined-text highlight">Vercel</span>. The UI was done using <span className="underlined-text highlight">Tailwind CSS</span>.
              </div>
              <div class="technologies">
                <SiNextdotjs />
                <SiTailwindcss />
                <SiVercel />
                <SiHeroku />
                <SiStrapi />
              </div>
              <div class="type-date">
                <div class="type">
                  <RiComputerFill /> Full-stack
                </div>
                <div class="date">
                  <BsFillCalendarDateFill /> 09-12-2021
                </div>

              </div>

            </div>
          </div>

          <div class="project">
            <div class="project-image">

              <img className='image' src={require("../img/githuber.png").default} alt="" />
            </div>
            <div className='project-content'>
              <div class="title-links">
                <div class="title"> <FaFolder /> Github Search</div>
                <div>
                  <FiExternalLink className='link' />
                  <BsGithub />
                </div>
              </div>
              <div class="description">
                Github search made simple. Search any Github user, and find their information conveniently, view and clone their repositories
                . Powered by the <span className="underlined-text highlight">Github API</span>, with the frontend being <span className="underlined-text highlight">React JS.</span> UI done with <span className="underlined-text highlight">Ant Design</span> and deployed to <span className="underlined-text highlight">Netlify.</span>
              </div>
              <div class="technologies">
                <FaReact />
                <AiOutlineAntDesign />
                <BsGithub />
                <SiNetlify />
              </div>
              <div class="type-date">
                <div class="type">
                  <RiComputerFill /> Frontend
                </div>
                <div class="date">
                  <BsFillCalendarDateFill /> 09-10-2021
                </div>

              </div>

            </div>
          </div>
          <div class="project">
            <div class="project-image">

              <img className='image' src={require("../img/carmax.png").default} alt="" />
            </div>
            <div className='project-content'>
              <div class="title-links">
                <div class="title"> <FaFolder /> Carmax ERP API</div>
                <div>
                  <HiOutlineDocumentText className='link' />
                  <BsGithub />

                </div>
              </div>
              <div class="description">
                A <span className="underlined-text highlight">Node JS</span> API with a <span className="underlined-text highlight"> MySQL</span> DB with <span className="underlined-text highlight">Sequelize</span> for the Enterprise Management System of a Car Service Station to manage jobs, inventory and suppliers. Built for a private customer.
              </div>
              <div class="technologies">
                <SiNodedotjs />
                <SiMysql />
                <SiSequelize />
                <SiExpress />

              </div>
              <div class="type-date">
                <div class="type">
                  <RiComputerFill /> Backend
                </div>
                <div class="date">
                  <BsFillCalendarDateFill /> 20-08-2021
                </div>

              </div>

            </div>
          </div>
          <div class="project-dev">

            <div className='project-content'>
              <div class="title-links">
                <div class="title"> <FaFolder /> Lufthansa Schedules</div>
                <div>
                  <FiExternalLink className='link' />

                  <BsGithub />
                </div>
              </div>
              <div class="description">
                Find Lufthansa Flight Schedules and operating airports. Powered by Lufthansa API, built using React JS and Tailwind CSS.
              </div>
              <div class="technologies">
                <SiNextdotjs />
                <SiTailwindcss />
                <SiVercel />
                <SiHeroku />
                <SiStrapi />
              </div>
              <div class="type-date">
                <div class="type">
                  <RiComputerFill /> Full-stack
                </div>
                <div class="date">
                  <BsFillCalendarDateFill /> 09-12-2021
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
