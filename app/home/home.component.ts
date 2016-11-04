import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular2-oauth2/oauth-service";

@Component({
    template: `
        <h1 *ngIf="!givenName">Willkommen!</h1>
        <h1 *ngIf="givenName">Willkommen, {{givenName}}!</h1>
        
        <button class="btn btn-default" (click)="login()">Login</button>
        <button class="btn btn-default" (click)="logout()">Logout</button>
    `
})
export class HomeComponent implements OnInit {
    constructor(private oauthService: OAuthService) {

    }

    login() {
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }

    ngOnInit() { }

}