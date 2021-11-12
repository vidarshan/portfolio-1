import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/project.scss";
import { RiComputerFill } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import { SiReact, SiGithub, SiMysql, SiRedux } from "react-icons/si";
import { FaSass, FaNodeJs } from "react-icons/fa";
import { BsGithub, BsFillCalendarDateFill } from "react-icons/bs";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
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
          <div className="project">
            <div className="image">
              <img src={require("../img/portfolio.png").default} alt="" />
            </div>
            <div className="desc">
              <div className="links">
                <div className="demo">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      href="https://vidarshan.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </OverlayTrigger>
                </div>
                <div className="git">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Code")}
                  >
                    <a
                      href="https://github.com/vidarshanadithya/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="heading">
                <FcFolder /> Portfolio
              </div>
              <div className="text">
                My portfolio website which intends to show my work and my path
                within the field. Created with{" "}
                <span className="underlined-text highlight">ReactJS</span> and{" "}
                <span className="underlined-text highlight">SCSS</span> with
                some <span className="underlined-text highlight">npm</span>{" "}
                packages such as react-reveal and Count-up.
              </div>
              <div className="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <div className="tech">
                    <SiReact size="30" color="rgb(0, 209, 236)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Sass")}
                >
                  <div className="tech">
                    <FaSass size="30" color="rgb(214, 0, 143)" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="role-date">
                <div className="role">
                  <RiComputerFill />
                  Frontend Project
                </div>
                <div className="date">
                  <BsFillCalendarDateFill />
                  11-2021
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src={require("../img/githuber.png").default} alt="" />
            </div>
            <div className="desc">
              <div className="links">
                <div className="demo">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      href="https://boring-mclean-972fb4.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </OverlayTrigger>
                </div>
                <div className="git">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Code")}
                  >
                    <a
                      href="https://github.com/vidarshanadithya/githuber"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="heading">
                <FcFolder /> Githuber
              </div>
              <div className="text">
                Github search made simple! Search any user on Github with ease
                and find their repositories and profile information. Created
                with <span className="underlined-text highlight">React JS</span>
                , <span className="underlined-text highlight">SCSS</span> and{" "}
                <span className="underlined-text highlight">Github API</span>
              </div>
              <div className="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <div className="tech">
                    <SiReact size="25" color="rgb(0, 209, 236)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Scss")}
                >
                  <div className="tech">
                    <FaSass size="25" color="rgb(214, 0, 143)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Redux")}
                >
                  <div className="tech">
                    <SiRedux size="28" color="rgb(178, 0, 214)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Github API")}
                >
                  <div className="tech">
                    <SiGithub size="25" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="role-date">
                <div className="role">
                  <RiComputerFill />
                  Frontend Project
                </div>
                <div className="date">
                  <BsFillCalendarDateFill />
                  10-2021
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src={require("../img/carmax.png").default} alt="" />
            </div>
            <div className="desc">
              <div className="links">
                <div className="demo">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Documentation")}
                  >
                    <a
                      href="https://documenter.getpostman.com/view/12226878/UUy39SEX"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </OverlayTrigger>
                </div>
                <div className="git">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Code")}
                  >
                    <a
                      href="https://github.com/vidarshanadithya/carmax-erp-api"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="heading">
                <FcFolder /> Carmax ERP API
              </div>
              <div className="text">
                A <span className="underlined-text highlight">Node JS</span> API
                with an <span className="underlined-text highlight">MySQL</span>{" "}
                DB for the Enterprise Management System of a Car Service Station
                to manage jobs, inventory and suppliers.
              </div>
              <div className="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Node JS")}
                >
                  <div className="tech">
                    <FaNodeJs size="30" color="rgb(54, 165, 91) " />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("MySQL")}
                >
                  <div className="tech">
                    <SiMysql size="30" color="rgb(45, 163, 231)" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="role-date">
                <div className="role">
                  <RiComputerFill />
                  Backend Project
                </div>
                <div className="date">
                  <BsFillCalendarDateFill />
                  08-2021
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src={require("../img/countries.png").default} alt="" />
            </div>
            <div className="desc">
              <div className="links">
                {/* <div className="demo">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Demo")}
                  >
                    <a
                      href="https://countries-io.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </OverlayTrigger>
                </div> */}
                <div className="git">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("View Code")}
                  >
                    <a
                      href="https://github.com/vidarshanadithya/countries-io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="heading">
                <FcFolder /> Countries.io [Launching Soon]
              </div>
              <div className="text">
                Making use of a 3rd party API which provides simple information
                to the most advanced information on any given country. Mde with
                <span className="underlined-text highlight">
                  React JS
                </span> and{" "}
                <span className="underlined-text highlight">SCSS</span>
              </div>
              <div className="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <div className="tech">
                    <SiReact size="30" color="rgb(0, 209, 236)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Scss")}
                >
                  <div className="tech">
                    <FaSass size="30" color="rgb(214, 0, 143)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Redux")}
                >
                  <div className="tech">
                    <SiRedux size="28" color="rgb(178, 0, 214)" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="role-date">
                <div className="role">
                  <RiComputerFill />
                  Frontend Project
                </div>
                <div className="date">
                  <BsFillCalendarDateFill />
                  07-2021
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
