import { ValidatorFn } from "@angular/forms";

export function maxNumberValidator(): ValidatorFn {
    return (control) => {
        if(control.value == Number(control.value)){
            return (Number(control.value) <= 999) ? null : { maxNumberValidator: true };
        }else{
            return null;
        }
    };
}