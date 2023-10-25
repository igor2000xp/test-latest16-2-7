import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { VehicleState } from '../reducers/vehicle-state.reducer'

// export const vehiclesSelector = (state: State): VehicleState[] => state.vehiclesState;
const state = (state: State) => state;
export const vehiclesSelector = createSelector(
  state,
  (state) => state.vehiclesState
);
