import React from 'react'
import './services.css' 
import {BsCheck} from 'react-icons/bs'


const Services = () => {
  return (
    <section id='services'>
      <h5>Mes Services</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        
        <articles className='service'>
          <div className='service_head'>
            <h3>Développement Web</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Conception de Site Web</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Conception d'application sur mésure et clé en main,en tenant compte des enjeux actuels et selon les meilleurs standarts</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Améliorer vos performances grace à la création ou la refonte de vote site </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Accompagner dans vréation d'une stratégie de marque efficace et conseils afin de rendre votre site dynamique.</p>
            </li>
          </ul>
        </articles>

        <articles className='service'>
          <div className='service_head'>
            <h3>Marketing Digital</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Développez votre entreprise et vos conversions avec la publicité sociale personnalisée.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Création et monétisation de vos plateformes(Site,Facebook,Youtube)</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Augmenter vos positionnement et conversions avec une strategie de referencement payant(SEA).</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Améliorer votre réferencement naturel à une stratégie SEO basée sur vos données.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Développer votre entreprise et vos conversions avec la publicité sociale personnalisée.</p>
            </li>
          </ul>
        </articles>

        <articles className='service'>
          <div className='service_head'>
            <h3>Createur de contenu</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Conception des flyers et logo pour votre marque.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Conception et montage des vidéos.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Création et Gestion de vos réseaux sociaux.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Rédaction Web et grahisme.</p>
            </li>
          </ul>
        </articles>
      </div>
    </section>
  )
}

export default Services