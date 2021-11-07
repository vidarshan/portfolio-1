import React, { useState, useLayoutEffect } from 'react';
import { SiReact, SiJavascript, SiTypescript, SiMongodb, SiNodedotjs, SiRedux, SiMysql, SiExpress, SiCypress } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../scss/profile.scss';

const Profile = () => {

    const [show, setShow] = useState(true);


    const showContent = () => {
        setShow(!show)
    }

    const renderTooltip = (text) => (
        <Tooltip placement="top" className="in" id="tooltip-top">{text}</Tooltip>
    );

    useLayoutEffect(() => {
        showContent();
        // eslint-disable-next-line
    }, [])

    return (
        <Fade bottom duration={2000}>

            <div className='profile-container'>
                <div class="profile-heading">👨‍💻 Profile.</div>
                <div class="profile-info">
                    <div class="profile-overview-text">
                        <div class="photo">
                            <img className='my-photo' width='90' src={require('../img/myself.jpeg').default} alt="" />
                        </div>
                        <div class="overview">
                            <div class="name">Vidarshan Adithya</div>
                            <div class="designation">Associate Software Engineer</div>
                            <div class="current">Beta Launch, Colombo, Sri Lanka</div>
                        </div>
                    </div>
                    <div class="profile-info-text">
                        Greetings! I’m Vidarshan and I am a <span className='underlined-text'>Passionate Software Engineer </span>, striving to make our day-to-day lives easier by building Software based Solutions.
                        I started my journey as a Software Engineer back in 2018, when I started reading for my <span className='underlined-text'>Bsc. in Software Engineering 👨‍🎓</span>.
                        <br />
                        <br />
                        3 years later, here I am, a Software Engineering <span className='underlined-text'>Graduate</span> from <a href='https://www.curtin.edu.au/' rel="noreferrer" target="_blank"><span className='underlined-text'> Curtin University, Australia 🇦🇺,</span></a> working as an Associate Software Engineer at <a href='https://www.betalaunch.io/' rel="noreferrer" target="_blank"><span className='underlined-text'> BetaLaunch </span></a> for almost 7 months working with React JS + Node JS.
                        <br />
                        <br />
                        Not only Programming is my Job, but it’s also my hobby, since <span className='underlined-text'>I enjoy every minute of me writing code,</span> and seeing things being built with each an every line of code I write.
                    </div>


                </div>
                <div class="technologies-grid">
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('React JS')}
                    >
                        <div class="technology">
                            <SiReact size='30' color='rgb(0, 209, 236)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Javascript')}
                    >
                        <div class="technology">
                            < SiJavascript size='30' color='rgb(255 184 6)' />
                        </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Typescript')}
                    >
                        <div class="technology">
                            <SiTypescript size='30' color='rgb(19, 114, 202)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Mongo DB')}
                    >
                        <div class="technology">
                            <SiMongodb size='30' color='rgb(48, 138, 67)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Node JS')}
                    >
                        <div class="technology">
                            <SiNodedotjs size='30' color='rgb(48, 138, 67)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Sass')}
                    >
                        <div class="technology">
                            <FaSass size='30' color='rgb(214, 0, 143)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Redux')}
                    >
                        <div class="technology">
                            <SiRedux size='30' color='rgb(178, 0, 214)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('MySQL')}
                    >
                        <div class="technology">
                            <SiMysql size='30' color='rgb(0, 146, 214)∂' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Express JS')}
                    >
                        <div class="technology">
                            <SiExpress size='30' color='rgb(141 134 134)' />
                        </div></OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Cypress')}
                    >
                        <div class="technology">
                            <SiCypress size='30' color='rgb(146, 146, 146)' />
                        </div></OverlayTrigger>
                </div>
            </div>
        </Fade>
    )
}

export default Profile
