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
export const enum JsonDictionaryValueType {
	NumberValue = 0,
	BooleanValue = 1,
	StringValue = 2,
	NullValue = 3
}

/**
 * @hidden 
 */
export let JsonDictionaryValueType_$type = markEnum('JsonDictionaryValueType', 'NumberValue,0|BooleanValue,1|StringValue,2|NullValue,3');


