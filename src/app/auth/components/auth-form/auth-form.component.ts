import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkDigit, checkSymbols, checkUpperLower, passwordMatchValidator } from './custom-validators';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  MIN_LENGTH_NAME = 2;
  MAX_LENGTH_NAME = 50;
  MIN_LENGTH_PASSWORD = 8;
  MAX_LENGTH_EMAIL = 50;
  authGroup: FormGroup;
  authGroupValue: string;
  isVisibleErrorName: boolean = false;
  isValidName: boolean = false;
  isVisibleMailError: boolean = false;
  isMailValid: boolean = false;
  isMailRight: boolean = false;
  isMailMaxLenght: boolean = false;
  isVisiblePassErrors: boolean = false;
  isPasswordValid: boolean = false;
  isCheckedUpperLowerPass: boolean = false;
  isCheckedDigitPass: boolean = false;
  isCheckedSymbolsPass: boolean = false;
  isCheckedLengthPass: boolean = false;
  isTwoPassIsEquill: boolean = false;

  // You can also do this or replace the onInit with this:

  // authGroup: FormGroup = this.fb.nonNullable.group({
  //   name: ['', Validators.required, Validators.minLength(2), Validators.maxLength(12)],
  //   email: ['', Validators.required, Validators.email],
  //   password: ['', Validators.required, Validators.minLength(8)],
  //   passwordRetype: ['', Validators.required, Validators.minLength(8)],
  //  }, { validators: passwordMatchValidator });

  constructor(private fb: FormBuilder) {
    this.authGroup = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(this.MIN_LENGTH_NAME), Validators.maxLength(this.MAX_LENGTH_NAME)]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(this.MAX_LENGTH_EMAIL)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(this.MIN_LENGTH_PASSWORD),
        checkUpperLower,
        checkDigit,
        checkSymbols,
      ]],
      passwordRetype: ['', [
        Validators.required,
        // passwordMatchValidator,
      ]],
    }, { validators: passwordMatchValidator });
    // this.isValidName = this.authGroup.get('name')?.status === 'VALID' && this.authGroup!.get('name')?.touched === true ? true : false;
    // You can also do this witout nonNullable:
    // this.authGroup = this.fb.group({
    //   name: ['', Validators.required, Validators.minLength(2), Validators.maxLength(12)],
    //   email: ['', Validators.required, Validators.email],
    //   password: ['', Validators.required, Validators.minLength(8)],
    //   passwordRetype: ['', Validators.required, Validators.minLength(8)],
    //  }, { validators: passwordMatchValidator });
  }
  get name() {
    return this.authGroup.get('name');
  }
  get email() {
    return this.authGroup.get('email');
  }
  get password() {
    return this.authGroup.get('password');
  }
  get passwordRetype() {
    return this.authGroup.get('passwordRetype');
  }
  get passwordEqual() {
    return this.authGroup.hasError('passwordMismatch') ? true : false;
  }
  get authStatus() {
    return this.authGroup.status === 'VALID';
  }

  onChangeName() {
    const name = this.authGroup!.get('name');
    this.isVisibleErrorName = name?.invalid || name?.touched ? true : false;
    this.isValidName = name?.status === 'VALID' ? true : false;
  }
  onChangeMail() {
    const email = this.email;
    this.isVisibleMailError = email!.status !== 'VALID' || email!.touched ? true : false;
    this.isMailValid = (email!.status === 'VALID') ? true : false;
    this.isMailRight = email!.errors?.['email'] ? false : true;
    // You need to be very careful with this, because in email!.errors?.['maxlength'] is maxlength but not maxLength.
    this.isMailMaxLenght = email!.errors?.['maxlength'] ? false : true;
  }

  onChangePassword() {
    const password = this.password;
    this.isVisiblePassErrors = password?.status !== 'VALID' || password.touched ? true : false;
    this.isCheckedUpperLowerPass = password?.errors?.['upperLowerError'] ? false : true;
    this.isCheckedLengthPass = password?.errors?.['minlength'] ? false : true;
    this.isCheckedDigitPass = password?.errors?.['digitError'] ? false : true;
    this.isCheckedSymbolsPass = password?.errors?.['symbolError'] ? false : true;
  }
  onChangePasswordRetype() {
    const isEqual = this.passwordEqual;
    this.isTwoPassIsEquill = (this.password!.touched ? true : false) && (this.passwordRetype!.status === 'VALID' ? true : false) && isEqual;
  }

  onSubmit() {
    console.log(this.authGroup);
    // this.isValidName = this.authGroup!.get('name')?.status === 'VALID' && this.authGroup!.get('name')?.touched === true ? true : false;
    // console.log(this.authGroup.value);
    // this.authGroupValue = JSON.stringify(this.authGroup.value);
    // console.log(this.authGroup!.get('name'));
    // console.log(this.isValidName);
  }
}
