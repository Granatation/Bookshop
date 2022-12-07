import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(): ValidatorFn {
  const regex = new RegExp(`^[^@]{6,20}@[a-z]{2,20}\.(com|bg)$`);
  return (control) => {
    return (control.value === '' || regex.test(control.value)) ? null : { appEmailValidator: true };
  };
}