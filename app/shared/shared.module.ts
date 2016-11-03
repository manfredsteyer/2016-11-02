import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CityPipe} from "./pipes/city.pipe";
import {CityValidatorDirective} from "./validation/city.validator";

@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    providers: [
        // Keine
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective
    ],
    exports:[
        CityPipe,
        CityValidatorDirective
    ]
})
export class SharedModule {

}