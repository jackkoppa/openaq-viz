import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OnboardingModule } from '../onboarding/onboarding.module';
import { SharedModule } from '../shared/shared.module';

import { BannerComponent } from './banner.component';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro.component';

@NgModule({
    imports: [
        RouterModule,
        OnboardingModule,
        SharedModule
    ],
    declarations: [
        BannerComponent,
        HomeComponent,
        IntroComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}