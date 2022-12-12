import { ValidatorFn } from "@angular/forms";

export function wholeNumValidator(): ValidatorFn {
    return (control) => {
        if (control.value == Number(control.value) && Number(control.value) <= 999 && Number(control.value) >= 1) {
            return (control.value === '' || Number(control.value) == Math.floor(Number(control.value))) ? null : { wholeNumValidator: true };
        } else {
            return null;
        }
    };
}