import { Component } from '@angular/core';
import {Flight} from "../../entities/flight";
import {Http, URLSearchParams, Headers } from '@angular/http';
import {FlightService} from "../services/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService],
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";
    public flights: Array<Flight> = [];
    public selectedFlight: Flight;

    constructor(private flightService: FlightService) {
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Array<Flight>) => {
                    this.flights = flights;
                },
                (err) => {
                    console.error(err);
                }
            );



            // .map(function(resp) { return resp.json() })

    }
}