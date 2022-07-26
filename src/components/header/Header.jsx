import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello, Je suis</h5>
            <h1>Aliou CONDE</h1>
            <h5 className='text-align'>Développeur Web & Mobile </h5>
            <CTA />
            <HeaderSocials />
            

            <div className='me'>
                <img src={ME} alt='me' />
            </div>

            <a href='#contact' className='scroll_down'>Parcourir le site</a>
        </div>
    </header>
  )
}

export default Header
