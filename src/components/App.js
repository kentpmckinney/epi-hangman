import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secretWord: '', letterGuessed: '', revealedWord: '', bodyPartsRemaining: '' }
    props.dispatch({ type: 'SET_SECRET_WORD', secretWord: 'abracadabra' })
  }

  handleGuessClick = event => {
    this.props.dispatch({ type: 'SUBMIT_LETTER', letterGuessed: document.getElementById('input').value });
  }

  render() {
    return (
      <div className="App">
        <div>
          {`Secret Word: ${this.props.revealedWord}`}
          <br />
          {`Body Parts Remaining: ${this.props.bodyPartsRemaining ? this.props.bodyPartsRemaining.join(', ') : ''}`}
        </div>
        <input id='input'></input>
        <button onClick={this.handleGuessClick}>Guess</button>
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