import React from 'react';
import TextField from '@material-ui/core/TextField';
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
      <section className='achievements'>
        <div className='heading text-xl text-weight-600'>
          Competencies and Achievements
        </div>

        <div className='tech-comp-row'>
          <div className='text-sm text-weight-600 text-align-center'>
            Technical Competencies
          </div>
          <div className='tech-comp-icon-row'>
            <img
              height='80'
              src={require('../img/003-java.svg').default}
              alt=''
            />
            <img
              height='80'
              src={require('../img/004-docker.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/005-python.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/006-react.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/016-c-1.svg').default}
              alt=''
            />{' '}
            <img height='80' src={require('../img/018-c.svg').default} alt='' />
            <img
              height='80'
              src={require('../img/020-gnu-bash.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/021-mysql.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/025-typescript.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/026-sass.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/029-javascript.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/030-html-5.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/031-css.svg').default}
              alt=''
            />{' '}
            <img
              height='80'
              src={require('../img/032-nodejs.svg').default}
              alt=''
            />{' '}
          </div>
          <div className='stats'>
            <div className='stackoverflow'>
              <div className='text-md text-weight-600 text-align-center'>
                Stackoverflow
                {/* https://stackoverflow.com/users/flair/15415996.json */}
              </div>
              <div className='reputation text-md text-weight-600 text-align-center'>
                145
              </div>
              <div className='reputation-subtitle text-sm text-align-center'>
                Reputation Points
              </div>
              <div className='medals'>
                <div className='medal'>
                  <div className='icon text-align-center'>
                    <img
                      height='54'
                      src={require('../img/gold-medal.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='count text-md text-weight-600 text-align-center'>
                    1
                  </div>
                  <div className='count-subtitle text-sm text-weight-600 text-align-center'>
                    Gold Badges
                  </div>
                </div>
                <div className='medal'>
                  <div className='icon text-align-center'>
                    <img
                      height='54'
                      src={require('../img/silver-medal.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='count text-md text-weight-600 text-align-center'>
                    9
                  </div>
                  <div className='count-subtitle text-sm text-weight-600 text-align-center'>
                    Silver Badges
                  </div>
                </div>
                <div className='medal'>
                  <div className='icon text-align-center'>
                    <img
                      height='54'
                      src={require('../img/bronze-medal.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='count text-md text-weight-600 text-align-center'>
                    14
                  </div>
                  <div className='count-subtitle text-sm text-weight-600 text-align-center'>
                    Bronze Badges
                  </div>
                </div>
              </div>
            </div>
            <div className='github'>
              <div className='text-md text-weight-600 text-align-center'>
                Github
              </div>

              <img
                src='http://ghchart.rshah.org/vidarshanadithya'
                alt="2016rshah's Github chart"
              />

              <div className='github-numbers'>
                {/* 
              https://api.github.com/users/vidarshanadithya/events?page=1 */}
                <div className='repos'>
                  <div className='icon'>
                    <img
                      className='project-image'
                      src={require('../img/026-sass.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers'>10</div>
                  <div className='title'>Repositories</div>
                </div>
                <div className='repos'>
                  <div className='icon'>
                    <img
                      className='project-image'
                      src={require('../img/026-sass.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers'>10</div>
                  <div className='title'>Repositories</div>
                </div>
                <div className='contributions'>
                  <div className='icon'>
                    <img
                      className='project-image'
                      src={require('../img/026-sass.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers'>10</div>
                  <div className='title'>Contributions</div>
                </div>
                <div className='Pull Requests'>
                  <div className='icon'>
                    <img
                      className='project-image'
                      src={require('../img/026-sass.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers'>10</div>
                  <div className='title'>Pull Requests</div>
                </div>
                <div className='Stars'>
                  <div className='icon'>
                    <img
                      className='project-image'
                      src={require('../img/026-sass.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers'>10</div>
                  <div className='title'>Stars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact'>
        <div className='heading text-xl text-weight-600'>Reach out</div>

        <div className='contact-socials'>
          <div className='contact-form'>
            <div className='text-md text-align-center text-weight-600'>
              Send me a Message
            </div>
            <TextField
              size='large'
              fullWidth
              id='standard-password-input'
              label='Password'
              type='text'
              autoComplete='current-password'
            />

            <div className='form-row'>
              <TextField
                size='large'
                fullWidth
                id='standard-password-input'
                label='Password'
                type='email'
                autoComplete='current-password'
              />
            </div>

            <div className='form-row'>
              <TextField
                size='large'
                fullWidth
                id='standard-password-input'
                label='Password'
                type='text'
                autoComplete='current-password'
              />
            </div>

            <div className='form-row'>
              <button className='send-btn'>Send Message</button>
            </div>
          </div>

          <div className='socials'>
            <div className='text-md text-align-center text-weight-600'>
              Support me
            </div>
            <div className='row'>
              <div className='item text-align-center'>
                <div className='icon'>
                  <img
                    height='60'
                    className='project-image'
                    src={require('../img/github.svg').default}
                    alt=''
                  />
                </div>
                <div className='name text-weight-500'>Follow me on Github</div>
              </div>
              <div className='item text-align-center'>
                <div className='icon'>
                  <img
                    height='60'
                    className='project-image'
                    src={require('../img/linkedin.svg').default}
                    alt=''
                  />
                </div>
                <div className='name text-weight-500'>
                  Follow me on Linkedin
                </div>
              </div>

              <div className='item text-align-center'>
                <div className='icon'>
                  <img
                    height='60'
                    className='project-image'
                    src={require('../img/patreon.svg').default}
                    alt=''
                  />
                </div>
                <div className='name text-weight-500'>
                  Support me on Patreon
                </div>
              </div>
              <div className='item text-align-center'>
                <div className='icon'>
                  <img
                    height='60'
                    className='project-image'
                    src={require('../img/newspaper.svg').default}
                    alt=''
                  />
                </div>
                <div className='name text-weight-500'>Read my Articles</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default All;
