import React, { useState, useLayoutEffect } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiMysql,
  SiExpress,
  SiCypress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { FcPortraitMode } from 'react-icons/fc';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "../scss/profile.scss";

const Profile = () => {
  const [show, setShow] = useState(true);

  const showContent = () => {
    setShow(!show);
  };

  const renderTooltip = (text) => (
    <Tooltip placement="top" className="in" id="tooltip-top">
      {text}
    </Tooltip>
  );

  useLayoutEffect(() => {
    showContent();
    // eslint-disable-next-line
  }, []);

  return (
    <Fade bottom duration={2000}>
      <div className="profile-container">
        <div className="profile-heading"><FcPortraitMode /> Profile.</div>
        <div className="profile-info">
          <div className="profile-overview-text">
            <div className="photo">
              <img
                className="my-photo"
                width="90"
                src={require("../img/myself.jpeg").default}
                alt=""
              />
            </div>
            <div className="overview">
              <div className="name">Vidarshan Adithya</div>
              <div className="designation">Associate Software Engineer</div>
              <div className="current">
                <BiCurrentLocation /> Colombo, Sri Lanka 🇱🇰
              </div>
            </div>
          </div>
          <div className="profile-info-text">
            Greetings! I’m Vidarshan and I am a{" "}
            <span className="underlined-text">
              Passionate Software Engineer{" "}
            </span>
            , striving to make our day-to-day lives easier by building Software
            based Solutions. I started my journey as a Software Engineer back in
            2018, when I started reading for my{" "}
            <span className="underlined-text">
              Bsc. in Software Engineering 👨‍🎓
            </span>
            .
            <br />
            <br />3 years later, here I am, a Software Engineering{" "}
            <span className="underlined-text">Graduate</span> from{" "}
            <a
              href="https://www.curtin.edu.au/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="underlined-text">
                {" "}
                Curtin University, Australia 🇦🇺,
              </span>
            </a>{" "}
            working as an Associate Software Engineer at{" "}
            <a
              href="https://www.betalaunch.io/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="underlined-text"> BetaLaunch </span>
            </a>{" "}
            for almost 10 months working with{" "}
            <span className="underlined-text"> React JS + Node JS. </span>
            <br />
            <br />
            Not only Programming is my Job, but it’s also my hobby, since{" "}
            <span className="underlined-text">
              I enjoy every minute of me writing code,
            </span>{" "}
            and seeing things being built with each an every line of code I
            write.
          </div>
        </div>
        <div className="technologies-grid">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("React JS")}
          >
            <div className="technology">
              <SiReact size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Javascript")}
          >
            <div className="technology">
              <SiJavascript size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Typescript")}
          >
            <div className="technology">
              <SiTypescript size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Mongo DB")}
          >
            <div className="technology">
              <SiMongodb size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Node JS")}
          >
            <div className="technology">
              <SiNodedotjs size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Sass")}
          >
            <div className="technology">
              <FaSass size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Redux")}
          >
            <div className="technology">
              <SiRedux size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("MySQL")}
          >
            <div className="technology">
              <SiMysql size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Express JS")}
          >
            <div className="technology">
              <SiExpress size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Cypress")}
          >
            <div className="technology">
              <SiCypress size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Next JS")}
          >
            <div className="technology">
              <SiNextdotjs size="30" />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Tailwind")}
          >
            <div className="technology">
              <SiTailwindcss size="30" />
            </div>
          </OverlayTrigger>

        </div>
      </div>
    </Fade>
  );
};

export default Profile;
