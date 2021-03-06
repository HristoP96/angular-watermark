/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export const enum ColumnStates {
	Detached = 0,
	Showing = 1,
	Hiding = 2,
	Hidden = 3,
	Swapping = 4,
	Visible = 5,
	Moving = 6
}

/**
 * @hidden 
 */
export let ColumnStates_$type = markEnum('ColumnStates', 'Detached,0|Showing,1|Hiding,2|Hidden,3|Swapping,4|Visible,5|Moving,6');


