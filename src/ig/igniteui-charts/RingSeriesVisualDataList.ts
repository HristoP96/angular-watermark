/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "igniteui-core/List$1";
import { RingSeriesVisualData } from "./RingSeriesVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class RingSeriesVisualDataList extends List$1<RingSeriesVisualData> {
	static $t: Type = markType(RingSeriesVisualDataList, 'RingSeriesVisualDataList', (<any>List$1).$type.specialize((<any>RingSeriesVisualData).$type));
	constructor() {
		super((<any>RingSeriesVisualData).$type, 0);
	}
}


