import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormState } from 'src/app/store/actions/form-state.actions';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-vehicle-auto',
  templateUrl: './vehicle-auto.component.html',
  styleUrls: ['./vehicle-auto.component.scss']
})
export class VehicleAutoComponent implements OnInit {

  autoForm: FormGroup;
  // autoSubtype = new FormControl();
  // constructor() {
  //   this.
  // }
  constructor(private store: Store<State>) {
    this.autoForm = new FormGroup({});
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.autoForm.addControl('autoSubtype', new FormControl(null, Validators.required));
  }


  onChange(value: string): void {
    this.store.dispatch(FormState.currentVehicleSubtype({ currentVehicleSubtype: value }));
  }
}
