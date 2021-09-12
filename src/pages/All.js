import React from 'react';
import ProjectCard from '../components/ProjectCard';

const All = () => {
  function myFunction() {
    var element = document.body;
    element.classList.toggle('dark-mode');
  }

  return (
    <>
      <header className='header'>
        <ul class='nav-icon-list'>
          <li>
            <img
              className='nav-icon'
              src={require('../img/home.svg').default}
              alt=''
            />
          </li>
          <li>
            <img
              className='nav-icon'
              src={require('../img/profile.svg').default}
              alt=''
            />
          </li>
          <li>
            <img
              className='nav-icon'
              src={require('../img/projects.svg').default}
              alt=''
            />
          </li>

          <li>
            <img
              className='nav-icon'
              src={require('../img/achievement.svg').default}
              alt=''
            />
          </li>
          <li>
            <img
              className='nav-icon'
              src={require('../img/contact.svg').default}
              alt=''
            />
          </li>
        </ul>
      </header>
      <img
        onClick={myFunction}
        className='switch-theme'
        src={require('../img/sun.svg').default}></img>
      <section class='home'>
        <div class='intro-text-container'>
          <div
            class='
            text-xl text-weight-600 text-align-right
            spacing-1 spacing-right-3
          '>
            Hello.
          </div>
          <div
            class='
            text-xl text-weight-600 text-align-right
            spacing-1 spacing-right-3
          '>
            I'm Vidarshan;
          </div>

          <div class='text-cursor-same-line'>
            <div class='text-xl text-weight-600 text-align-right'>
              A Software Engineer
            </div>
            <div
              class='
              text-xl text-weight-600 text-align-right
              blinking-cursor
              spacing-right-3
            '>
              |
            </div>
          </div>
        </div>
      </section>
      <section className='profile'>
        <div className='heading text-xl text-weight-600'>Profile</div>
        <div className='text-lg'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          delectus eius rem consequatur? Magnam perferendis qui consectetur in
          ullam quae laboriosam nemo. Nihil eligendi numquam voluptas eum cum
          nostrum quam qui, at ut obcaecati enim adipisci quos, animi vitae
          doloremque libero reprehenderit, voluptatem corrupti illum molestiae
          soluta? Exercitationem sunt, sit iste enim laborum dolor tenetur
          quidem odio libero sed neque magnam, cupiditate nemo expedita fugiat
          temporibus. Eos quo, commodi tempore maiores iure id dignissimos quam
          provident, inventore esse suscipit in incidunt hic quisquam officiis
          quae nemo consequatur dolor libero! Blanditiis iste aliquid eveniet
          nisi consequuntur reprehenderit!
        </div>
        {/* <div className='profile-row'>
          <div className='biography-col text-sm'>
            <div className='text-md text-align-center spacing-bottom-1'>
              Biography
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            delectus eius rem consequatur? Magnam perferendis qui consectetur in
            ullam quae laboriosam nemo. Nihil eligendi numquam voluptas eum cum
            nostrum quam qui, at ut obcaecati enim adipisci quos, animi vitae
            doloremque libero reprehenderit, voluptatem corrupti illum molestiae
            soluta? Exercitationem sunt, sit iste enim laborum dolor tenetur
            quidem odio libero sed neque magnam, cupiditate nemo expedita fugiat
            temporibus. Eos quo, commodi tempore maiores iure id dignissimos
            quam provident, inventore esse suscipit in incidunt hic quisquam
            officiis quae nemo consequatur dolor libero! Blanditiis iste aliquid
            eveniet nisi consequuntur reprehenderit! Similique reprehenderit
            saepe eligendi libero aperiam eveniet soluta illo nobis natus totam
            distinctio quasi consequuntur, aut quisquam necessitatibus enim
            laboriosam accusantium numquam! Maiores harum repellendus eligendi
            atque ratione aperiam perferendis, excepturi rerum incidunt vero.
            Hic nisi, consequuntur dicta, corrupti veritatis explicabo vitae
            tenetur nesciunt laborum minus quasi laudantium neque voluptatibus
            earum sapiente aut ad.
          </div>
          <div className='timeline-col'>
            <div className='text-md text-align-center spacing-bottom-1'>
              Journey as a Developer
            </div>
            <div className='timeline-items-row'>
              <div className='timeline-item'>
                <div className='timeline-item-icon text-align-center'>
                  <img
                    className='nav-icon'
                    src={require('../img/code.svg').default}
                    alt=''
                  />
                </div>
                <div className='timeline-item-title text-align-center text-sm text-weight-600'>
                  Started Coding
                </div>
                <div className='timeline-item-subtitle text-align-center text-sm-1 text-weight-600 text-color-disable'>
                  As a college student
                </div>
                <div className='timeline-item-date text-align-center text-sm-1 text-weight-600'>
                  04 / 2018
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-item-icon text-align-center'>
                  <img
                    className='nav-icon'
                    src={require('../img/graduation.svg').default}
                    alt=''
                  />
                </div>
                <div className='timeline-item-title text-align-center text-sm text-weight-600'>
                  Graduated
                </div>
                <div className='timeline-item-subtitle text-align-center text-sm-1 text-weight-600 text-color-disable'>
                  Bsc. Software Engineering
                </div>
                <div className='timeline-item-date text-align-center text-sm-1 text-weight-600'>
                  03 / 2021
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-item-icon text-align-center'>
                  <img
                    className='nav-icon'
                    src={require('../img/job.svg').default}
                    alt=''
                  />
                </div>
                <div className='timeline-item-title text-align-center text-sm text-weight-600'>
                  First Job
                </div>
                <div className='timeline-item-subtitle text-align-center text-sm-1 text-weight-600 text-color-disable'>
                  Trainee Software Engineer
                </div>
                <div className='timeline-item-date text-align-center text-sm-1 text-weight-600'>
                  04 / 2021
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <section className='projects'>
        <div className='heading text-xl text-weight-600'>Projects</div>

        <div className='projects-row'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default All;
