import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleScooterComponent } from './vehicle-scooter.component';

describe('VehicleScooterComponent', () => {
  let component: VehicleScooterComponent;
  let fixture: ComponentFixture<VehicleScooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleScooterComponent]
    });
    fixture = TestBed.createComponent(VehicleScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
