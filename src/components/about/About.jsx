import React from 'react'
import './about.css'
import myImage from '../../assets/me.gif'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Computer Science Expert <br />Software Development<br /><i>IHK Munich </i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Talk to me in:</h5>
                  <small>
                    <ul>
                      <li>English</li>
                      <li>German</li>
                      <li>Spanish</li>
                      <li>Serbian</li>
                      <li>Polish</li>
                      <li>Portuguese</li>
                    </ul>
                  </small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Experience</h5>
                  <small>
                    <ul>
                      <li>Internship Year</li>
                      <li>@Novatec GmbH</li>
                      <li>Fulltime</li>
                      <li>2022-2023</li>
                      <li>Full Stack Development</li>
                    </ul>
                  </small>
              </article>

            </div>
            <p>
              As an enthusiastic <b>Junior Software Developer</b>, 
              I possess a strong passion for problem-solving and 
              creating innovative solutions. 
              I thrive in collaborative environments, actively sharing ideas and embracing teamwork.
              With a grateful attitude, I approach challenges with a positive mindset, always eager to learn and grow.
              Outside of the tech world, I enjoy exploring different cultures, languages, 
              and engaging in recreational activities such as playing basketball.
              I am committed to making a meaningful contribution to the industry and constantly expanding my skillset.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About