import React from 'react';
import '../styles/Divider.css';
import Waves from '../img/Dividers/waves.svg'

function Divider() {
  return (
    <div className='Divider'>
        <img src={Waves} alt="divider" />
    </div>
  )
}

export default Divider