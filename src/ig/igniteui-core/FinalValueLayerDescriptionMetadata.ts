/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { FinalValueLayerDescription } from "./FinalValueLayerDescription";

/**
 * @hidden 
 */
export class FinalValueLayerDescriptionMetadata extends Base {
	static $t: Type = markType(FinalValueLayerDescriptionMetadata, 'FinalValueLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinalValueLayerDescriptionMetadata._metadata == null) {
			FinalValueLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinalValueLayerDescriptionMetadata.fillMetadata(context, FinalValueLayerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
		metadata.item("FinalValueSelectionMode", "ExportedType:string:FinalValueSelectionMode");
		metadata.item("AxisAnnotationTextColor", "Brush");
		metadata.item("AxisAnnotationBackground", "Brush");
		metadata.item("AxisAnnotationInterpolatedValuePrecision", "Number:int");
		metadata.item("AxisAnnotationOutline", "Brush");
		metadata.item("AxisAnnotationPaddingLeft", "Number:double");
		metadata.item("AxisAnnotationPaddingTop", "Number:double");
		metadata.item("AxisAnnotationPaddingRight", "Number:double");
		metadata.item("AxisAnnotationPaddingBottom", "Number:double");
		metadata.item("AxisAnnotationStrokeThickness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		FinalValueLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinalValueLayer", () => new FinalValueLayerDescription());
		context.register("FinalValueLayer", FinalValueLayerDescriptionMetadata._metadata);
	}
}


