import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VehicleEffects } from './vehicle.effects';

describe('VehicleEffects', () => {
  let actions$: Observable<any>;
  let effects: VehicleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehicleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VehicleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
