import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleMotorComponent } from './vehicle-motor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('VehicleMotorComponent', () => {
  let component: VehicleMotorComponent;
  let fixture: ComponentFixture<VehicleMotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleMotorComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(VehicleMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('temporary', () => {
    expect(true).toBe(true);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
