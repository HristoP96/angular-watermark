/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PriceVolumeTrendIndicatorDescription extends StrategyBasedIndicatorDescription {
	static $t: Type = markType(PriceVolumeTrendIndicatorDescription, 'PriceVolumeTrendIndicatorDescription', (<any>StrategyBasedIndicatorDescription).$type);
	protected get_type(): string {
		return "PriceVolumeTrendIndicator";
	}
	constructor() {
		super();
	}
}


