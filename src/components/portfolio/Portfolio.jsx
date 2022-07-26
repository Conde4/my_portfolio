import React from 'react'
import './portfolio.css'
import TEANE from  '../../assets/teane.jpg'
import FOLIO from '../../assets/folio.jpeg'
import COMPAGNY from  '../../assets/vncompagny.jpeg'
import HAMMAM from   '../../assets/Hammam.jpeg'
import AGUIFEM from  '../../assets/aguifem.jpeg'
import YAPO from  '../../assets/yapo.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfolio</h5>
      <h2>Mes projets réalisés ou en cours..</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={TEANE} alt="Laboratoires teane" />
          </div>

            <h3>Entreprise de Cosmétique</h3>
            <div className="portfolio_item-image"> 
                <a href='https://teane.com' className='btn' target='_blank'>Laboratoires Teane</a>
            </div>
        </article>
        
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={FOLIO} alt="portfolio" />
          </div>

            <h3>Vous étes sur ce site actuellement</h3>
            <div className="portfolio_item-image"> 
                <a href='https://teane.com' className='btn' target='_blank'>Merci de votre Visite</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={COMPAGNY} alt="vn compagny" />
          </div>

            <h3>VN Compagny</h3>
            <div className="portfolio_item-image"> 
                <a href='https://www.vncompagny.com' className='btn' target='_blank'>VN Compagny</a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={HAMMAM} alt="Centre de beauté" />
          </div>

            <h3>Centre de Soins et Beauté</h3>
            <div className="portfolio_item-image"> 
                <a href='https://hammamsamba.fr' className='btn' target='_blank'>Hammam Samba</a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={AGUIFEM} alt="aguifem association" />
          </div>

            <h3>Association Humanitaire</h3>
            <div className="portfolio_item-image"> 
                <a href='https://www.aguifem-assos.org' className='btn' target='_blank'>Association Aguifem</a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={YAPO} alt="Laboratoires teane" />
          </div>

            <h3>Vente de mode Africaine (En cours)</h3>
            <div className="portfolio_item-image"> 
                <a href='#' className='btn' target='_blank'>Yapoga Afro</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio