/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * @hidden 
 */
export const enum DescriptionTreeActionType {
	UpdateProperty = 0,
	ResetProperty = 1,
	InsertItem = 2,
	ReplaceItem = 3,
	RemoveItem = 4,
	ClearItems = 5
}

/**
 * @hidden 
 */
export let DescriptionTreeActionType_$type = markEnum('DescriptionTreeActionType', 'UpdateProperty,0|ResetProperty,1|InsertItem,2|ReplaceItem,3|RemoveItem,4|ClearItems,5');


