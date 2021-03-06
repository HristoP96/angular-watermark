/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Path } from "igniteui-core/Path";
import { IList$1, IList$1_$type, Type } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";

/**
 * @hidden 
 */
export interface ITrackBarVisual { 
	readonly barBox: Path;
readonly allPaths: IList$1<Path>;
width: number;
height: number;
translateX: number;
translateY: number;
getBarBoxDefaultBrush(): Brush;
getBarBoxDefaultOutline(): Brush;
getBarBoxDefaultStrokeThickness(): number;
}

/**
 * @hidden 
 */
export let ITrackBarVisual_$type = new Type(null, 'ITrackBarVisual');


