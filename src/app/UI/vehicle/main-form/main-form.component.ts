import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { FormState } from 'src/app/store/actions/form-state.actions';
import { insertDashes } from 'src/app/helpers';
import { KentekenCheck } from 'rdw-kenteken-check'

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  vehicleFormGroup: FormGroup;
  licencePlate = '';
  // @Input() validatingLicencePlate = 'initial value';
  validatingLicencePlate = 'initial value';
  isLicencePlateValid = false;
  isLicencePlateExist = false;

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
  onChangeFormatting(): void {
    this.licencePlate = insertDashes(this.vehicleFormGroup.get('formattingLicencePlate')?.value).toUpperCase();
    console.log(this.licencePlate);
    // this.licencePlate = this.vehicleFormGroup.value.formattingLicencePlate;
    // console.log(this.licencePlate);
    this.store.dispatch(FormState.currentLicencePlate({ currentFormattingLicencePlate: this.licencePlate }));
    const kt = new KentekenCheck(this.licencePlate);
    // const kt = new KentekenCheck('JFK01P');
    // JFK01P
    // wx12nz
    // g241gh
    // this.isLicencePlateExist = kt.bindInputListener();
    // this.isLicencePlateExist = kt.classValid;
    console.log(kt.formatLicense());
    this.isLicencePlateValid = kt.valid;
    console.log(this.isLicencePlateValid);
    // console.log(kt.getValue());
    // console.log(kt.bindInputListener());
  }

  // validatingLicencePlate(): any {
  //   // return this.form.get('validatingLicencePlate');
  // }
  // onChangeValidating(events: HTMLInputElement): void {
  //   console.log(this.vehicleFormGroup.value.validatingLicencePlate);
  //   const inputElm = events;
  //   var outputElm: HTMLInputElement;
  //   const kt = new KentekenCheck('JFK01P');
  //   this.isLicencePlateValid = kt.formatLicense() !== 'XX-XX-XX' ? true : false;
  //   console.log(kt.formatLicense());
  //   console.log(kt.bindInputListener());

  // console.log(this.validatingLicencePlate);
  // this.licencePlateCheck = insertDashes(this.licencePlateCheck).toUpperCase();
  // this.validatingLicencePlate = inputElement.value;

  // }
  onSubmit(): void {
    console.log(this.vehicleFormGroup.value);
  }
}
