export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_SECRET_WORD':
      let newState = {};
      newState.secretWord = action.secretWord;
      newState.letterGuessed = '';
      newState.revealedWord = action.secretWord.replace(/.{1}/g, '-');
      newState.bodyPartsRemaining = ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'];
      return newState;
    case 'SUBMIT_LETTER':
      let newState2 = {};
      newState2.letterGuessed = action.letterGuessed;
      newState2.secretWord = state.secretWord;
      let oldRevealedWord = state.revealedWord;
      oldRevealedWord = oldRevealedWord.split('');
      let newRevealedWord = [];
      oldRevealedWord.forEach((letter, index) => {
        const isDashed = letter === '-';
        const isGuessedLetterEqualToSecretLetter = action.letterGuessed === state.secretWord.split('')[index];
        if (isDashed) {
          if (isGuessedLetterEqualToSecretLetter) {
            newRevealedWord.push(action.letterGuessed);
          } else {
            newRevealedWord.push('-');
          }
        } else {
          newRevealedWord.push(letter);
        }
      });
      newState2.revealedWord = newRevealedWord.join('');
      newState2.bodyPartsRemaining = state.bodyPartsRemaining;
      const isLetterInSecretWord = state.secretWord.includes(action.letterGuessed);
      if (isLetterInSecretWord) {
        // secret word contains the letter
        return newState2;
      } else {
        // secret word does NOT contain the letter
        let newBodyPartsRemaining = newState2.bodyPartsRemaining;
        newBodyPartsRemaining.pop();
        newState2.bodyPartsRemaining = newBodyPartsRemaining;
        return newState2;
      }
    default:
      return state;
  }
}