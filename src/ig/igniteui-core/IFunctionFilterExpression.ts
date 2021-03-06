/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IFilterExpression, IFilterExpression_$type } from "./IFilterExpression";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { FilterExpressionFunctionType } from "./FilterExpressionFunctionType";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IFunctionFilterExpression extends IFilterExpression { 
	readonly functionArguments: FilterExpressionCollection;
readonly functionType: FilterExpressionFunctionType;
readonly hasFunctionArguments: boolean;
}

/**
 * @hidden 
 */
export let IFunctionFilterExpression_$type = new Type(null, 'IFunctionFilterExpression', null, [IFilterExpression_$type]);


