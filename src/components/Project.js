import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/project.scss";
import { Accordion } from "react-bootstrap";
import { RiComputerFill } from "react-icons/ri";
import { FcCalendar, FcFolder } from "react-icons/fc";
import { SiReact } from "react-icons/si";
import { FaLink, FaGithub, FaSass } from "react-icons/fa";
import { BsGithub, BsFillCalendarDateFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
const Project = () => {
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
                  <FiExternalLink />
                </div>
                <div class="git">
                  <BsGithub />
                </div>
              </div>
              <div class="heading">
                <FcFolder /> Portfolio
              </div>
              <div class="text">
                My portfolio website made from React JS and SCSS which intends
                to show what I have done, what I am doing and What I am going to
                do.
              </div>
              <div class="techs">
                <div class="tech">
                  <SiReact size="30" color="rgb(0, 209, 236)" />
                </div>
                <div class="tech">
                  <FaSass size="30" color="rgb(214, 0, 143)" />
                </div>
              </div>
              <div class="role-date">
                <div class="role">
                  <RiComputerFill />
                  Frontend
                </div>
                <div class="date">
                  <BsFillCalendarDateFill />
                  09-2021
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
                  <FiExternalLink />
                </div>
                <div class="git">
                  <BsGithub />
                </div>
              </div>
              <div class="heading">
                <FcFolder /> Githuber
              </div>
              <div class="text">
                Github search made simple! Search any user on Github with ease
                and find their activities and most needed information.
              </div>
              <div class="techs">
                <div class="tech">
                  <SiReact size="30" color="rgb(0, 209, 236)" />
                </div>
                <div class="tech">
                  <FaSass size="30" color="rgb(214, 0, 143)" />
                </div>
              </div>
              <div class="role-date">
                <div class="role">Frontend Development</div>
                <div class="date">09-2021</div>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="image">
              <img src={require("../img/portfolio.png").default} alt="" />
            </div>
            <div class="desc">
              <div class="links">
                <div class="demo">
                  <FiExternalLink />
                </div>
                <div class="git">
                  <BsGithub />
                </div>
              </div>
              <div class="heading">
                <FcFolder /> Carmax ERP API
              </div>
              <div class="text">
                A Node JS API for the Enterprise Management System of a Car
                Service Station to manage jobs, inventory and suppliers.
              </div>
              <div class="techs">
                <div class="tech">
                  <SiReact size="30" color="rgb(0, 209, 236)" />
                </div>
                <div class="tech">
                  <FaSass size="30" color="rgb(214, 0, 143)" />
                </div>
              </div>
              <div class="role-date">
                <div class="role">Frontend Development</div>
                <div class="date">09-2021</div>
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
                  <FiExternalLink />
                </div>
                <div class="git">
                  <BsGithub />
                </div>
              </div>
              <div class="heading">
                <FcFolder /> Countries.io
              </div>
              <div class="text">
                Making use of a 3rd party API which provides simple information
                to the most advanced information on any given country.
              </div>
              <div class="techs">
                <div class="tech">
                  <SiReact size="30" color="rgb(0, 209, 236)" />
                </div>
                <div class="tech">
                  <FaSass size="30" color="rgb(214, 0, 143)" />
                </div>
              </div>
              <div class="role-date">
                <div class="role">Frontend Development</div>
                <div class="date">09-2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
