import React from 'react';
import '../styles/RedLink.css';

function RedLink({link,texto}) {
  return (
    <div className='RedLink'>
        <a href={link} target="_blank">{texto}</a>
    </div>
  )
}

export default RedLink