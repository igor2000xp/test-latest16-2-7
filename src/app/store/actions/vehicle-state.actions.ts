import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const VehicleStateActions = createActionGroup({
  source: 'VehicleState',
  events: {
    addVehiclesState: props<{ vehicleState: string, vehicleStateSubtype: string, vehicleLicencePlate: string }>(),
  }
});
