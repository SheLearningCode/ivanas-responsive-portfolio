import React from 'react'
import './about.css'
import myImage from '../../assets/me.gif'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import { BsDribbble } from "react-icons/bs"
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id='about'>
      
      <h5>{t('get to know')}</h5>
      <h2>{t('About Me')}</h2> {/* About Me */}

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
                  <h5>{t('degree')} </h5>
                  <small>{t('Computer Science Expert')} <br />{t('Software Development')}<br /><i>IHK Munich </i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>{t('Talk to me in')}:</h5>
                  <small>
                    <ul>
                      <li>{t('English')}</li>
                      <li>{t('German')}</li>
                      <li>{t('Spanish')}</li>
                      <li>{t('Serbian')}</li>
                      <li>{t('Polish')}</li>
                      <li>{t('Portuguese')}</li>
                    </ul>
                  </small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>{t('Experience')}:</h5>
                  <small>
                    <ul>
                      <li>{t('Internship Year')}</li>
                      <li>{t('@Novatec GmbH')}</li>
                      <li>{t('Fulltime')}</li>
                      <li>{t('2022-2023')}</li>
                      <li>{t('Full Stack Development')}</li>
                    </ul>
                  </small>
              </article>

              <article className='about__card'>
                  <BsDribbble className='about__icon'/>
                  <h5>{t('Hobbies:')}</h5>
                  <small>
                    <ul>
                      <li>{t('Basketball')}</li>
                      <li>{t('IT-Trends')}</li>
                      <li>{t('Traveling')}</li>
                      <li>{t('Psychology')}</li>
                      <li>{t('Gardening')}</li>
                    </ul>
                  </small>
              </article>

            </div>
            <p>
              {t('As an enthusiastic')}<b>{t('Junior Software Developer')}</b>, 
              {t('I possess a strong passion for problem-solving and')}
              {t('creating innovative solutions.')} 
              {t('I thrive in collaborative environments, actively sharing ideas and embracing teamwork.')}
              {t('With a grateful attitude, I approach challenges with a positive mindset, always eager to learn and grow.')}
              {t('Outside of the tech world, I enjoy exploring different cultures, languages')}, 
              {t('and engaging in recreational activities such as playing basketball')}.
              {t('I am committed to making a meaningful contribution to the industry and constantly expanding my skillset.')}
            </p>

          </div>
      </div>
    </section>
  )
}

export default About