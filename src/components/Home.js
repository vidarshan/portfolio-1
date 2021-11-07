import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { BsGithub, BsStackOverflow } from 'react-icons/bs';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { BiGitBranch, BiStar, BiMedal, BiUpArrow } from 'react-icons/bi';
import '../scss/home.scss';

const Home = () => {

    const [show, setShow] = useState(true);
    const [things, setThings] = useState(['I\'m a Software Engineer 👨‍💻']);

    const showInfo = () => {
        setShow(!show);
    }

    useEffect(() => {

        let optionNo = 0;
        const stuff = ['I create stuff for the Web 🌎', 'I create stuff for Mobile 📱', 'I create stuff for Desktop 🖥️', 'I\'m a Software Engineer 👨‍💻',];

        setInterval(() => {
            if (optionNo < 4) {
                setThings(stuff[optionNo])
                optionNo = optionNo + 1;
            } else {
                optionNo = 0;
                setThings(stuff[0])
            }

        }, 2000)

        showInfo();
        // eslint-disable-next-line
    }, [])



    return (
        <Fade duration={2000} bottom>
            <div className='home-container'>

                <div class="hello-text">Hello.</div>
                <div class="name-text">I'm Vidarshan.</div>
                <div class="def-text">{things}</div>
                <div class="stats"><BsGithub /> &#8594; <BiGitBranch /><CountUp
                    start={0}
                    end={2165}
                    separator=','
                    duration={2.75}
                /> - <BiStar /><CountUp
                        start={0}
                        end={10}
                        separator=','
                        duration={2.75}
                    />  |  <BsStackOverflow /> &#8594; <BiUpArrow color='green' /> <CountUp
                        start={0}
                        end={155}
                        separator=','
                        duration={2.75}
                    />  - <BiMedal color='gold' /> <CountUp
                        start={0}
                        end={1}
                        separator=','
                        duration={2.75}
                    />  - <BiMedal color='silver' /> <CountUp
                        start={0}
                        end={2}
                        separator=','
                        duration={2.75}
                    />  - <BiMedal color='maroon' /> <CountUp
                        start={0}
                        end={14}
                        separator=','
                        duration={2.75}
                    /> </div>

                {/* / mobile📱/ desktop 🖥️ */}
            </div>
        </Fade>
    )
}

export default Home
