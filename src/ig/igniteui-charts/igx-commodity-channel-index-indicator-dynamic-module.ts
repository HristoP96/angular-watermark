/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCommodityChannelIndexIndicatorModule } from './igx-commodity-channel-index-indicator-module';
import { IgxCommodityChannelIndexIndicatorComponent } from './igx-commodity-channel-index-indicator-component';
import { CommodityChannelIndexIndicator } from './CommodityChannelIndexIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCommodityChannelIndexIndicatorModule],
    exports: [IgxCommodityChannelIndexIndicatorModule],
    entryComponents: [IgxCommodityChannelIndexIndicatorComponent]
})
export class IgxCommodityChannelIndexIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCommodityChannelIndexIndicatorComponent", IgxCommodityChannelIndexIndicatorComponent);
        TypeRegistrar.register("CommodityChannelIndexIndicator", (<any>CommodityChannelIndexIndicator).$type);
    }
}
