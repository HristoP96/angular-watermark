/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedLineSeriesDescriptionMetadata } from "./StackedLineSeriesDescriptionMetadata";
import { Stacked100LineSeriesDescription } from "./Stacked100LineSeriesDescription";

/**
 * @hidden 
 */
export class Stacked100LineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(Stacked100LineSeriesDescriptionMetadata, 'Stacked100LineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (Stacked100LineSeriesDescriptionMetadata._metadata == null) {
			Stacked100LineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			Stacked100LineSeriesDescriptionMetadata.fillMetadata(context, Stacked100LineSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedLineSeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		Stacked100LineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Stacked100LineSeries", () => new Stacked100LineSeriesDescription());
		context.register("Stacked100LineSeries", Stacked100LineSeriesDescriptionMetadata._metadata);
	}
}


