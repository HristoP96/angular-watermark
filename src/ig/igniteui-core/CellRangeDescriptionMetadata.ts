/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CellRangeDescription } from "./CellRangeDescription";

/**
 * @hidden 
 */
export class CellRangeDescriptionMetadata extends Base {
	static $t: Type = markType(CellRangeDescriptionMetadata, 'CellRangeDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CellRangeDescriptionMetadata._metadata == null) {
			CellRangeDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CellRangeDescriptionMetadata.fillMetadata(context, CellRangeDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("StartColumn", "Number:int");
		metadata.item("EndColumn", "Number:int");
		metadata.item("StartRow", "Number:int");
		metadata.item("EndRow", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		CellRangeDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CellRange", () => new CellRangeDescription());
		context.register("CellRange", CellRangeDescriptionMetadata._metadata);
	}
}


