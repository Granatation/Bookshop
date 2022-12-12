import { ValidatorFn } from "@angular/forms";

export function minNumberValidator(): ValidatorFn {
    return (control) => {
        if(control.value == Number(control.value)){
            return (Number(control.value) >= 1) ? null : { minNumberValidator: true };
        }else{
            return null;
        }
    };
}