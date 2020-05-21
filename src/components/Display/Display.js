import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className='secret-word'>
      {props.revealedWord.split('').map((letter, index) => <span key={`letter-${index}`} className='letter'>{letter}</span>)}
    </div>
  )
}

export default Display;