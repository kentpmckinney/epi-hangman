import React from 'react';
import { connect } from 'react-redux';
import Drawing from './Drawing/Drawing';
import Form from './Form/Form';
import Display from './Display/Display';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secretWord: '', letterGuessed: '', revealedWord: '', bodyPartsRemaining: '' }
    props.dispatch({ type: 'SET_SECRET_WORD', secretWord: 'abracadabra' })
  }

  handleLetterSubmit = event => {
    console.log('here')
    this.props.dispatch({ type: 'SUBMIT_LETTER', letterGuessed: event.target.input.letter });
  }

  render() {
    return (
      <div className="App">
        <Drawing bodyParts={['head', 'torso', 'left arm', 'right arm', 'left leg', 'right leg']} />
        <Display revealedWord={this.props.revealedWord} />
        <Form onLetterSubmitted={this.handleLetterSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    secretWord: state.secretWord,
    letterGuessed: state.letterGuessed,
    revealedWord: state.revealedWord,
    bodyPartsRemaining: state.bodyPartsRemaining
  }
}
App = connect(mapStateToProps)(App);
export default App;