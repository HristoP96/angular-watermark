/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ResponsiveStateEnteringEventArgsDescription extends Description {
	static $t: Type = markType(ResponsiveStateEnteringEventArgsDescription, 'ResponsiveStateEnteringEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ResponsiveStateEnteringEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
}


