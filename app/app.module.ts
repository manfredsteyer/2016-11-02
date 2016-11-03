import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {FlightService} from "./flight-booking/services/flight.service";
import {BASE_URL} from "./app.tokens";
import {CityPipe} from "./shared/pipes/city.pipe";
import {SharedModule} from "./shared/shared.module";
import {FlightCardComponent} from "./flight-booking/flight-card/flight.card.component";
import {AltFlightCardComponent} from "./flight-booking/alt-flight-card/alt-flight.card.component";
import {FlightListComponent} from "./flight-booking/alt-flight-card/flight-list";
import {FlightSearchReactiveComponent} from "./flight-booking/flight-search-reactive/flight-search-reactive.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        FlightSearchComponent,
        FlightCardComponent,
        AltFlightCardComponent,
        FlightListComponent,
        FlightSearchReactiveComponent
    ],
    providers: [
        { provide: BASE_URL, useValue: "http://www.angular.at"}
    ],
    bootstrap: [
        AppComponent

    ]
})
export class AppModule {
}