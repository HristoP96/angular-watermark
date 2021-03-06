/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSplineAreaFragmentModule } from './igx-spline-area-fragment-module';
import { IgxSplineAreaFragmentComponent } from './igx-spline-area-fragment-component';
import { SplineAreaFragment } from './SplineAreaFragment';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSplineAreaFragmentModule],
    exports: [IgxSplineAreaFragmentModule],
    entryComponents: [IgxSplineAreaFragmentComponent]
})
export class IgxSplineAreaFragmentDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSplineAreaFragmentComponent", IgxSplineAreaFragmentComponent);
        TypeRegistrar.register("SplineAreaFragment", (<any>SplineAreaFragment).$type);
    }
}
