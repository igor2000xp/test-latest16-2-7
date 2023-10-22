import { formReducer, initialState } from './form-state.reducer';

describe('FormState Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = formReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
