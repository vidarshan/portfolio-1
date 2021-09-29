import React, { useState, useEffect } from 'react'
import '../scss/home.scss';

const Home = () => {

    const [things, setThings] = useState(['I\'m a Software Engineer. 👨‍💻']);

    useEffect(() => {

        let optionNo = 0;
        const stuff = ['I create stuff for the Web 🌎', 'I create stuff for Mobile 📱', 'I create stuff for Desktop 🖥️', 'I\'m a Software Engineer. 👨‍💻',];

        setInterval(() => {
            if (optionNo < 4) {
                setThings(stuff[optionNo])
                optionNo = optionNo + 1;
            } else {
                optionNo = 0;
                setThings(stuff[0])
            }

        }, 2000)

    }, [])

    return (
        <div className='home-container'>

            <div class="hello-text">Hello.</div>
            <div class="name-text">I'm Vidarshan.</div>
            <div class="def-text">{things}</div>

            {/* / mobile📱/ desktop 🖥️ */}
        </div>
    )
}

export default Home
