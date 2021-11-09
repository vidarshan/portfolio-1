import "../scss/work.scss";
import React from "react";
import Fade from "react-reveal/Fade";
import { FcCalendar } from "react-icons/fc";

const Work = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="work-container">
        <div class="work-heading">👨‍💻 Work Experience.</div>
        <div class="experience">
          <div class="place">
            Trainee Software Engineer @ Beta Launch, Sri Lanka 🇱🇰
          </div>
          <div class="desc">
            Contributed to applications which are based on the web, as a
            frontend Javascript developer. Mainly worked with React JS along
            with frontend technologies such as Semantic UI for user interfaces.
          </div>
          <div class="date-link">
            <div class="date">
              <FcCalendar />
              2021-04 / 2021-09
            </div>
            <div class="link">
              <img
                width="30"
                src={require("../img/cropped-favicon.png").default}
                alt=""
                srcset=""
              />
              <a
                class="site"
                href="https://www.betalaunch.io/"
                rel="noreferrer"
                target="_blank"
              >
                www.betalaunch.io
              </a>
            </div>
          </div>
        </div>
        <div class="experience">
          <div class="place">
            Freelance Web Developer @ Excalibur Systems, Sri Lanka 🇱🇰
          </div>
          <div class="desc">
            Created full stack Javascript web applications for enterprises using
            React JS for the frontend, Node JS + Express JS for the backend,
            with relational databases.
          </div>
          <div class="date-link">
            <div class="date">
              <FcCalendar />
              2021-07 / 2021-12
            </div>
            <div class="link">
              <img
                width="30"
                src={require("../img/88934613.jpeg").default}
                alt=""
                srcset=""
              />
              <a
                class="site"
                href="https://www.betalaunch.io/"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/excalibur-erp
              </a>
            </div>
          </div>
        </div>
        <div class="experience current">
          <div class="place">
            [Current] Associate Software Engineer @ Beta Launch, Sri Lanka 🇱🇰
          </div>
          <div class="desc">
            Contributed to applications which are based on the web, as a full
            stack developer, working closely with React and Node JS.
            Additionally, contributed as a E2E tester for React applications by
            using Cypress.io
          </div>
          <div class="date-link">
            <div class="date">
              <FcCalendar />
              2021-09 / Present
            </div>
            <div class="link">
              <img
                width="30"
                src={require("../img/cropped-favicon.png").default}
                alt=""
                srcset=""
              />
              <a
                class="site"
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
