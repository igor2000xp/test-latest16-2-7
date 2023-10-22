import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { formReducer, FormState } from './form-state.reducer';
import { vehiclesReducer, VehicleState } from './vehicle-state.reducer';


export interface State {
  currentVehicle: FormState;
  vehiclesState: VehicleState[];
}

export const reducers: ActionReducerMap<State> = {
  currentVehicle: formReducer,
  vehiclesState: vehiclesReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
