import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/project.scss";
import { RiComputerFill } from "react-icons/ri";
import {
  SiPostgresql,
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
  SiRedux
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
                      href="https://find-your-home.vercel.app/"
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
                    overlay={renderTooltip("View Repo")}
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
                with a <span className="underlined-text highlight"> Postgre SQL</span>{" "}
                and{" "}
                <span className="underlined-text highlight">Sequelize </span>. This is an enterprise Management System of a car service station to
                manage jobs, inventory and suppliers. Built for a real world use case.
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
                  overlay={renderTooltip("Postgre SQL")}
                >
                  <span className='tech'>
                    <SiPostgresql />
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
          <div className="project">
            <div className="project-image">
              <img
                className="image"
                src={require("../img/carmaxfe.png").default}
                alt=""
              />
            </div>
            <div className="project-content">
              <div className="title-links">
                <div className="title">
                  {" "}
                  <FaFolder /> Carmax ERP
                </div>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Prototype")}
                  >
                    <a
                      className="link-container"
                      href="https://61d1d6eeff2a6b00076c7717--silly-villani-ee1088.netlify.app"
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
                Working frontend prototype of the ERP system of a car service station, created to manage their business activities conveniently. Made with <span className="underlined-text highlight">React JS</span> and <span className="underlined-text highlight">Mantine UI</span>. Deployed to <span className="underlined-text highlight">Netlify</span>.
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
                  overlay={renderTooltip("Netlify")}
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
                  <BsFillCalendarDateFill /> 30-01-2022
                </div>
              </div>
            </div>
          </div>
          <div className="project-dev">
            <div className="project-content">
              <div className="title-links">
                <div className="title">
                  {" "}
                  <FaFolder /> Tech Stop <span className='upcoming'>Upcoming</span>
                </div>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Frontend Repo")}
                  >
                    <a
                      href="https://github.com/vidarshanadithya/tech-stop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="description">
                An ecommerce website to sell tech-related items, with functions such as payments through Paypal. Made with <span className="underlined-text highlight">React JS (Typescript)</span> and <span className="underlined-text highlight">Node JS.</span>
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
                  overlay={renderTooltip("Express JS")}
                >
                  <span className='tech'>
                    <SiExpress />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Node JS")}
                >
                  <span className='tech'>
                    <SiNodedotjs />
                  </span>
                </OverlayTrigger>
              </div>
              <div className="type-date">
                <div className="type">
                  <RiComputerFill /> Full-stack
                </div>
                <div className="date">
                  <BsFillCalendarDateFill /> 01-02-2022
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
