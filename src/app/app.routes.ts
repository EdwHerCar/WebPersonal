
import { Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PortadaComponent } from './components/portada/portada.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const APP_ROUTES: Routes=[
    {path: 'portada', component: PortadaComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: 'acerca-de', component: AcercaDeComponent  },
    {path: 'contacto', component: ContactoComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);






