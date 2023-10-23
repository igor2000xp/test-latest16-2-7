import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormState } from 'src/app/store/actions/form-state.actions';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-vehicle-motor',
  templateUrl: './vehicle-motor.component.html',
  styleUrls: ['./vehicle-motor.component.scss']
})
export class VehicleMotorComponent implements OnInit {

  motorForm: FormGroup;

  constructor(private store: Store<State>) {
    this.motorForm = new FormGroup({});
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.motorForm.addControl('motorSubtype', new FormControl(null, Validators.required));

  }
  onChange(value: string): void {
    this.store.dispatch(FormState.currentVehicleSubtype({ currentVehicleSubtype: value }));
  }

}
