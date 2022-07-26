import React from 'react'
import './certification.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Certification = () => {
  return (
    <section id='certification'>
        <h5>Certification</h5>
        <h2>Mes Certficats</h2>
        <div className='container certification_container'>
            <div className='experience_frontend'>
             <div className='certfication_content'>
              <article className='certification_details'>
                 <BsPatchCheckFill className='certification_details-icon'/>
                 <div>
                   <h4>Sécurité Informatique (Simplon Paris)</h4>
                   <small className='text-light'></small>
                 </div>
              </article>
              <article className='certification_details'>
                 <BsPatchCheckFill className='certification_details-icon' />
                 <div> 
                    <h4>Marketing Digital (Google France)</h4>
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
               
              <article className='certification_details'>
                 <BsPatchCheckFill className='certification_details-icon' />
                 <div> 
                     <h4>Protection de la vie privée dans le monde numérique (Centre INRIA)</h4>
                     <small className='text-light'></small>
                  </div>
             </article> 
             
              <article className='certification_details'>
                 <BsPatchCheckFill className='certification_details-icon' />
                 <div> 
                    <h4>html/css,Javascript (Openclassroom)</h4>
                    <small className='text-light'></small>
                 </div>
              </article>
              <article className='certification_details'>
                 <BsPatchCheckFill className='certification_details-icon' />
                 <div> 
                    <h4>Réseaux Sociaux (Openclassroom)</h4>
                    <small className='text-light'></small>
                 </div>
               </article>
              <article className='certification_details'>
                 <BsPatchCheckFill className='certification_details-icon' />
                 <div>
                   <h4>WordPress(Openclassroom)</h4>
                   <small className='text-light'></small>
                 </div>
              </article>
               {/*
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
            */}
             </div>
            </div>
            </div>
    </section>
  )
}

export default Certification