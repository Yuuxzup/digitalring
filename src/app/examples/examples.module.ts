import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ProcesseurComponent } from './processeur/processeur.component';
import { EcranComponent } from './ecran/ecran.component';
import { TestsComponent } from './tests/tests.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        ConfigurationComponent,
        ProcesseurComponent,
        EcranComponent,
        TestsComponent
    ]
})
export class ExamplesModule { }
