import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { FormState } from 'src/app/store/actions/form-state.actions';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  vehicleForm: FormGroup;
  // control = new FormControl();

  constructor(private store: Store<State>) {
    this.vehicleForm = new FormGroup({});
  }

  ngOnInit() {
    this.vehicleForm.addControl('vehicleType', new FormControl(null, Validators.required));
    // this.vehicleForm.addControl('vehicleSubtype', new FormControl(null, Validators.required));
    this.vehicleForm.addControl('formattingLicencePlate', new FormControl(null, Validators.required));
    this.vehicleForm.addControl('validatingLicencePlate', new FormControl(null, Validators.required));
  }

  onChange(value: string) {
    // value = value === null ? '' : value;
    this.store.dispatch(FormState.currentVehicleType({ currentVehicleType: value }));
  }
  // ngOnInit() {
  //   this.vehicleForm = new FormGroup({
  //     'vehicleType': new FormControl(null, Validators.required),
  //     'vehicleSubtype': new FormControl(null, Validators.required),
  //     'formattingLicencePlate': new FormControl(null, Validators.required),
  //     'validatingLicencePlate': new FormControl(null, Validators.required),
  //   });
  // }

  onSubmit() {
    console.log(this.vehicleForm.value);
  }
}
