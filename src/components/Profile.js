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
                    I started my journey as a Software Engineer back in 2018, when I started reading for my Bsc. in Software Engineering.
                    <br />
                    <br />
                    3 years later, here I am, a Software Engineering Graduate from @Curtin University, Australia, working as a Trainee Software Engineer at @BetaLaunch for almost 7 months working with React JS + Node JS.
                    <br />
                    <br />
                    Not only Programming is my Job, but it’s also my hobby, since I enjoy every minute of me writing code, and seeing things being built with each an every line of code I write.
                </div>
            </div>
            <div class="languages">
                <div class="language-heading">
                    The technologies which I am most involved with &#8594;
                </div>
            </div>
        </div>
    )
}

export default Profile
