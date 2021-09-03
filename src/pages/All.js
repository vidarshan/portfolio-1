import React from 'react';

const All = () => {
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
    </>
  );
};

export default All;
