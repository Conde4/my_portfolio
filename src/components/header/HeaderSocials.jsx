import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="https://www.linkedin.com/in/aliou-cond%C3%A9-1892b6175/" target='_blank'><BsLinkedin /></a>
    <a href="https://www.facebook.com/princealiou.conde" target='_blank'><BsFacebook /></a>
    <a href="" target='_blank'><BsWhatsapp /></a>
    <a href="https://github.com/Conde4" target='_blank'><AiOutlineGithub /></a>      
</div>
  )
}

export default HeaderSocials