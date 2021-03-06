/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available behaviors for performing hit testing in the chart/map.
 */
export enum SeriesHitTestMode {
	/**
	 * Automatically decide the appropriate hit test mode for the series.
	 */
	Auto = 0,
	/**
	 * Use a computational based approach to determine whether the series has been hit. This uses loose bounding boxes, in some cases, and can range in time complexity between O(1) and O(log n) to find a hit. This decreases frame render time compared to color encoded.
	 */
	Computational = 1,
	/**
	 * Use a color encoded off screen buffer for hit testing. Should always be O(1) time for determining a hit series. This increases frame render time and memory usage, however. Consider using this if hit testing time is degrading performance.
	 */
	ColorEncoded = 2
}

/**
 * @hidden 
 */
export let SeriesHitTestMode_$type = markEnum('SeriesHitTestMode', 'Auto,0|Computational,1|ColorEncoded,2');


