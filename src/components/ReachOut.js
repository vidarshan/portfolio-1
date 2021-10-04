import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';
import '../scss/reachOut.scss';

const ReachOut = () => {

    let success = true;

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = () => {


        if (success) {
            toast.success('🙂 Email sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success('😥 Sending Failed. Try again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }



    return (
        <Fade bottom duration={2000}>

            <div className='reachout-container'>
                <div class="reachout-heading">👉 Reach Out.</div>
                <div class="form-socials">
                    <div class="reachout-form">

                        <input type="text" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />

                        <input type="text" value={message} placeholder="Message to me" onChange={(e) => setMessage(e.target.value)} />
                        <button onClick={() => sendEmail()}>Send</button>
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
        </Fade>
    )
}

export default ReachOut
