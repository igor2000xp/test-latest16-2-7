import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MainFormComponent } from './UI/vehicle/main-form/main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VehicleMotorComponent } from './UI/vehicle/main-form/vehicle-motor/vehicle-motor.component';
import { VehicleAutoComponent } from './UI/vehicle/main-form/vehicle-auto/vehicle-auto.component';
import { VehicleScooterComponent } from './UI/vehicle/main-form/vehicle-scooter/vehicle-scooter.component';


@NgModule({
  declarations: [AppComponent, MainFormComponent, VehicleMotorComponent, VehicleAutoComponent, VehicleScooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
