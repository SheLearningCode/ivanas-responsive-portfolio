import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
                <small>Personal Portfolio Website made for learning Three.js and Blender, feel free to fork.</small>
            </div>
            <h3>3D Portfolio Website</h3>
            <small className='text-light'>Three.js | React Three Fiber | TailwindCSS | Blender</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SheLearningCode/personal-3dportfolio-website" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://personal-3dportfolio-website.vercel.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
                <small>Student-Courses Management using CRUD operations and Springboot.</small>
            </div>
            <h3>Student CRM Backend Microservice</h3>
            <small className='text-light'>Spring Boot | Kotlin | REST | PostgreSQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SheLearningCode/springboot-crm-backend" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
                <small>Multi tenancy schema approach with dynamic tenant registration.</small>
            </div>
            <h3>Multi Tenancy Schema Approach</h3>
            <small className='text-light'>PostgreSQL | Quarkus | Flyway | Docker</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SheLearningCode/multi-tenancy-example" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
                <small>Student-Courses Management using CRUD operations and Quarkus.</small>
            </div>
            <h3>Student CRM Backend </h3>
            <small className='text-light'>Quarkus | Kotlin | PostgreSQL | Keycloak </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SheLearningCode/quarkus-crm-backend-microservice " target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>My Portfolio Website</h3>
            <small className='text-light'>ReactJs | EmailJs | Bootstrap5 | ThreeJs </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SheLearningCode/ivana-maksimovic" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://ivana-maksimovic.vercel.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
                <small>Visualizes and compares different sorting algorithms.</small>
            </div>
            <h3>Sorting Algorithms Visualizer</h3>
            <small className='text-light'>Java | Java AWT | Java Swing | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SheLearningCode/sorting-algorithms-visualizer-java" target="_blank" rel='noreferrer' className='btn'>Github</a> 
            </div>

        </article>
      </div>
    </section>
  )
}

export default Myprojects