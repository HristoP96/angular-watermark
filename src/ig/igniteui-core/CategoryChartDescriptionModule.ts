/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { CategoryChartDescriptionMetadata } from "./CategoryChartDescriptionMetadata";

/**
 * @hidden 
 */
export class CategoryChartDescriptionModule extends Base {
	static $t: Type = markType(CategoryChartDescriptionModule, 'CategoryChartDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		CategoryChartDescriptionMetadata.register(context);
	}
}


