/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Enum representing the direction of an arc.
 */
export enum SweepDirection {
	/**
	 * In a direction opposite the typical forward movement of the hands of a clock.
	 */
	Counterclockwise = 0,
	/**
	 * In a direction corresponding to the typical forward movement of the hands of a clock.
	 */
	Clockwise = 1
}

/**
 * @hidden 
 */
export let SweepDirection_$type = markEnum('SweepDirection', 'Counterclockwise,0|Clockwise,1');


