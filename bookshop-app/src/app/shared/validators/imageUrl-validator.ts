import { ValidatorFn } from "@angular/forms";

export function imageUrlValidator(): ValidatorFn {
    const re = new RegExp(`https?:?(\/\/[^"']*)\.(?:png|jpg|jpeg|gif|png|svg)`);
    return (control) => {
        let str = control.value as string;
        return (control.value === '' || re.test(control.value)) || str.startsWith('data:image/jpeg') ? null : { imageUrlValidator: true };
    };
}