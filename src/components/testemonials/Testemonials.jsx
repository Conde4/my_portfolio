import React from 'react'
import './testemonials.css'
import LAURA  from '../../assets/laura.jpg'
import AVATA2  from '../../assets/avatar2.jpg'
import AVATA3  from '../../assets/avatar3.jpg'
import AVATA4  from '../../assets/avatar4.jpg'



const Testemonials = () => {
  return (
    <section id='testimonials'>
      <h5>Témoignages </h5>
      <h2>Avis</h2>

      <div className="container testimonials_container"> 
      <article className='testimonials'>
          <div className='client_avatar'>
            <img src={LAURA} alt="Avatar One" />
          </div>
            <h5 className='client_name'>Laura Maurice</h5>
            <small className='client_revieuw'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis optio culpa fugit veniam reprehenderit! Est quisquam
            </small>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={LAURA} alt="Avatar One" />
          </div>
            <h5 className='client_name'>Laura Maurice</h5>
            <small className='client_revieuw'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis optio culpa fugit veniam reprehenderit! Est quisquam
            </small>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={LAURA} alt="Avatar One" />
          </div>
            <h5 className='client_name'>Laura Maurice</h5>
            <small className='client_revieuw'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis optio culpa fugit veniam reprehenderit! Est quisquam
            </small>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={LAURA} alt="Avatar One" />
          </div>
            <h5 className='client_name'>Laura Maurice</h5>
            <small className='client_revieuw'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis optio culpa fugit veniam reprehenderit! Est quisquam
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testemonials