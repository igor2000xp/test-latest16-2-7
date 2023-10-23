import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { FormState } from 'src/app/store/actions/form-state.actions';
import { insertDashes } from 'src/app/helpers';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  vehicleFormGroup: FormGroup;
  licencePlate = '';

  constructor(private store: Store<State>) {
    this.vehicleFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.vehicleFormGroup.addControl('vehicleType', new FormControl(null, Validators.required));
    this.vehicleFormGroup.addControl('formattingLicencePlate', new FormControl(null, Validators.required));
    this.vehicleFormGroup.addControl('validatingLicencePlate', new FormControl(null, Validators.required));
  }

  onChange(value: string) {
    value = insertDashes(value);
    console.log(value);
    this.store.dispatch(FormState.currentVehicleType({ currentVehicleType: value }));
  }
  onChangeFormatting() {
    this.licencePlate = insertDashes(this.licencePlate).toUpperCase();

    this.store.dispatch(FormState.currentLicencePlate({ currentFormattingLicencePlate: this.licencePlate }));
  }

  onSubmit() {
    console.log(this.vehicleFormGroup.value);
  }
}
