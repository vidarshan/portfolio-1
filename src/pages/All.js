import React, { useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import ReachOut from "../components/ReachOut";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Home from "../components/Home";
import Work from "../components/Work";

const All = () => {
  const [theme, setTheme] = useState();

  console.log(process.env.REACT_APP_TEST_KEY);

  const changeTheme = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const renderTooltip = (text) => (
    <Tooltip placement="top" className="in" id="tooltip-top">
      {text}
    </Tooltip>
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      var element = document.body;
      element.classList.toggle("dark-mode");
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <div className="App">
        {theme === "dark" ? (
          <Bounce top>
            <img
              onClick={() => changeTheme()}
              className="switch-theme"
              alt="dark"
              src={require("../img/moon.svg").default}
            ></img>
          </Bounce>
        ) : (
          <Bounce top>
            <img
              onClick={() => changeTheme()}
              className="switch-theme"
              alt="light"
              src={require("../img/sun.svg").default}
            ></img>
          </Bounce>
        )}

        <section id="home" className="home">
          <Home />
        </section>
        <section id="profile" className="profile">
          <Profile />
        </section>
        <section id="work" className="work">
          <Work />
        </section>
        <section id="projects" className="projects">
          <Project />
        </section>

        <section id="contact" className="contact">
          <ReachOut />
        </section>
      </div>

      <Scrollspy
        className="scrollspy"
        items={["home", "profile", "work", "projects", "contact"]}
        currentClassName="isCurrent"
      >
        <li>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Home")}
          >
            <a href="#home">
              <svg
                className="nav-icon"
                id="Bold"
                enableBackground="new 0 0 24 24"
                height="60"
                viewBox="0 0 24 24"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m22.25 0h-20.75c-.692 0-1.5.458-1.5 1.75v11.5c0 1.292.808 1.75 1.5 1.75h20.75c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75z" />
                <path d="m23.25 16.5h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                <path d="m23.25 19.5h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                <path d="m23.25 22.5h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
              </svg>
            </a>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Profile")}
          >
            <a href="#profile">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
            </a>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Work")}
          >
            <a href="#work">
              <svg
                className="nav-icon"
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                height="60"
                viewBox="0 0 512 512"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m482 25h-452c-16.54 0-30 13.46-30 30v298c0 16.54 13.46 30 30 30h452c16.54 0 30-13.46 30-30v-298c0-16.54-13.46-30-30-30z" />
                  <path d="m416 457h-81v-44h-158v44h-81c-8.28 0-15 6.72-15 15s6.72 15 15 15h320c8.28 0 15-6.72 15-15s-6.72-15-15-15z" />
                </g>
              </svg>
            </a>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Projects")}
          >
            <a href="#projects">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
              </svg>
            </a>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Contact")}
          >
            <a href="#contact">
              <svg
                height="60"
                width="60"
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 485.725 485.725"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M459.835,196.758L73.531,9.826C48.085-2.507,17.46,8.123,5.126,33.569c-6.289,12.975-6.815,28-1.449,41.384
          l60.348,150.818h421.7C481.285,213.048,471.972,202.611,459.835,196.758z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M64.025,259.904L3.677,410.756c-10.472,26.337,2.389,56.177,28.726,66.65c5.963,2.371,12.319,3.603,18.736,3.631
          c7.754,0,15.408-1.75,22.391-5.12l386.304-187c12.137-5.854,21.451-16.291,25.89-29.013H64.025z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </OverlayTrigger>
        </li>
      </Scrollspy>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
    </>
  );
};

export default All;
