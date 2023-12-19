import { vehiclesReducer, initialState } from './vehicle-state.reducer';

describe('VehicleState Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = vehiclesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
