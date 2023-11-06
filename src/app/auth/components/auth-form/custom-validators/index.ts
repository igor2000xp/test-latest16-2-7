// Defining custom validators https://angular.io/guide/form-validation#defining-custom-validators


import { AbstractControl, FormControl } from "@angular/forms";

export const checkUpperLower = (control: FormControl): null | { [key: string]: boolean } => {
  const value = control.value;
  const isError = !(/(?=.*[a-z])(?=.*[A-Z])+/.test(value));
  if (isError) {
    return { upperLowerError: true };
  }
  return null;
};

// export const checkUpperLower = (control: FormControl): null | { [key: string]: boolean } => {
//   const rexP = new RegExp('(?=.*[a-z])(?=.*[A-Z])');
//   if (!control.value.match(rexP)) {
//     return { upperLowerError: true };
//   }
//   return null;
// }

/** A hero's name can't match the given regular expression */
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {forbiddenName: {value: control.value}} : null;
//   };
// }

export const checkDigit = (control: FormControl): null | { [key: string]: boolean } => {
  const value = control.value;
  const isError = !(/(?=.*\d)/.test(value));
  if (isError) {
    return { digitError: true }
  }
  return null;
}

export const checkSymbols = (control: FormControl): null | { [key: string]: boolean } => {
  const value = control.value;
  const isError = !(/[!_@#$&*%]+/.test(value));

  if (isError) {
    return { symbolError: true };
  }
  return null;
}

// Custom validator function
export const passwordMatchValidator = (control: AbstractControl) => {
  const pass1 = control?.get('password')?.value;
  const pass2 = control?.get('passwordRetype')?.value;

  if (pass1 === pass2) {
    return null; // Passwords match, no error
  } else {
    return { passwordMismatch: true }; // Passwords don't match, return an error object
  }
}
