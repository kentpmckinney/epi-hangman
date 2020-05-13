export default (state = {}, action) => {
  const { type, secretWord, letterGuessed, revealedWord, bodyPartsRemaining } = action;
  switch (type) {
    case 'SET_SECRET_WORD':
      let newState = state;
      newState.secretWord = secretWord;
      newState.letterGuessed = '';
      newState.revealedWord = '';
      newState.bodyPartsRemaining = ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'];
      return newState;
    case 'SUBMIT_LETTER':
      let newState2 = state;
      newState2.letterGuessed = letterGuessed;
      return newState2;
    default:
      return state;
  }
}