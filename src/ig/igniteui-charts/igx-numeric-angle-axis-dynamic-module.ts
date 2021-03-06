/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericAngleAxisModule } from './igx-numeric-angle-axis-module';
import { IgxNumericAngleAxisComponent } from './igx-numeric-angle-axis-component';
import { NumericAngleAxis } from './NumericAngleAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxNumericAngleAxisModule],
    exports: [IgxNumericAngleAxisModule],
    entryComponents: [IgxNumericAngleAxisComponent]
})
export class IgxNumericAngleAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxNumericAngleAxisComponent", IgxNumericAngleAxisComponent);
        TypeRegistrar.register("NumericAngleAxis", (<any>NumericAngleAxis).$type);
    }
}
