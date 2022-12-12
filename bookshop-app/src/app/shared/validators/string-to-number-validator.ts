import { ValidatorFn } from "@angular/forms";

export function strToNumValidator(): ValidatorFn {
    return (control) => {
        return (control.value === '' || control.value == Number(control.value)) ? null : { strToNumValidator: true };
    };
}