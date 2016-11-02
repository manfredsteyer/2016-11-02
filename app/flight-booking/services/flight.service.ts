import { Injectable, Inject} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {BASE_URL} from "../../app.tokens";

@Injectable()
export class FlightService {

     constructor(
         private http: Http,
         @Inject(BASE_URL) private baseUrl: string
     ) {
     }

     find(from: string, to: string) {
         let url = this.baseUrl + "/api/flight";
         let headers = new Headers();
         headers.set('Accept', 'text/json');

         let search = new URLSearchParams();
         search.set('from', from);
         search.set('to', to);

         return this
                 .http
                 .get(url, {headers, search})
                 .map(resp => resp.json())
     }

}