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
                        vidarshanadithya3@gmail.com
                        <img height='30' src={require('../img/copy.svg').default} alt="" />
                        <img height='30' src={require('../img/email.svg').default} alt="" />
                    </div>
                    <div class="socials">
                        <div class="social-text">👻 Socials</div>
                        <div class="social-icons">

                            <div class="social">
                                <img height='40' src={require('../img/twitter.svg').default} alt="" />
                            </div>
                            <div class="social">
                                <img height='40' src={require('../img/github.svg').default} alt="" />
                            </div>
                            <div class="social">
                                <img height='40' src={require('../img/linkedin-logo.svg').default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReachOut
