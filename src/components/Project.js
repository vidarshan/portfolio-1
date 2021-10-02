
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import '../scss/project.scss';

const Project = () => {

    const [side, setSide] = useState('right')
    const [show, setShow] = useState(true);

    const showSlide = () => {
        setShow(!show);
    }

    return (
        <Fade bottom duration={2000}>

            <div className='project-container'>
                <div className="project-heading">🚀  Projects.</div>
                <div class="button" onClick={() => showSlide()}>Button</div>
                <div class="project">
                    <Fade right when={show}>

                        <>

                            <div class="item">
                                <div class="image">
                                    <img className='project-image' src={'https://image-placeholder.com/images/actual-size/1920x1080.png'} alt="" />
                                </div>
                                <div class="project-info">
                                    <div class="name-links">
                                        <div class="name">📁 Carmax ERP</div>
                                        <div class="links">
                                            <img src={require('../img/github.svg').default} alt="" class="link" />
                                            <img src={require('../img/link.svg').default} alt="" className="link" />
                                        </div>
                                    </div>
                                    <div class="desc">An Enterprise Resource Planning System designed for Carmax Pvt. Ltd in Sri Lanka, for make their Car Service Center's workflow convinient. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Laudantium nostrum ratione totam amet fugit quam maxime perspiciatis excepturi quia magnam.</div>
                                    <div class="tech">Technologies Used &#8594;
                                        <img src={require('../img/006-react.svg').default} alt="" />
                                        <img src={require('../img/006-react.svg').default} alt="" />
                                    </div>
                                    <div class="contribution-launched">
                                        <div class="contribution">Contribution <br />👨‍💻 Full-stack Engineer</div>
                                        <div class="release">Launched <br />📅 October 2021</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Fade>
                </div>
            </div>
        </Fade>

    )
}

export default Project