/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxHorizontalAnchoredCategorySeriesProxyModule } from './igx-horizontal-anchored-category-series-proxy-module';

import { IgxStepAreaSeriesComponent } from './igx-step-area-series-component';

@NgModule({
    declarations: [IgxStepAreaSeriesComponent],
    imports: [CommonModule, IgxHorizontalAnchoredCategorySeriesProxyModule],
    exports: [IgxStepAreaSeriesComponent, IgxHorizontalAnchoredCategorySeriesProxyModule],
    entryComponents: []
})
export class IgxStepAreaSeriesModule {

}
