

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app/app.component';
import { authGuard } from './app/auth.guard';
import { InMemoryDataService } from './app/in-memory-data.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        canActivate: [authGuard],
        loadChildren: () => import("./app/pokemon/pokemon.routes"),
    },
    {
        path: 'login',
        loadComponent: () => import("./app/login/login.component").then((m) => m.LoginComponent),
    },
    {
        path: '**',
        loadComponent: () => import("./app/page-not-found/page-not-found.component").then((m) => m.PageNotFoundComponent),
    },
];


bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
        })),
        provideRouter(routes),
    ]
})
  .catch((err) => console.error(err));
