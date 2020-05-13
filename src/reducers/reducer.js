export default (state = {}, action) => {
  const { type, secretWord, letterGuessed, bodyPartsRemaining } = action;
  switch (type) {
    case 'SET_SECRET_WORD':
      let newState = state;
      newState.secretWord = secretWord;
      newState.letterGuessed = '';
      newState.bodyPartsRemaining = ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'];
      return newState;
    case 'SUBMIT_LETTER':
      return state;
    default:
      return state;
  }
}