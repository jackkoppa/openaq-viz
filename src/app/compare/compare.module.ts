import { NgModule } from '@angular/core';

import { SearchModule } from '../search/search.module';
import { CityModule } from '../city/city.module';

import { CompareComponent } from './compare.component';
import { CompareService } from './compare.service';

@NgModule({
    imports: [
        SearchModule,
        CityModule
    ],
    declarations: [CompareComponent],
    exports: [CompareComponent],
    providers: [CompareService]
})
export class CompareModule { }