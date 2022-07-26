import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xdvg4hn', 'template_nfngnay', form.current, '7KAK4aAESCS1xv5Rh')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>contactez - moi</h5>
      <h2>disponible 24H/7j</h2>
      
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className="contact_option-icon" />
            <h4>E-mail</h4>
            <h6>alconde4@yahoo.fr</h6>
            <a href='mailto:alconde206@gmail.com' target="_blank">Envoyer texto</a>
          </article>

          <article className='contact_option'>
          <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Aliou Condé</h5>
            <a href='https://www.messenger.com/t/100012985309344' target="_blank">Envoyer texto</a>
          </article>

          <article className='contact_option'>
          <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>0033629463222</h5>
            <a href='' target="_blank">Envoyer texto</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='prenom' placeholder='Votre prénom' required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea name="message" cols="90" rows="7" placeholder='Votre message'></textarea>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div> 
  </section>
  )
}

export default Contact