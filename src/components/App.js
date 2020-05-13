import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello!
    </div>
  );
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