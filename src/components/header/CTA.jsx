import React from 'react'
import CV from '../../assets/moncv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href="#" download className='btn'>Télecharger mon CV</a>
        <a href='#contact' className='btn btn-primary'>Je vous écoute</a>
    </div>
  )
}

export default CTA