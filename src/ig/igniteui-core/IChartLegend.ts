/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ILegendOwner } from "./ILegendOwner";
import { Base, Type } from "./type";
import { ILegendSeries } from "./ILegendSeries";

/**
 * @hidden 
 */
export interface IChartLegend { 
	seriesOwner: ILegendOwner;
chartOwner: ILegendOwner;
containsChild(child: any): boolean;
removeChild(child: any): void;
addChildInOrder(legendItem: any, series: ILegendSeries): void;
clearLegendItemsForSeries(series: ILegendSeries): void;
readonly isItemwise: boolean;
readonly isScale: boolean;
readonly isFinancial: boolean;
provideContainer(container: any): void;
}

/**
 * @hidden 
 */
export let IChartLegend_$type = new Type(null, 'IChartLegend');


