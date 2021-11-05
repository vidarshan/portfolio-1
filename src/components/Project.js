
import React from 'react'
import Fade from 'react-reveal/Fade';
import '../scss/project.scss';
import { Accordion } from 'react-bootstrap';
import { RiComputerFill } from 'react-icons/ri';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FaLink, FaGithub } from 'react-icons/fa';
const Project = () => {


    return (
        <Fade bottom duration={2000}>
            <div className='project-container'>
                <div className="project-heading">🚀  Projects.</div>
                <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>📁 Githuber <div className='badge-green'>Latest</div></Accordion.Header>
                        <Accordion.Body>
                            <div class="desc-photo">
                                <div class="photo">
                                    <img src='https://image-placeholder.com/images/actual-size/1920x1080.png' alt="" />
                                </div>
                                <div class="desc">
                                    <div class="links">
                                        <div class="link">
                                            <FaLink />
                                        </div>
                                        <div class="link">
                                            <FaGithub />
                                        </div>
                                    </div>
                                    <div class="text">
                                        Github Search Made Simple! Taking the proper use of the Github API, search Github users, get the information you need with only having to click very few times.
                                    </div>
                                    <div class="techs">
                                        <div class="text">
                                            Tech Stack &#8594;
                                        </div>
                                        <div class="tech">
                                            <img width='25' src={require('../img/react.png').default} alt="" />
                                        </div>
                                        <div class="tech">
                                            <img width='25' src={require('../img/sass.png').default} alt="" />
                                        </div>

                                    </div>
                                    <div class="date-type">
                                        <div class="type">
                                            <RiComputerFill /> Frontend Project
                                        </div>
                                        <div class="date">
                                            <BsFillCalendarDateFill /> 09-2021
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>📁 Countries.io</Accordion.Header>
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
                                Contributed to applications which are based on the web, as a frontend Javascript developer.Mainly worked with React JS along with frontend technologies such as Semantic UI for user interfaces.
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>📁 Carmax ERP</Accordion.Header>
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
                                Contributed to applications which are based on the web, as a frontend Javascript developer.Mainly worked with React JS along with frontend technologies such as Semantic UI for user interfaces.
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>📁 Portfolio</Accordion.Header>
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
                                Contributed to applications which are based on the web, as a frontend Javascript developer.Mainly worked with React JS along with frontend technologies such as Semantic UI for user interfaces.
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* <div class="projects-grid">
                    <div class="project">
                        <div class="name-links">
                            <div class="name">📁 Portfolio</div>
                            <div class="link">
                                <a href='https://github.com/vidarshanadithya/portfolio-react' rel="noreferrer" target="_blank"><img height='26' src={require('../img/github.svg').default} alt='github' /></a>
                            </div>
                        </div>
                        <div class="desc">My own portfolio site which your are browsing right now!</div>
                        <div class="techs">
                            <div class="tech">
                                <div class="tech-text">Technologies &#8594;</div>
                                <div class="tech-icons">
                                    <img height='30' src={require('../img/006-react.svg').default} alt="" />
                                    <img height='30' src={require('../img/026-sass.svg').default} alt="" />
                                    <img height='30' src={require('../img/029-javascript.svg').default} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="date-role">
                            <div class="date">📅 10-10-2021</div>
                            <div class="role">👨‍💻 Full-Stack</div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="name-links">
                            <div class="name">📁 Countries.io</div>
                            <div class="link">
                                <a href='https://github.com/vidarshanadithya/countries-io' rel="noreferrer" target="_blank"><img height='26' src={require('../img/github.svg').default} alt='github' /></a>
                                <a href='https://countries-io.herokuapp.com/' rel="noreferrer" target="_blank"><img height='26' src={require('../img/link.svg').default} alt='link' /></a>
                            </div>
                        </div>
                        <div class="desc">Find information on any country with a simple search!</div>
                        <div class="techs">
                            <div class="tech">
                                <div class="tech-text">Technologies &#8594;</div>
                                <div class="tech-icons">
                                    <img height='30' src={require('../img/006-react.svg').default} alt="" />
                                    <img height='30' src={require('../img/026-sass.svg').default} alt="" />
                                    <img height='30' src={require('../img/029-javascript.svg').default} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="date-role">
                            <div class="date">📅 10-10-2021</div>
                            <div class="role">👨‍💻 Frontend</div>
                        </div>
                    </div>

                    <div class="project">
                        <div class="name-links">
                            <div class="name">📁 Carmax API</div>
                            <div class="link">
                                <a href='https://documenter.getpostman.com/view/12226878/UUy39SEX' rel="noreferrer" target="_blank"> <img height='26' src={require('../img/github.svg').default} alt='github' /></a>
                                <a href='https://documenter.getpostman.com/view/12226878/UUy39SEX' rel="noreferrer" target="_blank"> <img height='26' src={require('../img/link.svg').default} alt='link' /></a>
                            </div>
                        </div>
                        <div class="desc">Node JS API for an ERP system of a car service station</div>
                        <div class="techs">
                            <div class="tech">
                                <div class="tech-text">Technologies &#8594;</div>
                                <div class="tech-icons">
                                    <img height='30' src={require('../img/006-react.svg').default} alt="" />
                                    <img height='30' src={require('../img/026-sass.svg').default} alt="" />
                                    <img height='30' src={require('../img/029-javascript.svg').default} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="date-role">
                            <div class="date">📅 10-10-2021</div>
                            <div class="role">👨‍💻 Backend</div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="name-links">
                            <div class="name">📁 Carmax ERP</div>
                            <div class="link">
                                <img height='26' src={require('../img/github.svg').default} alt='github' />
                                <img height='26' src={require('../img/link.svg').default} alt='link' />
                            </div>
                        </div>
                        <div class="desc">React JS frontend for the ERP system based on Carmax API</div>
                        <div class="techs">
                            <div class="tech">
                                <div class="tech-text">Technologies &#8594;</div>
                                <div class="tech-icons">
                                    <img height='30' src={require('../img/006-react.svg').default} alt="" />
                                    <img height='30' src={require('../img/026-sass.svg').default} alt="" />
                                    <img height='30' src={require('../img/029-javascript.svg').default} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="date-role">
                            <div class="date">📅 10-10-2021</div>
                            <div class="role">👨‍💻 Frontend</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Fade>

    )
}

export default Project