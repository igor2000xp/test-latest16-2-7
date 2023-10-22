import { createReducer, on } from '@ngrx/store';
import { VehicleStateActions } from '../actions/vehicle-state.actions';

export const vehicleStateFeatureKey = 'vehicleState';

export interface VehicleState {
  vehicleState: string;
  vehicleStateSubtype: string;
  vehicleLicencePlate: string;
}

export const initialState: VehicleState[] =
  [{
    vehicleState: '',
    vehicleStateSubtype: '',
    vehicleLicencePlate: '',
  }];

export const vehiclesReducer = createReducer(
  initialState,
  on(VehicleStateActions.addVehiclesState, (state, { vehicleState, vehicleStateSubtype, vehicleLicencePlate }) => ({ ...state, ...[{ vehicleState, vehicleStateSubtype, vehicleLicencePlate }] })),
);

