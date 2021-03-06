/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available behaviors for displaying of gridlines, tickmarks, and labels on a time axis.
 */
export enum TimeAxisDisplayType {
	/**
	 * Points occur at even intervals, even where data is not present at a given point.
	 */
	Continuous = 0,
	/**
	 * Points occur when data is present, possibly at uneven intervals.
	 */
	Discrete = 1
}

/**
 * @hidden 
 */
export let TimeAxisDisplayType_$type = markEnum('TimeAxisDisplayType', 'Continuous,0|Discrete,1');


