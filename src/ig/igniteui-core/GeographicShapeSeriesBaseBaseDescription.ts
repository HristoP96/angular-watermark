/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapSeriesHostDescription } from "./GeographicMapSeriesHostDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class GeographicShapeSeriesBaseBaseDescription extends GeographicMapSeriesHostDescription {
	static $t: Type = markType(GeographicShapeSeriesBaseBaseDescription, 'GeographicShapeSeriesBaseBaseDescription', (<any>GeographicMapSeriesHostDescription).$type);
	protected get_type(): string {
		return "GeographicShapeSeriesBaseBase";
	}
	constructor() {
		super();
	}
}


