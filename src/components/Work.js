import '../scss/work.scss'
import React from 'react';
import Fade from 'react-reveal/Fade';
import { FcCalendar } from 'react-icons/fc';
import { Accordion } from 'react-bootstrap';

const Work = () => {
    return (
        <Fade bottom duration={2000}>
            <div className='work-container'>
                <div class="work-heading">👨‍💻 Work Experience.</div>
                <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Trainee Software Engineer &#8594; Beta Launch, Sri Lanka</Accordion.Header>
                        <Accordion.Body>
                            <div class="icon-date">
                                <div class="icon">
                                    <img width='30' src={require('../img/cropped-favicon.png').default} alt="" srcset="" /> <a class="site" href='https://www.betalaunch.io/' rel='noreferrer' target='_blank'>www.betalaunch.io</a>
                                </div>
                                <div class="date">
                                    <FcCalendar />2021/04 - 2021/10
                                </div>
                            </div>
                            <div class="desc">
                                Contributed to applications which are based on the web, as a frontend Javascript developer. Mainly worked with React JS along with frontend technologies such as Semantic UI for user interfaces.
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Freelance Web Developer &#8594; Excalibur Systems, Sri Lanka</Accordion.Header>
                        <Accordion.Body>
                            <div class="icon-date">
                                <div class="icon">
                                    <img width='30' src={require('../img/88934613.jpeg').default} alt="" srcset="" /> <a class="site" href='https://github.com/excalibur-erp' rel='noreferrer' target='_blank'>github.com/excalibur-erp</a>
                                </div>
                                <div class="date">
                                    <FcCalendar />2021/04 - 2021/10
                                </div>
                            </div>
                            <div class="desc">
                                Created full stack Javascript web applications for enterprises using React JS for the frontend, Node JS + Express JS for the backend, with relational databases.
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Associate Software Engineer &#8594; Beta Launch, Sri Lanka</Accordion.Header>
                        <Accordion.Body>
                            <div class="icon-date">
                                <div class="icon">
                                    <img width='30' src={require('../img/cropped-favicon.png').default} alt="" srcset="" /> <a class="site" href='https://www.betalaunch.io/' rel='noreferrer' target='_blank'>www.betalaunch.io</a>
                                </div>
                                <div class="date">
                                    <FcCalendar />2021/04 - 2021/10
                                </div>
                            </div>
                            <div class="desc">
                                Contributed to applications which are based on the web, as a full stack developer, working closely with React and Node JS. Additionally, contributed as a tester for React applications by using Cypress.io
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Fade>
    )
}

export default Work
