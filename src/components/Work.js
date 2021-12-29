import "../scss/work.scss";
import React from "react";
import Fade from "react-reveal/Fade";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaCircle } from 'react-icons/fa';
import { FcBriefcase } from 'react-icons/fc';

const Work = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="work-container">
        <div className="work-heading"><FcBriefcase /> Work Experience.</div>
        <div className="experience">
          <div className="place">
            Freelance Web Developer @ Excalibur Systems, Sri Lanka 🇱🇰
          </div>
          <div className="desc">
            Created full stack Javascript web applications for enterprises using
            React JS for the frontend, Node JS + Express JS for the backend,
            with relational databases.
          </div>
          <div className="date-link">
            <div className="date">
              <BsFillCalendarDateFill />
              <div>2020-12 - 2021-04</div>
            </div>
            <div className="link">
              <img
                width="30"
                src={require("../img/88934613.jpeg").default}
                alt=""
              />
              <a
                className="site"
                href="https://www.betalaunch.io/"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/excalibur-erp
              </a>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="place">
            Trainee Software Engineer @ Beta Launch, Sri Lanka 🇱🇰
          </div>
          <div className="desc">
            Contributed to applications which are based on the web, as a
            frontend Javascript developer. Mainly worked with React JS along
            with frontend technologies such as Semantic UI for user interfaces.
          </div>
          <div className="date-link">
            <div className="date">
              <BsFillCalendarDateFill />
              2021-04 - 2021-09
            </div>
            <div className="link">
              <img
                width="30"
                src={require("../img/cropped-favicon.png").default}
                alt=""
              />
              <a
                className="site"
                href="https://www.betalaunch.io/"
                rel="noreferrer"
                target="_blank"
              >
                www.betalaunch.io
              </a>
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="place">
            <FaCircle color='#33cc33' size='12' />
            <span>Associate Software Engineer @ Beta Launch, Sri Lanka 🇱🇰</span>
          </div>
          <div className="desc">
            Contributed to applications which are based on the web, as a full
            stack developer, working closely with React and Node JS.
            Additionally, contributed as a E2E tester for React applications by
            using Cypress.io
          </div>
          <div className="date-link">
            <div className="date">
              <BsFillCalendarDateFill />
              2021-09 - Present
            </div>
            <div className="link">
              <img
                width="30"
                src={require("../img/cropped-favicon.png").default}
                alt=""
              />
              <a
                className="site"
                href="https://www.betalaunch.io/"
                rel="noreferrer"
                target="_blank"
              >
                www.betalaunch.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Work;
