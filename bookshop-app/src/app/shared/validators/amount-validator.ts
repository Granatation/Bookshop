import { ValidatorFn } from "@angular/forms";

export function amountValidator(avail: number): ValidatorFn {
    return (control) => {
        if (control.value == Number(control.value) && Number(control.value) >= 1  && control.value == Math.floor(control.value)) {
            return (control.value > 0 && control.value <= avail) ? null : { amountValidator: true };
        } else {
            return null;
        }
    };
}