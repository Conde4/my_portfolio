import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
        <h5>Mes Compétences</h5>
        <h2>Mon Expérience</h2>

        <div className="container experience_container">
          <div className='experience_frontend'>
             <h3>Frontend Développement</h3>
             <div className='experience_content'>
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon'/>
                 <div>
                   <h4>HTML/CSS</h4>
                   <small className='text-light'></small>
                 </div>
              </article>
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                    <h4>JAVASCRIPT</h4>
                    <small className='text-light'></small>
                  </div>
              </article>
              { /*===== 
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                     <h4>JQUERY</h4>
                     <small className='text-light'></small>
                 </div>
              </article>
              =====*/ }
               
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                     <h4>REACT-JS</h4>
                     <small className='text-light'></small>
                  </div>
             </article> 
             
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                    <h4>BOOSTRAP</h4>
                    <small className='text-light'></small>
                 </div>
              </article>
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                    <h4>SYMFONY</h4>
                    <small className='text-light'></small>
                 </div>
               </article>
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div>
                   <h4>WORDPRESS</h4>
                   <small className='text-light'></small>
                 </div>
              </article>
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon'/>
                 <div>  
                    <h4>CMS - SHOPIFY</h4>
                    <small className='text-light'></small>
                  </div>
              </article>
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                    <h4>GITHUB/GIT</h4>
                    <small className='text-light'></small>
                </div>
              </article>
             </div>
            </div>

           { /* Backend */}

          <div className='experience_backend'>
              <h3>Backend Développement</h3>
              <div className='experience_content'>
               <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                   <h4>PHP</h4>
                   <small className='text-light'></small>
                 </div>
               </article>
               <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                    <h4>MYSQL</h4>
                    <small className='text-light'></small>
                </div>
               </article>
               <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icon' />
                 <div> 
                    <h4>NODE-JS</h4>
                    <small className='text-light'></small>
                  </div>
               </article>
            </div>
          </div>
       </div>
      </section>
  )
}

export default Experience