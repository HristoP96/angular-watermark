/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLineSeriesModule } from './igx-line-series-module';
import { IgxLineSeriesComponent } from './igx-line-series-component';
import { LineSeries } from './LineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxLineSeriesModule],
    exports: [IgxLineSeriesModule],
    entryComponents: [IgxLineSeriesComponent]
})
export class IgxLineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxLineSeriesComponent", IgxLineSeriesComponent);
        TypeRegistrar.register("LineSeries", (<any>LineSeries).$type);
    }
}
