import { createReducer, on } from '@ngrx/store';
import { FormState } from '../actions/form-state.actions';

export const formStateFeatureKey = 'formState';

export interface FormState {
  currentVehicleType: string;
  currentVehicleSubtype: string;
  currentFormattingLicencePlate: string;
}

export const initialState: FormState = {
  currentVehicleType: '',
  currentVehicleSubtype: '',
  currentFormattingLicencePlate: '',
};

export const formReducer = createReducer(
  initialState,
  on(FormState.currentVehicleType, (state, { currentVehicleType }) => ({ ...state, currentVehicleType })),
  on(FormState.currentVehicleSubtype, (state, { currentVehicleSubtype }) => ({ ...state, currentVehicleSubtype })),
  on(FormState.currentLicencePlate, (state, { currentFormattingLicencePlate }) => ({ ...state, currentFormattingLicencePlate })),

);

