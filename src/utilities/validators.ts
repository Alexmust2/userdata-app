import { AbstractControl } from "@angular/forms";



export const validateWhitespace = (control: AbstractControl) => {
    let isWhitespcae = (control.value || '').trim().lenght === 0;
    let isValid = !isWhitespcae


    return isValid ? null : {trimmed: true}
}