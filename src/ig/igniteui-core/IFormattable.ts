/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IFormatProvider, IFormatProvider_$type, Type } from "./type";

/**
 * @hidden 
 */
export interface IFormattable { 
	toString(format: string, formatProvider: IFormatProvider): string;
}

/**
 * @hidden 
 */
export let IFormattable_$type = new Type(null, 'IFormattable');


