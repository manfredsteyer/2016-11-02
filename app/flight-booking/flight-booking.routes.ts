import {Routes, RouterModule} from "@angular/router";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {FlightBookingComponent} from "./flight-booking.component";

let FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            }

        ]
    }
];

export let FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);