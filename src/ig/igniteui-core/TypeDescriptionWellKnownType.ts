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
export enum TypeDescriptionWellKnownType {
	Void = 0,
	Number = 1,
	string1 = 2,
	Date = 3,
	Brush = 4,
	Color = 5,
	BrushCollection = 6,
	boolean1 = 7,
	ExportedType = 8,
	Collection = 9,
	Array = 10,
	Point = 11,
	Size = 12,
	IList = 13,
	Rect = 14,
	DataTemplate = 15,
	ColorCollection = 16,
	Unknown = 17,
	MethodRef = 18,
	EventRef = 19,
	DataRef = 20,
	TimeSpan = 21
}

/**
 * @hidden 
 */
export let TypeDescriptionWellKnownType_$type = markEnum('TypeDescriptionWellKnownType', 'Void,0|Number,1|String:string1,2|Date,3|Brush,4|Color,5|BrushCollection,6|Boolean:boolean1,7|ExportedType,8|Collection,9|Array,10|Point,11|Size,12|IList,13|Rect,14|DataTemplate,15|ColorCollection,16|Unknown,17|MethodRef,18|EventRef,19|DataRef,20|TimeSpan,21');


