import { NgModule } from '@angular/core';

import { ApiService } from './api.service';
import { CitiesApi } from './openaq/cities/cities.api';
import { LatestApi } from './openaq/latest/latest.api';
import { LocationsApi } from './openaq/locations/locations.api';

@NgModule({
    providers: [
        ApiService,
        CitiesApi,
        LatestApi,
        LocationsApi
    ]
})
export class ApiModule { }