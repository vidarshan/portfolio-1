
import React from 'react'
import Fade from 'react-reveal/Fade';
import '../scss/project.scss';

const Project = () => {


    return (
        <Fade bottom duration={2000}>
            <div className='project-container'>
                <div className="project-heading">🚀  Projects.</div>
                <div class="projects-grid">
                    <div class="project">
                        <div class="name-links">
                            <div class="name">📁 Portfolio</div>
                            <div class="link">
                                <img height='26' src={require('../img/github.svg').default} alt='github' />
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
                                <img height='26' src={require('../img/github.svg').default} alt='github' />
                                <img height='26' src={require('../img/link.svg').default} alt='link' />
                            </div>
                        </div>
                        <div class="desc">Find informtion on any country with a simple search!</div>
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
                                <img height='26' src={require('../img/github.svg').default} alt='github' />
                                <img height='26' src={require('../img/link.svg').default} alt='link' />
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
                </div>
            </div>
        </Fade>

    )
}

export default Project