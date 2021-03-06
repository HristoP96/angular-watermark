/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PathSegment } from "./PathSegment";
import { Point, Base, Type, markType } from "./type";
import { PathSegmentType } from "./PathSegmentType";

/**
 * @hidden 
 */
export class LineSegment extends PathSegment {
	static $t: Type = markType(LineSegment, 'LineSegment', (<any>PathSegment).$type);
	private _point: Point = null;
	get point(): Point {
		return this._point;
	}
	set point(value: Point) {
		this._point = value;
	}
	constructor(initNumber: number, point: Point);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let point: Point = <Point>_rest[0];
				this.point = point;
			}
			break;

			case 1: break;
		}

	}
	protected get_type(): PathSegmentType {
		return PathSegmentType.Line;
	}
	get type(): PathSegmentType {
		return this.get_type();
	}
}


