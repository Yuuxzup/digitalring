import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ConfigurationComponent } from './examples/configuration/configuration.component';
import { ProcesseurComponent } from './examples/processeur/processeur.component';
import { EcranComponent } from './examples/ecran/ecran.component';
import { TestsComponent } from './examples/tests/tests.component';

const routes: Routes =[
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil',          component: LandingComponent },
    { path: 'configuration',      component: ConfigurationComponent },
    { path: 'processeur',      component: ProcesseurComponent },
    { path: 'ecran',      component: EcranComponent },
    { path: 'casques',      component: TestsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ]
})
export class AppRoutingModule { }
