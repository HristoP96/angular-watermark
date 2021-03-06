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
export const enum PathMarkupTokenType {
	Move = 0,
	Line = 1,
	Horizontal = 2,
	Vertical = 3,
	CubicBezier = 4,
	QuadraticBezier = 5,
	SmoothCubicBezier = 6,
	SmoothQuadraticBezier = 7,
	Arc = 8,
	Close = 9,
	Number = 10,
	None = 11
}

/**
 * @hidden 
 */
export let PathMarkupTokenType_$type = markEnum('PathMarkupTokenType', 'Move,0|Line,1|Horizontal,2|Vertical,3|CubicBezier,4|QuadraticBezier,5|SmoothCubicBezier,6|SmoothQuadraticBezier,7|Arc,8|Close,9|Number,10|None,11');


