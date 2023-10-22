import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  vehicleForm: FormGroup;

  constructor() {
    this.vehicleForm = new FormGroup({});
  }

  ngOnInit() {
    this.vehicleForm.addControl('vehicleType', new FormControl(null, Validators.required));
    this.vehicleForm.addControl('vehicleSubtype', new FormControl(null, Validators.required));
    this.vehicleForm.addControl('formattingLicencePlate', new FormControl(null, Validators.required));
    this.vehicleForm.addControl('validatingLicencePlate', new FormControl(null, Validators.required));
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
