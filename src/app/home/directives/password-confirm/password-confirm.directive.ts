import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appPasswordConfirm]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordConfirmDirective,
        multi: true
    }]
})
export class PasswordConfirmDirective implements Validator {
    @Input() appPasswordConfirm: string | any;
    validate(control: AbstractControl): {[key:string]: any} | null {
        const controlToCompare = control.parent?.get(this.appPasswordConfirm);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}