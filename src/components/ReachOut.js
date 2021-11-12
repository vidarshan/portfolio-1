import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/reachOut.scss";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const ReachOut = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="reachout-container">
        <div className="reachout-heading">👉 Reach Out.</div>
        <div className="form-socials">
          {/* <div className="reachout-form">
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
          </div> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ReachOut;
