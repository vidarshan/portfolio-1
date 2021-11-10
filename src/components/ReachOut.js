import React from "react";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import "../scss/reachOut.scss";
import { Button, Form } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const ReachOut = () => {
  let success = true;

  const sendEmail = () => {
    if (success) {
      toast.success("🙂 Email sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("😥 Sending Failed. Try again!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Fade bottom duration={2000}>
      <div className="reachout-container">
        <div class="reachout-heading">👉 Reach Out.</div>
        <div class="form-socials">
          <div class="reachout-form">
            <Form>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Message" />
              </Form.Group>
              <Button
                className="btn-lg btn-block"
                variant="success"
                onClick={() => sendEmail()}
              >
                Submit
              </Button>
            </Form>
          </div>
          <div class="email-socials">
            <div class="email-text">📧 Email</div>
            <div class="email">
              <a href="mailto:webmaster@example.com">
                {" "}
                vidarshanadithya3@gmail.com
              </a>
            </div>
            <div class="socials">
              <div class="social-text">👻 Socials</div>
              <div class="social-icons">
                <div class="social">
                  <a
                    href="https://twitter.com/VidarshanR"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsTwitter size="30" />
                  </a>
                </div>
                <div class="social">
                  <a
                    href="https://github.com/vidarshanadithya"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub size="30" />
                  </a>
                </div>
                <div class="social">
                  <a
                    href="https://www.linkedin.com/in/vidarshan-rathnayake/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsLinkedin size="30" />
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
