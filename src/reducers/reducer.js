export default (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case 'SET_SECRET_WORD':
      newState.secretWord = action.secretWord;
      newState.letterGuessed = '';
      newState.revealedWord = action.secretWord.replace(/.{1}/g, '-');
      newState.bodyParts = [];
      newState.gameOver = false;
      newState.hasWon = false;
      return newState;
    case 'SUBMIT_LETTER':
      Object.assign(newState, state);
      newState.letterGuessed = action.letterGuessed;
      newState.secretWord = state.secretWord;
      newState.hasWon = state.hasWon;
      newState.gameOver = state.gameOver;
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
      newState.revealedWord = newRevealedWord.join('');
      if (newState.revealedWord === state.secretWord) { newState.hasWon = true; }
      newState.bodyParts = state.bodyParts;
      const isLetterInSecretWord = state.secretWord.includes(action.letterGuessed);
      if (isLetterInSecretWord) {
        return newState;
      } else {
        switch (newState.bodyParts[newState.bodyParts.length - 1]) {
          case 'left leg': newState.bodyParts.push('right leg');
            newState.gameOver = true;
            break;
          case 'right arm': newState.bodyParts.push('left leg');
            break;
          case 'left arm': newState.bodyParts.push('right arm');
            break;
          case 'torso': newState.bodyParts.push('left arm');
            break;
          case 'head': newState.bodyParts.push('torso');
            break;
          default: newState.bodyParts.push('head');
            break;
        }
        return newState;
      }
    default:
      return state;
  }
}