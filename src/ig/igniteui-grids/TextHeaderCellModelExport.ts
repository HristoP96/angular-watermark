/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TextCellModelExport } from "./TextCellModelExport";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TextHeaderCellModelExport extends TextCellModelExport {
	static $t: Type = markType(TextHeaderCellModelExport, 'TextHeaderCellModelExport', (<any>TextCellModelExport).$type);
	protected get_type(): string {
		return "TextHeaderCell";
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
	}
}


