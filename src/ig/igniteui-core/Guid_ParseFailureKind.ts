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
export const enum Guid_ParseFailureKind {
	None = 0,
	ArgumentNull = 1,
	Format = 2,
	FormatWithParameter = 3,
	NativeException = 4,
	FormatWithInnerException = 5
}

/**
 * @hidden 
 */
export let Guid_ParseFailureKind_$type = markEnum('Guid_ParseFailureKind', 'None,0|ArgumentNull,1|Format,2|FormatWithParameter,3|NativeException,4|FormatWithInnerException,5');


