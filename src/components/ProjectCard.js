import React from 'react';

const ProjectCard = () => {
  return (
    <div className='project-item'>
      <div className='project-image-container'>
        <img
          className='project-image'
          src={require('../img/prj.png').default}
          alt=''
        />
      </div>
      <div className='project-info'>
        <div className='project-title-action-row'>
          <div className='project-title text-md text-weight-500'>
            Project Title
          </div>

          <div className='project-icons'>
            <div className='project-code'>
              <img src={require('../img/github.svg').default} alt='' />
            </div>
            <div className='project-demo'>
              <img src={require('../img/demo.svg').default} alt='' />
            </div>
          </div>
        </div>
        <div className='project-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          nisi asperiores nesciunt fugit sapiente provident, ex eligendi nemo
          vero cumque officia illo laborum reprehenderit odio maxime ullam quia
          soluta at, quaerat quibusdam distinctio aliquam veniam quis. Officiis,
          suscipit libero maiores minus nisi, nemo voluptatem harum repudiandae
          quibusdam animi dolore porro quae id. Quod ea totam, harum odit
          voluptates itaque in dolores consectetur voluptatum quo voluptatibus,
          provident temporibus optio libero necessitatibus nemo ipsa fugiat qui.
          Delectus fugiat itaque amet ea maiores dignissimos labore reiciendis
        </div>
        <div className='seperator'></div>
        <div className='project-tech'>
          <div className='project-tech-title text-weight-600 text-sm-1'>
            Technologies Used
          </div>
          <div className='projects-techs'>
            <div className='tech-icon'>
              <img
                className='project-image'
                src={require('../img/006-react.svg').default}
                alt=''
              />
            </div>
            <div className='tech-icon'>
              <img
                className='project-image'
                src={require('../img/032-nodejs.svg').default}
                alt=''
              />
            </div>
            <div className='tech-icon'>
              <img
                className='project-image'
                src={require('../img/021-mysql.svg').default}
                alt=''
              />
            </div>
            <div className='tech-icon'>
              <img
                className='project-image'
                src={require('../img/026-sass.svg').default}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='seperator'></div>
        <div className='project-role-date'>
          <div className='project-role text-sm-1'>
            <span className='role text-weight-600'>Role</span>
            <span>Frontend Engineer</span>
          </div>
          <div className='project-date text-sm-1'>
            <span className='launched text-weight-600'>Launched</span>
            <span>09 / 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
