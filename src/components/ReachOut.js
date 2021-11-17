import React from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import "../scss/reachOut.scss";
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsStackOverflow,
} from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const ReachOut = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vvicyeu",
        "template_pm2vhnb",
        e.target,
        "user_TDKJTDFImWGTBA9FZ1YAB"
      )
      .then(
        (result) => {
          toast.success("Email sent! 🙂", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error("Email not sent! 😥", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  };

  return (
    <Fade bottom duration={2000}>
      <ToastContainer />
      <div className="reachout-container">
        <div className="reachout-heading">👉 Reach Out.</div>
        <div className="form-socials">
          <div className="reachout-form">
            <form onSubmit={sendEmail}>
              <div class="text">😀 Need a hand? Let's talk.</div>
              <input required type="text" placeholder="Name" name="name" />

              <input required type="email" placeholder="Email" name="email" />

              <input
                required
                type="text"
                placeholder="Message"
                name="message"
              />

              <button className="btn-lg btn-block" variant="success">
                Submit
              </button>
            </form>
          </div>
          <div className="email-socials">
            <div className="email-text">📧 Email</div>
            <div className="email">
              <a href="mailto:webmaster@example.com">
                {" "}
                vidarshanadithya3@gmail.com
              </a>
            </div>
            <div className="socials">
              <div className="social-text">👻 Socials</div>
              <div className="social-icons">
                <div className="social">
                  <a
                    href="https://twitter.com/VidarshanR"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsTwitter size="30" />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://github.com/vidarshanadithya"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub size="30" />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/vidarshan-rathnayake/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsLinkedin size="30" />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://stackoverflow.com/users/15415996/vidarshan-adithya"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsStackOverflow size="30" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ReachOut;
