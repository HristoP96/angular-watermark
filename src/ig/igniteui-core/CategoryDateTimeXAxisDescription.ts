/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TimeAxisBaseDescription } from "./TimeAxisBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CategoryDateTimeXAxisDescription extends TimeAxisBaseDescription {
	static $t: Type = markType(CategoryDateTimeXAxisDescription, 'CategoryDateTimeXAxisDescription', (<any>TimeAxisBaseDescription).$type);
	protected get_type(): string {
		return "CategoryDateTimeXAxis";
	}
	constructor() {
		super();
	}
	private _displayType: string = null;
	get displayType(): string {
		return this._displayType;
	}
	set displayType(value: string) {
		this._displayType = value;
		this.markDirty("DisplayType");
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
		this.markDirty("Interval");
	}
	private _actualInterval: number = 0;
	get actualInterval(): number {
		return this._actualInterval;
	}
	set actualInterval(value: number) {
		this._actualInterval = value;
		this.markDirty("ActualInterval");
	}
	private _minorInterval: number = 0;
	get minorInterval(): number {
		return this._minorInterval;
	}
	set minorInterval(value: number) {
		this._minorInterval = value;
		this.markDirty("MinorInterval");
	}
	private _actualMinorInterval: number = 0;
	get actualMinorInterval(): number {
		return this._actualMinorInterval;
	}
	set actualMinorInterval(value: number) {
		this._actualMinorInterval = value;
		this.markDirty("ActualMinorInterval");
	}
}


