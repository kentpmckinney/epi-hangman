import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.onLetterSubmitted}>
      <input id='input' maxLength='1' />
      <button>Submit</button>
    </form>
  )
}

export default Form;