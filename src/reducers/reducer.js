export default (state = [], action) => {
  const { type, secretWord, letterGuessed, bodyPartsRemaining } = action;
  switch (type) {
    case 'SET_SECRET_WORD':
      return state;
    case 'SUBMIT_LETTER':
      return state;
    default:
      return state;
  }
}