import '../scss/work.scss'
import React from 'react';
import Fade from 'react-reveal/Fade';
import { RiBuilding4Line } from 'react-icons/ri'
import { BiUser } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi';
import { CgCalendarDates } from 'react-icons/cg'
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
                                    <img width='30' src={require('../img/cropped-favicon.png').default} alt="" srcset="" /> <div class="site">www.betalaunch.io</div>
                                </div>
                                <div class="date">
                                    📅 2021/04 - 2021/10
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
                                    <img width='30' src={require('../img/88934613.jpeg').default} alt="" srcset="" /> <div class="site">github.com/excalibur-erp</div>
                                </div>
                                <div class="date">
                                    📅 2021/04 - 2021/10
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
                                    <img width='30' src={require('../img/cropped-favicon.png').default} alt="" srcset="" /> <div class="site">www.betalaunch.io</div>
                                </div>
                                <div class="date">
                                    📅 2021/04 - 2021/10
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
