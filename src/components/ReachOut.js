import React from 'react';
import Shake from 'react-reveal/Shake';
import '../scss/reachOut.scss';

const ReachOut = () => {
    return (
        <div className='reachout-container'>
            <div class="reachout-heading">🧭 Reach Out.</div>
            <div class="form-socials">
                <div class="reachout-form">
                    <Shake>
                        <input type="text" placeholder="Your Email" />
                    </Shake>
                    <input type="text" placeholder="Message to me" />
                    <button>Send</button>
                </div>
                <div class="email-socials">
                    <div class="email-text">📧 Email</div>
                    <div class="email">
                        <a href="mailto:webmaster@example.com"> vidarshanadithya3@gmail.com</a>
                    </div>
                    <div class="socials">
                        <div class="social-text">👻 Socials</div>
                        <div class="social-icons">

                            <div class="social">
                                <a href="https://twitter.com/VidarshanR" rel="noreferrer" target="_blank"><img height='40' src={require('../img/twitter.svg').default} alt="" /></a>
                            </div>
                            <div class="social">
                                <a href="https://github.com/vidarshanadithya" rel="noreferrer" target="_blank"><img height='40' src={require('../img/github.svg').default} alt="" /></a>
                            </div>
                            <div class="social">

                                <a href="https://www.linkedin.com/in/vidarshan-rathnayake/" rel="noreferrer" target="_blank"><img height='40' src={require('../img/linkedin-logo.svg').default} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReachOut
