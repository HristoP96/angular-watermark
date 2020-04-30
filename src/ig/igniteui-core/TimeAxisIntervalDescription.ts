/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TimeAxisIntervalDescription extends Description {
	static $t: Type = markType(TimeAxisIntervalDescription, 'TimeAxisIntervalDescription', (<any>Description).$type);
	protected get_type(): string {
		return "TimeAxisInterval";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _range: number = 0;
	get range(): number {
		return this._range;
	}
	set range(value: number) {
		this._range = value;
		this.markDirty("Range");
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
		this.markDirty("Interval");
	}
	private _intervalType: string = null;
	get intervalType(): string {
		return this._intervalType;
	}
	set intervalType(value: string) {
		this._intervalType = value;
		this.markDirty("IntervalType");
	}
}


