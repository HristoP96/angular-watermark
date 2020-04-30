/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryAngleAxisModule } from './igx-category-angle-axis-module';
import { IgxNumericRadiusAxisModule } from './igx-numeric-radius-axis-module';
import { IgxDataChartCoreModule } from './igx-data-chart-core-module';


@NgModule({
    declarations: [],
    exports: [IgxCategoryAngleAxisModule,
IgxNumericRadiusAxisModule,
IgxDataChartCoreModule
    ],
    imports: [CommonModule, IgxCategoryAngleAxisModule,
IgxNumericRadiusAxisModule,
IgxDataChartCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartRadialCoreModule {
    
}