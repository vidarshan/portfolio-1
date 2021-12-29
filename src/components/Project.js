import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/project.scss";
import { RiComputerFill } from "react-icons/ri";
import {
  SiMysql,
  SiNetlify,
  SiVercel,
  SiStrapi,
  SiTailwindcss,
  SiNextdotjs,
  SiHeroku,
  SiSequelize,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiRedux,
  SiSemanticuireact,
} from "react-icons/si";
import { FaReact, FaFolder } from "react-icons/fa";
import { BsGithub, BsFillCalendarDateFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FcStatistics } from 'react-icons/fc';

const Project = () => {
  const renderTooltip = (text) => (
    <Tooltip placement="top" className="in" id="tooltip-top">
      {text}
    </Tooltip>
  );

  return (
    <Fade bottom duration={2000}>
      <div className="project-container">
        <div className="project-heading"><FcStatistics /> Projects.</div>
        <div className="project-grid">
          <div className="project">
            <div className="project-image">
              <img
                className="image"
                src={require("../img/findmystay.png").default}
                alt=""
              />
            </div>
            <div className="project-content">
              <div className="title-links">
                <div className="title">
                  {" "}
                  <FaFolder /> Findmystay <span className='new'>New</span>
                </div>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      className="link-container"
                      href="https://findmystay.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Backend Repo")}
                  >
                    <a
                      className="link-container"
                      href="https://github.com/vidarshanadithya/findmystaybe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Frontend Repo")}
                  >
                    <a
                      href="https://github.com/vidarshanadithya/findmystayfe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="description">
                A straight forward mock web app to find hotels in California.
                The information on the hotels are listed down using the headless
                CMS{" "}
                <span className="underlined-text highlight">Strapi API</span>{" "}
                hosted on{" "}
                <span className="underlined-text highlight">Heroku</span>, and
                the frontend was built with{" "}
                <span className="underlined-text highlight">Next JS</span> for
                great SEO. The frontend is hosted on{" "}
                <span className="underlined-text highlight">Vercel</span>. The
                UI was done using{" "}
                <span className="underlined-text highlight">Tailwind CSS</span>.
              </div>
              <div className="technologies">
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Next JS")}
                >
                  <span>
                    <SiNextdotjs className='tech' />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Tailwind CSS")}
                >
                  <span className='tech'>
                    <SiTailwindcss />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Vercel")}
                >
                  <span>
                    <SiVercel className='tech' />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Heroku")}
                >
                  <span>
                    <SiHeroku className='tech' />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Strapi")}
                >
                  <span>
                    <SiStrapi className='tech' />
                  </span>
                </OverlayTrigger>
              </div>
              <div className="type-date">
                <div className="type">
                  <RiComputerFill /> Full-stack
                </div>
                <div className="date">
                  <BsFillCalendarDateFill /> 09-12-2021
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img
                className="image"
                src={require("../img/githubsearch.png").default}
                alt=""
              />
            </div>
            <div className="project-content">
              <div className="title-links">
                <div className="title">
                  {" "}
                  <FaFolder /> Github Search
                </div>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      className="link-container"
                      href="https://61a26a6d1c6eea0007117321--quirky-heisenberg-ef69be.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Repo")}
                  >
                    <a
                      className="link-container"
                      href="https://github.com/vidarshanadithya/github-search"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="description">
                Github search made simple. Search any Github user, and find
                their information conveniently, view and clone their
                repositories . Powered by the{" "}
                <span className="underlined-text highlight">Github API</span>,
                with the frontend being{" "}
                <span className="underlined-text highlight">React JS.</span> UI
                done with{" "}
                <span className="underlined-text highlight">Ant Design</span>{" "}
                and deployed to{" "}
                <span className="underlined-text highlight">Netlify.</span>
              </div>
              <div className="technologies">
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <span className='tech'>
                    <FaReact />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Ant Design")}
                >
                  <span className='tech'>
                    <AiOutlineAntDesign />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Github API")}
                >
                  <span className='tech'>
                    <BsGithub />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Netlify")}
                >
                  <span className='tech'>
                    <SiNetlify />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Redux")}
                >
                  <span className='tech'>
                    <SiRedux />
                  </span>
                </OverlayTrigger>
              </div>
              <div className="type-date">
                <div className="type">
                  <RiComputerFill /> Frontend
                </div>
                <div className="date">
                  <BsFillCalendarDateFill /> 09-10-2021
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img
                className="image"
                src={require("../img/carmax.png").default}
                alt=""
              />
            </div>
            <div className="project-content">
              <div className="title-links">
                <div className="title">
                  {" "}
                  <FaFolder /> Carmax ERP API
                </div>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Documentation")}
                  >
                    <a
                      className="link-container"
                      href="https://documenter.getpostman.com/view/12226878/UUy39SEX"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HiOutlineDocumentText />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Documentation")}
                  >
                    <a
                      className="link-container"
                      href="https://github.com/vidarshanadithya/carmax-erp-api"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="description">
                A <span className="underlined-text highlight">Node JS</span> API
                with a <span className="underlined-text highlight"> MySQL</span>{" "}
                DB with{" "}
                <span className="underlined-text highlight">Sequelize</span> for
                the Enterprise Management System of a Car Service Station to
                manage jobs, inventory and suppliers. Built for a private
                customer.
              </div>
              <div className="technologies">
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Node JS")}
                >
                  <span className='tech'>
                    <SiNodedotjs />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("mySQL")}
                >
                  <span className='tech'>
                    <SiMysql />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Sequelize")}
                >
                  <span className='tech'>
                    <SiSequelize />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Express JS")}
                >
                  <span className='tech'>
                    <SiExpress />
                  </span>
                </OverlayTrigger>
              </div>
              <div className="type-date">
                <div className="type">
                  <RiComputerFill /> Backend
                </div>
                <div className="date">
                  <BsFillCalendarDateFill /> 20-08-2021
                </div>
              </div>
            </div>
          </div>
          <div className="project-dev">
            <div className="project-content">
              <div className="title-links">
                <div className="title">
                  {" "}
                  <FaFolder /> Lufthansa Schedules{" "}
                  <span className="upcoming">Upcoming</span>
                </div>
                <div>

                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Repo")}
                  >
                    <a
                      className="link-container"
                      href="https://github.com/vidarshanadithya/lufthansa-flight-schedules.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="description">
                Find Lufthansa Flight Schedules and operating airports. Powered
                by{" "}
                <span className="underlined-text highlight">
                  Lufthansa Open API
                </span>
                , built using{" "}
                <span className="underlined-text highlight">React JS</span> and{" "}
                <span className="underlined-text highlight">Semantic UI.</span>
              </div>
              <div className="technologies">
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <span className='tech'>
                    <SiReact />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Redux")}
                >
                  <span className='tech'>
                    <SiRedux />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Semantic UI")}
                >
                  <span className='tech'>
                    <SiSemanticuireact />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("MySQL")}
                >
                  <span className='tech'>
                    <SiNetlify />
                  </span>
                </OverlayTrigger>
              </div>
              <div className="type-date">
                <div className="type">
                  <RiComputerFill /> Frontend
                </div>
                <div className="date">
                  <BsFillCalendarDateFill /> 01-01-2022
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
