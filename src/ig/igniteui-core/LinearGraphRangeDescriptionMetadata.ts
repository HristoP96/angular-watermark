/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { LinearGraphRangeDescription } from "./LinearGraphRangeDescription";

/**
 * @hidden 
 */
export class LinearGraphRangeDescriptionMetadata extends Base {
	static $t: Type = markType(LinearGraphRangeDescriptionMetadata, 'LinearGraphRangeDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LinearGraphRangeDescriptionMetadata._metadata == null) {
			LinearGraphRangeDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LinearGraphRangeDescriptionMetadata.fillMetadata(context, LinearGraphRangeDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Name", "String");
		metadata.item("Brush", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("StartValue", "Number:double");
		metadata.item("EndValue", "Number:double");
		metadata.item("InnerStartExtent", "Number:double");
		metadata.item("InnerEndExtent", "Number:double");
		metadata.item("OuterStartExtent", "Number:double");
		metadata.item("OuterEndExtent", "Number:double");
		metadata.item("StrokeThickness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		LinearGraphRangeDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LinearGraphRange", () => new LinearGraphRangeDescription());
		context.register("LinearGraphRange", LinearGraphRangeDescriptionMetadata._metadata);
	}
}


