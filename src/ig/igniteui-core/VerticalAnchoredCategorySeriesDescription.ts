/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredCategorySeriesDescription } from "./AnchoredCategorySeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class VerticalAnchoredCategorySeriesDescription extends AnchoredCategorySeriesDescription {
	static $t: Type = markType(VerticalAnchoredCategorySeriesDescription, 'VerticalAnchoredCategorySeriesDescription', (<any>AnchoredCategorySeriesDescription).$type);
	protected get_type(): string {
		return "VerticalAnchoredCategorySeries";
	}
	constructor() {
		super();
	}
	private _xAxisRef: string = null;
	get xAxisRef(): string {
		return this._xAxisRef;
	}
	set xAxisRef(value: string) {
		this._xAxisRef = value;
		this.markDirty("XAxisRef");
	}
	private _yAxisRef: string = null;
	get yAxisRef(): string {
		return this._yAxisRef;
	}
	set yAxisRef(value: string) {
		this._yAxisRef = value;
		this.markDirty("YAxisRef");
	}
}


