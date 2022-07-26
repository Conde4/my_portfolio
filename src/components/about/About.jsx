import React from 'react'
import './about.css'
import ME from '../../assets/identité2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
        <h5>Faire Connaissance</h5>
        <h2>Qui suis - je ?</h2>

        <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me-image'>
              <img src={ME} alt='Apropos Image' />
            </div>
          </div>

            <div className='about_content'>
              {/*  
             <div className='about_cards'>
                <article className='about_card'>
                    <FaAward className='about_icon'/>
                    <h5>Expérience</h5>
                    <small>Plus de 3 ans Employé</small>
                </article>
                
                <article className='about_card'>
                    <FiUsers className='about_icon'/>
                    <h5>Clients</h5>
                    <small>200+ dans le monde</small>
                </article>

                <article className='about_card'>
                    <VscFolderLibrary className='about_icon'/>
                    <h5>Projets</h5>
                    <small>6+ projets réalisés</small>
                </article>
                </div>
              */}
                <p>
                Je m’appelle Aliou Condé,j'ai effectué des études scientifiques à l'université en Guinée et en France.
                        Diplômé en Développement Web et Web mobile de l'école supérieur des technologies créatives de paris et certifié par google en marketing Digital.<br></br>
                        Passionné par le développement web, j'aime expérimenter, découvrir et apprendre des nouvelles technologies.
                        Dans ce portfolio que j'ai réalisé, je vais vous présenter mes compétences,mon parcours,mes services ainsi que mes principaux projets réalisés ou en cours de réalisations.
                        <br></br>Pour toute question, n’hésitez pas à me contacter.
                </p>

                <a href='#contact' className='btn btn-primary'>Contactez - moi</a>
            </div>
        </div>
    </section>
  )
}

export default About