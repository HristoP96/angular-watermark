/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Point, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class HoleDimensionsChangedEventArgs extends EventArgs {
	static $t: Type = markType(HoleDimensionsChangedEventArgs, 'HoleDimensionsChangedEventArgs', (<any>EventArgs).$type);
	constructor(center: Point, radius: number) {
		super();
		this._center = center;
		this._radius = radius;
	}
	private _center: Point = null;
	get center(): Point {
		return this._center;
	}
	private _radius: number = 0;
	get radius(): number {
		return this._radius;
	}
}


