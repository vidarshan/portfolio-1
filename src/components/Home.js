import React, { useState, useEffect } from "react";
import "lodash.get";
import Fade from "react-reveal/Fade";
import { BsGithub, BsStackOverflow } from "react-icons/bs";
import CountUp from "react-countup";
import { BiGitBranch, BiStar, BiMedal, BiUpArrow } from "react-icons/bi";
import { FcGlobe, FcFilingCabinet, FcPhoneAndroid, FcPortraitMode } from 'react-icons/fc';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { getGithubContributions } from "github-contributions-counter";
import "../scss/home.scss";

const Home = () => {
  const [show, setShow] = useState(true);
  const [things, setThings] = useState([<span>I'm a Software Engineer <FcPortraitMode /></span>]);
  const [stars, setStars] = useState(0);
  const [contributions, setContributions] = useState(0);
  const [stackOverflow, setStackOverflow] = useState(0);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [reputation, setReputation] = useState(0);

  const showInfo = () => {
    setShow(!show);
  };

  const renderTooltip = (text) => (
    <Tooltip className="in" id="tooltip-top">
      {text}
    </Tooltip>
  );

  useEffect(() => {
    getGithubContributions({
      username: "vidarshanadithya",
      config: { partition: "current" },
    }).then((items) => {
      items.length && setContributions(items[0].contributions);
    });

    fetch(
      `https://api.stackexchange.com/2.2/users/15415996?&key=${process.env.REACT_APP_STACKOVERFLOW_KEY}&site=stackoverflow`
    )
      .then((response) => response.json())
      .then((data) => setStackOverflow(data));

    fetch(`https://api.github.com/users/vidarshanadithya/starred`)
      .then((response) => response.json())
      .then((data) => setStars(data.length));

    let optionNo = 0;
    const stuff = [
      <span>I create stuff for the Web <FcGlobe /></span>,
      <span>I create stuff for Mobile <FcPhoneAndroid /></span>,
      <span>I create stuff for Desktop<FcFilingCabinet /></span>,
      <span>I'm a Software Engineer <FcPortraitMode /></span>,
    ];

    setInterval(() => {
      if (optionNo < 4) {
        setThings(stuff[optionNo]);
        optionNo = optionNo + 1;
      } else {
        optionNo = 0;
        setThings(stuff[0]);
      }
    }, 2000);

    showInfo();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setReputation(stackOverflow.items && stackOverflow.items[0].reputation);
    setGold(stackOverflow.items && stackOverflow.items[0].badge_counts.gold);
    setSilver(
      stackOverflow.items && stackOverflow.items[0].badge_counts.silver
    );
    setBronze(
      stackOverflow.items && stackOverflow.items[0].badge_counts.bronze
    );
  }, [stackOverflow]);

  return (
    <Fade duration={2000} bottom>
      <div className="home-container">
        <div className="hello-text">Hello.</div>
        <div className="name-text">I'm Vidarshan.</div>
        <div className="def-text">{things}</div>
        <OverlayTrigger
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Github / Stackoverflow")}
          placement="bottom-start"
        >
          <div className="stats">
            <BsGithub /> &#8594; <BiGitBranch />
            <CountUp
              start={0}
              end={contributions}
              separator=","
              duration={2.75}
            />{" "}
            - <BiStar />
            <CountUp
              start={0}
              end={stars}
              separator=","
              duration={2.75}
            /> | <BsStackOverflow /> &#8594; <BiUpArrow color="green" />{" "}
            <CountUp start={0} end={reputation} separator="," duration={2.75} />{" "}
            - <BiMedal color="gold" />{" "}
            <CountUp start={0} end={gold} separator="," duration={2.75} /> -{" "}
            <BiMedal color="silver" />{" "}
            <CountUp start={0} end={silver} separator="," duration={2.75} /> -{" "}
            <BiMedal color="maroon" />{" "}
            <CountUp start={0} end={bronze} separator="," duration={2.75} />{" "}
          </div>
        </OverlayTrigger>
        {/* / mobile📱/ desktop 🖥️ */}
      </div>
    </Fade>
  );
};

export default Home;
