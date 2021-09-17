import React, {useState, useEffect} from 'react';
import Scrollspy from 'react-scrollspy'
import CountUp from 'react-countup';

import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import ProjectCard from '../components/ProjectCard';
import {getStackOverflowDetails} from '../actions/actions';

const All = () => {


  const dispatch = useDispatch();

  const stackoverflowinfo = useSelector((state)=>state.stackoverflow);

  const {stackoverflow, loading, error} = stackoverflowinfo;

  function myFunction() {
    var element = document.body;
    element.classList.toggle('dark-mode');
  }

  useEffect(()=>{
    dispatch(getStackOverflowDetails())
  },[dispatch])

  return (
    <>

<div className="App">
      <div>
      <img
        onClick={myFunction}
        className='switch-theme'
        src={require('../img/sun.svg').default}></img>
      <section id='home' class='home'>
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
      <section id='profile'  className='profile'>
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
      </section>
      <section id='projects' className='projects'>
        <div className='heading text-xl text-weight-600'>Projects</div>

        <div className='projects-row'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section id='achievements' className='achievements'>
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
          {loading ? <p>Loading</p> : <div className='stats'>
            <div className='stackoverflow'>
              <div className='text-md text-weight-600 text-align-center'>
                Stackoverflow
                {/* https://stackoverflow.com/users/flair/15415996.json */}
              </div>
              <div className='reputation text-md text-weight-600 text-align-center'>
             
              <CountUp
                  start={0}
                  end={stackoverflow.reputation}
                  duration={2.75}/>
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
                  <CountUp
                  start={0}
                  end={stackoverflow.gold_badges}
                  duration={2.75}/>
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
                  <CountUp
                  start={0}
                  end={stackoverflow.silver_badges}
                  duration={2.75}/>
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
                  <CountUp
                  start={0}
                  end={stackoverflow.bronze_badges}
                  duration={2.75}/>
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

              <div className='github-numbers text-align-center'>
                {/*                 
                https://api.github.com/users/vidarshanadithya/events?page=1 */}

                <div className='item text-align-center'>
                  <div className='icon'>
                    <img
                      height='30'
                      className='project-image'
                      src={require('../img/repo.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers text-md text-weight-600'>
                  <CountUp
                  start={0}
                  end={28}
                  duration={2.75}/>
                  </div>
                  <div className='title text-sm text-weight-600'>
                    Repositories
                  </div>
                </div>
                <div className='item text-align-center'>
                  <div className='icon'>
                    <img
                      height='30'
                      className='project-image'
                      src={require('../img/commit.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='number text-md text-weight-600'>
                  <CountUp
                  start={0}
                  end={1357}
                  duration={2.75}/>
                  </div>
                  <div className='title text-sm text-weight-600'>
                    Contributions
                  </div>
                </div>
                <div className='item text-align-center'>
                  <div className='icon'>
                    <img
                      height='30'
                      className='project-image'
                      src={require('../img/pr.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers text-md text-weight-600'>
                  <CountUp
                  start={0}
                  end={43}
                  duration={2.75}/>
                  </div>
                  <div className='title text-sm text-weight-600'>
                    Pull Requests
                  </div>
                </div>
                <div className='item text-align-center'>
                  <div className='icon'>
                    <img
                      height='30'
                      className='project-image'
                      src={require('../img/star.svg').default}
                      alt=''
                    />
                  </div>
                  <div className='numbers text-md text-weight-600'>
                  <CountUp
                  start={0}
                  end={10}
                  duration={2.75}/>
                  </div>
                  <div className='title text-sm text-weight-600'>Stars</div>
                </div>
              </div>
            </div>
          </div>}
          
        </div>
      </section>
      <section id='contact' className='contact'>
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
 
      </div>

     <header className='header'>


      <Scrollspy 
        className="scrollspy" items={ ['home', 'profile', 'projects', 'achievements', 'contact'] } 
        currentClassName="isCurrent">
      <li>
        <a href='#home'>
      <svg fill='#ffffff' enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5  s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019  c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z" id="XMLID_219_"/></svg>
        </a>
          </li>
        <li><a href='#profile'>
        <svg className='nav-icon' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>
        </a></li>
        <li><a href='#projects'>
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-svg" width="60" height="60" viewBox="0 0 24 24"><path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"/></svg>
        </a></li>
        <li><a href='#achievements'>
       <svg fill='#ffffff' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" height="60"><g id="Trophy"><path d="M48.0632,55.4387H15.8288a3.03,3.03,0,0,0-3.03,3.03v3.0323a.9121.9121,0,0,0,.9121.9124h36.47a.9124.9124,0,0,0,.9124-.9124V58.4691A3.03,3.03,0,0,0,48.0632,55.4387Z"/><path d="M55.6941,6.1826H50.64V4.5367A1.9506,1.9506,0,0,0,48.69,2.5861H15.5432a1.9506,1.9506,0,0,0-1.9507,1.9506V6.1826H8.3064a4.5171,4.5171,0,0,0-4.5117,4.5117v2.9228a13.4035,13.4035,0,0,0,6.5009,11.6592,13.212,13.212,0,0,0,5.708,1.7373q.0645.0043.129.0044a1.7133,1.7133,0,0,0,.2121-.02,18.592,18.592,0,0,0,8.12,7.1725,7.1072,7.1072,0,0,1,4.0617,6.5071v3.3494A2.2628,2.2628,0,0,1,26.2639,46.29H21.5862a2.7452,2.7452,0,0,0-2.7451,2.7452v3.7528H45.3918V49.0347A2.7452,2.7452,0,0,0,42.6465,46.29H37.9687a2.263,2.263,0,0,1-2.2629-2.2629V40.6772a7.1071,7.1071,0,0,1,4.062-6.5071,18.5922,18.5922,0,0,0,8.1082-7.1523c.04,0,.0805-.0015.1208-.0042a13.2033,13.2033,0,0,0,5.707-1.7373,13.4039,13.4039,0,0,0,6.502-11.6592V10.6943A4.5171,4.5171,0,0,0,55.6941,6.1826ZM12.0486,22.2465a9.896,9.896,0,0,1-4.7539-8.6294V10.6943A1.0128,1.0128,0,0,1,8.3064,9.6826h5.2861v7.62a18.4666,18.4666,0,0,0,.9871,5.9428A9.5264,9.5264,0,0,1,12.0486,22.2465ZM39.1211,18.18l-2.13,1.5474a1.429,1.429,0,0,0-.519,1.5979l.8132,2.5034a1.4293,1.4293,0,0,1-2.1994,1.5981l-2.13-1.5472a1.4293,1.4293,0,0,0-1.68,0l-2.13,1.5472a1.4293,1.4293,0,0,1-2.1994-1.5981l.8134-2.5034a1.4293,1.4293,0,0,0-.5193-1.5979L25.112,18.18a1.4293,1.4293,0,0,1,.84-2.5857h2.6321a1.4293,1.4293,0,0,0,1.3594-.9875l.8135-2.5034a1.4293,1.4293,0,0,1,2.7187,0l.8135,2.5034a1.43,1.43,0,0,0,1.3594.9875H38.281A1.4294,1.4294,0,0,1,39.1211,18.18Zm17.5847-4.563a9.8973,9.8973,0,0,1-4.7549,8.63,9.5091,9.5091,0,0,1-2.2764.9368,18.4662,18.4662,0,0,0,.9659-5.8815v-7.62h5.0537a1.0128,1.0128,0,0,1,1.0117,1.0117Z"/></g></svg>
        </a></li>
        <li><a href='#contact'>
<svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 485.725 485.725"  xmlSpace="preserve">
<g>
	<g>
		<path d="M459.835,196.758L73.531,9.826C48.085-2.507,17.46,8.123,5.126,33.569c-6.289,12.975-6.815,28-1.449,41.384
			l60.348,150.818h421.7C481.285,213.048,471.972,202.611,459.835,196.758z"/>
	</g>
</g>
<g>
	<g>
		<path d="M64.025,259.904L3.677,410.756c-10.472,26.337,2.389,56.177,28.726,66.65c5.963,2.371,12.319,3.603,18.736,3.631
			c7.754,0,15.408-1.75,22.391-5.12l386.304-187c12.137-5.854,21.451-16.291,25.89-29.013H64.025z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        </a></li>
      </Scrollspy>
     </header>
    </div>


     
    </>
  );
};

export default All;
