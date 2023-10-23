import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAutoComponent } from './vehicle-auto.component';

describe('VehicleAutoComponent', () => {
  let component: VehicleAutoComponent;
  let fixture: ComponentFixture<VehicleAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleAutoComponent]
    });
    fixture = TestBed.createComponent(VehicleAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
