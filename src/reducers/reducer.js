export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_SECRET_WORD':
      let newState = {};
      newState.secretWord = action.secretWord;
      newState.letterGuessed = '';
      newState.revealedWord = action.secretWord.replace(/.{1}/g, '-');
      newState.bodyParts = [];
      newState.gameOver = false;
      newState.hasWon = false;
      return newState;
    case 'SUBMIT_LETTER':
      let newState2 = {};
      newState2.letterGuessed = action.letterGuessed;
      newState2.secretWord = state.secretWord;
      newState2.hasWon = state.hasWon;
      newState2.gameOver = state.gameOver;
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
      if (newState2.revealedWord === state.secretWord) { newState2.hasWon = true; }
      newState2.bodyParts = state.bodyParts;
      const isLetterInSecretWord = state.secretWord.includes(action.letterGuessed);
      console.log(isLetterInSecretWord)
      if (isLetterInSecretWord) {
        // secret word contains the letter
        return newState2;
      } else {
        // secret word does NOT contain the letter
        console.log(newState2.bodyParts[newState2.bodyParts.length - 1])
        switch (newState2.bodyParts[newState2.bodyParts.length - 1]) {
          case 'left leg':
            newState2.bodyParts.push('right leg');
            newState2.gameOver = true;
            break;
          case 'right arm':
            newState2.bodyParts.push('left leg');
            break;
          case 'left arm':
            newState2.bodyParts.push('right arm');
            break;
          case 'torso':
            newState2.bodyParts.push('left arm');
            break;
          case 'head':
            newState2.bodyParts.push('torso');
            break;
          default:
            newState2.bodyParts.push('head');
            break;
        }

        return newState2;
      }
    default:
      return state;
  }
}