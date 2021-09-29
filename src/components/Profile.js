import React from 'react'
import '../scss/profile.scss';

const Profile = () => {



    return (
        <div className='profile-container'>
            <div class="profile-heading">👨‍💻 Profile.</div>
            <div class="profile-info">
                <div class="profile-info-text">
                    Greetings! I’m Vidarshan and I am a <span className='underlined-text'>Passionate Software Engineer</span>, striving to make our day-to-day lives easier by building Software based Solutions.
                    <br />
                    <br />
                    I started my journey as a Software Engineer back in 2018, when I started reading for my <span className='underlined-text'>Bsc. in Software Engineering</span>.
                    <br />
                    <br />
                    3 years later, here I am, a Software Engineering <span className='underlined-text'>Graduate</span> from <span className='underlined-text'>@Curtin University, Australia,</span> working as a <span className='underlined-text'>Trainee Software Engineer</span> at @BetaLaunch for almost 7 months working with React JS + Node JS.
                    <br />
                    <br />
                    Not only Programming is my Job, but it’s also my hobby, since <span className='underlined-text'>I enjoy every minute of me writing code,</span> and seeing things being built with each an every line of code I write.
                </div>
                <div class="profile-overview-text">
                    <div class="work-experience">
                        Currently working with &#8594; Beta Launch, Colombo Sri Lanka.🇱🇰
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

        </div>
    )
}

export default Profile
