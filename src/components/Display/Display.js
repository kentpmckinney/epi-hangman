import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className='secret-word'>
      {props.revealedWord}
    </div>
  )
}

export default Display;