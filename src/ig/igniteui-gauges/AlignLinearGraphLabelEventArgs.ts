/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FormatLinearGraphLabelEventArgs } from "./FormatLinearGraphLabelEventArgs";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AlignLinearGraphLabelEventArgs extends FormatLinearGraphLabelEventArgs {
	static $t: Type = markType(AlignLinearGraphLabelEventArgs, 'AlignLinearGraphLabelEventArgs', (<any>FormatLinearGraphLabelEventArgs).$type);
	width: number = 0;
	height: number = 0;
	offsetX: number = 0;
	offsetY: number = 0;
}


