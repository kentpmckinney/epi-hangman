import reducer from '../reducers/reducer';

describe('reducer tests', () => {

  test('set secret word', () => {
    const action = { type: 'SET_SECRET_WORD', secretWord: 'abracadabra' };
    const state = reducer({}, action);
    expect(state).toEqual({ secretWord: 'abracadabra', letterGuessed: '', revealedWord: '-----------', bodyPartsRemaining: ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'] });
  });

  test('submitting a correct letter', () => {
    const action = { type: 'SUBMIT_LETTER', letterGuessed: 'a' };
    let state = { secretWord: 'abracadabra', letterGuessed: '', revealedWord: '-----------', bodyPartsRemaining: ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'] };
    state = reducer(state, action);
    expect(state).toEqual({ secretWord: 'abracadabra', letterGuessed: 'a', revealedWord: 'a--a-a-a--a', bodyPartsRemaining: ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'] });
  });

  test('submitting an incorrect letter', () => {
    const action = { type: 'SUBMIT_LETTER', letterGuessed: 'q' };
    let state = { secretWord: 'abracadabra', letterGuessed: '', revealedWord: '-----------', bodyPartsRemaining: ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'] };
    state = reducer(state, action);
    expect(state).toEqual({ secretWord: 'abracadabra', letterGuessed: 'q', revealedWord: '-----------', bodyPartsRemaining: ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot'] });
  });

});