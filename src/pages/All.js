import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
        <div className='profile-row'>
          <div className='biography-col'>
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
            <div className='text-md'>Journey as a Developer</div>
            <div className='timeline-items-row'>
              <div className='timeline-item'></div>
              <div className='timeline-item'></div>
              <div className='timeline-item'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default All;
