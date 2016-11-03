
import {Directive, Input, Attribute} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";

@Directive({
    selector: 'input[city]', // <input city>
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidatorDirective,
            multi: true
        }
    ]
})
export class CityValidatorDirective implements Validator {

    // @Input() city: string;

    constructor(@Attribute('city') private city: string) {
    }

    validate(c: AbstractControl): any {


        if (!this.city) return { }

        let allowed = this.city.split(','); //['Graz', 'Hamburg', 'Wien', 'Frankfurt'];

        if (allowed.indexOf(c.value) == -1) {
            return {
                city: true
            }
        }

        return {};

    }
}