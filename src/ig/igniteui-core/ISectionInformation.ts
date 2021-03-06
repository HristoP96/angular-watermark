/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type } from "./type";
import { ISummaryResult } from "./ISummaryResult";

/**
 * @hidden 
 */
export interface ISectionInformation { 
	readonly startIndex: number;
readonly endIndex: number;
readonly groupKeyProperties: string[];
readonly groupKeyValues: any[];
readonly summaryResults: ISummaryResult[];
}

/**
 * @hidden 
 */
export let ISectionInformation_$type = new Type(null, 'ISectionInformation');


