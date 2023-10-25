import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "../reducers";

export const curruntVehicleSelector = createFeatureSelector<State>('currentVehicle');

export const curruntLicencePlateelector = createSelector(
  curruntVehicleSelector,
  (state: State) => state.currentVehicle.currentFormattingLicencePlate
);

export const currentVehicleType = createSelector(
  curruntVehicleSelector,
  (state: State) => state.currentVehicle.currentVehicleType
);

export const currentVehicleSubType = createSelector(
  curruntVehicleSelector,
  (state: State) => state.currentVehicle.currentVehicleSubtype
)