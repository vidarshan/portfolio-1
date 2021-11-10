import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/project.scss";
import { RiComputerFill } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import { SiReact, SiGithub, SiMysql } from "react-icons/si";
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
        <div class="project-grid">
          <div class="project">
            <div class="image">
              <img src={require("../img/portfolio.png").default} alt="" />
            </div>
            <div class="desc">
              <div class="links">
                <div class="demo">
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
                <div class="git">
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
              <div class="heading">
                <FcFolder /> Portfolio
              </div>
              <div class="text">
                My portfolio website which intends to show my work and my path
                within the field. Created with{" "}
                <span className="underlined-text highlight">ReactJS</span> and{" "}
                <span className="underlined-text highlight">SCSS</span> with
                some <span className="underlined-text highlight">npm</span>{" "}
                packages such as react-reveal and Count-up.
              </div>
              <div class="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <div class="tech">
                    <SiReact size="30" color="rgb(0, 209, 236)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Sass")}
                >
                  <div class="tech">
                    <FaSass size="30" color="rgb(214, 0, 143)" />
                  </div>
                </OverlayTrigger>
              </div>
              <div class="role-date">
                <div class="role">
                  <RiComputerFill />
                  Frontend Project
                </div>
                <div class="date">
                  <BsFillCalendarDateFill />
                  11-2021
                </div>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="image">
              <img src={require("../img/githuber.png").default} alt="" />
            </div>
            <div class="desc">
              <div class="links">
                <div class="demo">
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
                <div class="git">
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
              <div class="heading">
                <FcFolder /> Githuber
              </div>
              <div class="text">
                Github search made simple! Search any user on Github with ease
                and find their repositories and profile information. Created
                with <span className="underlined-text highlight">React JS</span>
                , <span className="underlined-text highlight">SCSS</span> and{" "}
                <span className="underlined-text highlight">Github API</span>
              </div>
              <div class="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <div class="tech">
                    <SiReact size="25" color="rgb(0, 209, 236)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Scss")}
                >
                  <div class="tech">
                    <FaSass size="25" color="rgb(214, 0, 143)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Github API")}
                >
                  <div class="tech">
                    <SiGithub size="25" />
                  </div>
                </OverlayTrigger>
              </div>
              <div class="role-date">
                <div class="role">
                  <RiComputerFill />
                  Frontend Project
                </div>
                <div class="date">
                  <BsFillCalendarDateFill />
                  10-2021
                </div>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="image">
              <img src={require("../img/carmax.png").default} alt="" />
            </div>
            <div class="desc">
              <div class="links">
                <div class="demo">
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
              </div>
              <div class="heading">
                <FcFolder /> Carmax ERP API
              </div>
              <div class="text">
                A <span className="underlined-text highlight">Node JS</span> API
                with an <span className="underlined-text highlight">MySQL</span>{" "}
                DB for the Enterprise Management System of a Car Service Station
                to manage jobs, inventory and suppliers.
              </div>
              <div class="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Node JS")}
                >
                  <div class="tech">
                    <FaNodeJs size="30" color="rgb(54, 165, 91) " />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("MySQL")}
                >
                  <div class="tech">
                    <SiMysql size="30" color="rgb(45, 163, 231)" />
                  </div>
                </OverlayTrigger>
              </div>
              <div class="role-date">
                <div class="role">
                  <RiComputerFill />
                  Backend Project
                </div>
                <div class="date">
                  <BsFillCalendarDateFill />
                  08-2021
                </div>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="image">
              <img src={require("../img/countries.png").default} alt="" />
            </div>
            <div class="desc">
              <div class="links">
                <div class="demo">
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
                </div>
                <div class="git">
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
              <div class="heading">
                <FcFolder /> Countries.io
              </div>
              <div class="text">
                Making use of a 3rd party API which provides simple information
                to the most advanced information on any given country. Mde with
                <span className="underlined-text highlight">
                  React JS
                </span> and{" "}
                <span className="underlined-text highlight">SCSS</span>
              </div>
              <div class="techs">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("React JS")}
                >
                  <div class="tech">
                    <SiReact size="30" color="rgb(0, 209, 236)" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Scss")}
                >
                  <div class="tech">
                    <FaSass size="30" color="rgb(214, 0, 143)" />
                  </div>
                </OverlayTrigger>
              </div>
              <div class="role-date">
                <div class="role">
                  <RiComputerFill />
                  Frontend Project
                </div>
                <div class="date">
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
