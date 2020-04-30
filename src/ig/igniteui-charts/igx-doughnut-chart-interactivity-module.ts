/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractivityFactoryManager } from './InteractivityFactoryManager';
import { IgxDoughnutChartDefaultTooltipsComponent } from './igx-doughnut-chart-default-tooltips-component';
import { IgxDVInteractivityModule } from 'igniteui-core/igx-dv-interactivity-module';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [IgxDoughnutChartDefaultTooltipsComponent],
    exports: [IgxDoughnutChartDefaultTooltipsComponent,
IgxDVInteractivityModule
    ],
    imports: [CommonModule, IgxDVInteractivityModule
    ],
    entryComponents: [IgxDoughnutChartDefaultTooltipsComponent]
})
export class IgxDoughnutChartInteractivityModule {
    
    constructor() {
                TypeRegistrar.register('InteractivityFactoryManager', (InteractivityFactoryManager as any).$type);
InteractivityFactoryManager.register();
IgxDoughnutChartDefaultTooltipsComponent.register();

    }

}