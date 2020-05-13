import reducer from '../reducers/reducer';

describe('reducer tests', () => {

  test('set secret word', () => {
    const action = { type: 'SET_SECRET_WORD', secretWord: 'abracadabra' };
    const state = reducer({}, action);
    expect(state).toEqual({ secretWord: 'abracadabra', letterGuessed: '', bodyPartsRemaining: ['head', 'torso', 'left arm', 'right arm', 'left hand', 'right hand', 'left leg', 'right leg', 'left foot', 'right foot'] });
  });



});