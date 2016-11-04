import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `
        <h1>Flight Edit!</h1>
        <p>Hier könnte auch der Datensatz mit der Id {{id}} stehen!</p>
    `
})
export class FlightEditComponent implements OnInit {

    private id: string;

    constructor(private route: ActivatedRoute) {

        route.params.subscribe(p => {
            this.id = p['id'];
        });
    }

    ngOnInit() { }

}