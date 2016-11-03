import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CityPipe} from "./pipes/city.pipe";

@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    providers: [
        // Keine
    ],
    declarations: [
        CityPipe
    ],
    exports:[
        CityPipe
    ]
})
export class SharedModule {

}