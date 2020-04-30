/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { XamLinearGraphRange } from "./XamLinearGraphRange";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LinearGraphRangeCollection extends ObservableCollection$1<XamLinearGraphRange> {
	static $t: Type = markType(LinearGraphRangeCollection, 'LinearGraphRangeCollection', (<any>ObservableCollection$1).$type.specialize((<any>XamLinearGraphRange).$type));
	constructor() {
		super((<any>XamLinearGraphRange).$type, 0);
	}
}


