import React from 'react';
import { connect } from 'react-redux';
import Drawing from './Drawing/Drawing';
import Form from './Form/Form';
import Display from './Display/Display';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch({ type: 'SET_SECRET_WORD', secretWord: 'abracadabra' })
  }

  handleLetterSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'SUBMIT_LETTER', letterGuessed: event.target.input.value });
    event.target.input.value = '';
  }

  render() {
    if (this.props.secretWord) {
      return (
        <div className="App">
          <Drawing bodyParts={this.props.bodyParts} />
          <Display revealedWord={this.props.revealedWord} />
          <br />
          <Form onLetterSubmitted={this.handleLetterSubmit} />
        </div>
      );
    }
    else {
      return <div className="App"></div>
    }
  }
}

const mapStateToProps = state => {
  return {
    secretWord: state.secretWord,
    letterGuessed: state.letterGuessed,
    revealedWord: state.revealedWord,
    bodyParts: state.bodyParts,
    gameOver: state.gameOver,
    hasWon: state.hasWon
  }
}
App = connect(mapStateToProps)(App);
export default App;