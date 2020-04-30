/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredRadialSeriesDescription } from "./AnchoredRadialSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class RadialLineSeriesDescription extends AnchoredRadialSeriesDescription {
	static $t: Type = markType(RadialLineSeriesDescription, 'RadialLineSeriesDescription', (<any>AnchoredRadialSeriesDescription).$type);
	protected get_type(): string {
		return "RadialLineSeries";
	}
	constructor() {
		super();
	}
	private _unknownValuePlotting: string = null;
	get unknownValuePlotting(): string {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: string) {
		this._unknownValuePlotting = value;
		this.markDirty("UnknownValuePlotting");
	}
}


