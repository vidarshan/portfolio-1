import React, { useState, useLayoutEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/profile.scss';

const Profile = () => {

    const [show, setShow] = useState(true);


    const showContent = () => {
        setShow(!show)
    }

    useLayoutEffect(() => {
        showContent();
        // eslint-disable-next-line
    }, [])

    return (
        <Fade bottom duration={2000}>

            <div className='profile-container'>
                <div class="profile-heading">👨‍💻 Profile.</div>
                <div class="profile-info">
                    <div class="profile-info-text">
                        Greetings! I’m Vidarshan and I am a <span className='underlined-text'>Passionate Software Engineer </span>, striving to make our day-to-day lives easier by building Software based Solutions.
                        <br />
                        <br />
                        I started my journey as a Software Engineer back in 2018, when I started reading for my <span className='underlined-text'>Bsc. in Software Engineering 👨‍🎓</span>.
                        <br />
                        <br />
                        3 years later, here I am, a Software Engineering <span className='underlined-text'>Graduate</span> from <a href='https://www.curtin.edu.au/' rel="noreferrer" target="_blank"><span className='underlined-text'> Curtin University, Australia 🇦🇺,</span></a> working as a Trainee Software Engineer at <a href='https://www.betalaunch.io/' rel="noreferrer" target="_blank"><span className='underlined-text'> BetaLaunch </span></a> for almost 7 months working with React JS + Node JS.
                        <br />
                        <br />
                        Not only Programming is my Job, but it’s also my hobby, since <span className='underlined-text'>I enjoy every minute of me writing code,</span> and seeing things being built with each an every line of code I write.
                    </div>
                    <div class="profile-overview-text">
                        <div class="photo">
                            <img className='my-photo' width='150' src={require('../img/myself.jpeg').default} alt="" />
                        </div>
                        <div class="work-experience">
                            Currently working with &#8594; Beta Launch, Sri Lanka.🇱🇰
                        </div>
                        <div class="work-experience">
                            Designation &#8594; Trainee Software Engineer.
                        </div>
                        <div class="work-experience">
                            Duration &#8594; 7 months.
                        </div>
                        <div class="work-experience">
                            Technologies &#8594; Full Stack Javascript [React JS/ Node JS].
                        </div>

                    </div>

                </div>
                <div class="technologies-grid">
                    <div class="technology">
                        <img height='40' src={require('../img/js.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/react.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/ts.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/mongo.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/node.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/sass.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/redux.png').default} alt="" />
                    </div>
                    <div class="technology">
                        <img height='40' src={require('../img/sql.png').default} alt="" />
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Profile
