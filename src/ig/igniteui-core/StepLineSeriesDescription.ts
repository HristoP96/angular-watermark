/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class StepLineSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
	static $t: Type = markType(StepLineSeriesDescription, 'StepLineSeriesDescription', (<any>HorizontalAnchoredCategorySeriesDescription).$type);
	protected get_type(): string {
		return "StepLineSeries";
	}
	constructor() {
		super();
	}
}


