/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTemplateSectionHeaderModule } from './igx-template-section-header-module';
import { IgxTemplateSectionHeaderComponent } from './igx-template-section-header-component';
import { TemplateSectionHeader } from './TemplateSectionHeader';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxTemplateSectionHeaderModule],
    exports: [IgxTemplateSectionHeaderModule],
    entryComponents: [IgxTemplateSectionHeaderComponent]
})
export class IgxTemplateSectionHeaderDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTemplateSectionHeaderComponent", IgxTemplateSectionHeaderComponent);
        TypeRegistrar.register("TemplateSectionHeader", (<any>TemplateSectionHeader).$type);
    }
}
