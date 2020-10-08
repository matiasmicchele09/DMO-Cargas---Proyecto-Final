import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});