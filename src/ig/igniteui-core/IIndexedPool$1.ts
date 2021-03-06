/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IPool$1, IPool$1_$type } from "./IPool$1";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IIndexedPool$1<T> extends IPool$1<T> { 
	item(index: number): T;
readonly count: number;
}

/**
 * @hidden 
 */
export let IIndexedPool$1_$type = new Type(null, 'IIndexedPool$1', null, [IPool$1_$type.specialize(0)]);


