/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IFilterExpression, IFilterExpression_$type } from "./IFilterExpression";
import { FilterExpressionOperatorType } from "./FilterExpressionOperatorType";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IOperationFilterExpression extends IFilterExpression { 
	readonly operator: FilterExpressionOperatorType;
readonly left: IFilterExpression;
readonly right: IFilterExpression;
}

/**
 * @hidden 
 */
export let IOperationFilterExpression_$type = new Type(null, 'IOperationFilterExpression', null, [IFilterExpression_$type]);


