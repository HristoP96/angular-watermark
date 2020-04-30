/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPolarSplineSeriesModule } from './igx-polar-spline-series-module';
import { IgxPolarSplineSeriesComponent } from './igx-polar-spline-series-component';
import { PolarSplineSeries } from './PolarSplineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxPolarSplineSeriesModule],
    exports: [IgxPolarSplineSeriesModule],
    entryComponents: [IgxPolarSplineSeriesComponent]
})
export class IgxPolarSplineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxPolarSplineSeriesComponent", IgxPolarSplineSeriesComponent);
        TypeRegistrar.register("PolarSplineSeries", (<any>PolarSplineSeries).$type);
    }
}
