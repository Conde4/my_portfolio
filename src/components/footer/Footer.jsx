import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    
      <footer> 
      <a href='#' className='footer_logo'>Aliou Condé(Web Creator)</a>
    
      <ul className='permaliens'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>A Propos</a></li>
        <li><a href='#experience'>Expérience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#certification'>Certication</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.facebook.com/princealiou.conde/' target='_blank'><BsFacebook /></a>
        <a href="https://www.instagram.com/aliou_con2/" target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/Alconde2' target='_blank'><BsTwitter /></a>
      </div>

      <div className='footer_copyright'>
        <small>©2022 Copyright || Aliou Condé,tous droits réservés.</small>
      </div>
    </footer> 
  )
}

export default Footer