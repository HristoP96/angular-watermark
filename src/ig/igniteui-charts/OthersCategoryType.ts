/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available behaviors for calculating and grouping slices into the Others slice.
 */
export enum OthersCategoryType {
	/**
	 * Data value is compared directly to the value of OthersCategoryThreshold.
	 */
	Number = 0,
	/**
	 * Data value is compared to OthersCategoryThreshold as a percentage of the total.
	 */
	Percent = 1
}

/**
 * @hidden 
 */
export let OthersCategoryType_$type = markEnum('OthersCategoryType', 'Number,0|Percent,1');


