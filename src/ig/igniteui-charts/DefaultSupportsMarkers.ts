/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";

/**
 * @hidden 
 */
export class DefaultSupportsMarkers extends Base implements ISupportsMarkers {
	static $t: Type = markType(DefaultSupportsMarkers, 'DefaultSupportsMarkers', (<any>Base).$type, [ISupportsMarkers_$type]);
	get shouldDisplayMarkers(): boolean {
		return false;
	}
	updateMarkerCount(markerCount: number): void {
	}
	updateMarkerTemplate(markerCount: number, itemIndex: number, markerBucket: number): void {
	}
}


