/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SmartPosition } from "./SmartPosition";
import { Rect } from "./Rect";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface ISmartPlaceable { 
	getSmartPositions(): SmartPosition[];
getSmartBounds(position: SmartPosition): Rect;
smartPosition: SmartPosition;
opacity: number;
}

/**
 * @hidden 
 */
export let ISmartPlaceable_$type = new Type(null, 'ISmartPlaceable');


