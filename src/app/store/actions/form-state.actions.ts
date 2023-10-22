import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const FormState = createActionGroup({
  source: 'FormState',
  events: {
    currentVehicleType: props<{ currentVehicleType: string }>(),
    currentVehicleSubtype: props<{ currentVehicleSubtype: string }>(),
    currentLicencePlate: props<{ currentFormattingLicencePlate: string }>(),
  }
});
