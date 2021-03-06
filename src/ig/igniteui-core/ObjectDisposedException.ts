/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BaseError, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ObjectDisposedException extends BaseError {
	static $t: Type = markType(ObjectDisposedException, 'ObjectDisposedException', (<any>BaseError).$type);
	constructor(initNumber: number, parameter: string);
	constructor(initNumber: number, parameter: string, message: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let parameter: string = <string>_rest[0];
				super(0);
			}
			break;

			case 1:
			{
				let parameter: string = <string>_rest[0];
				let message: string = <string>_rest[1];
				super(0);
			}
			break;

		}

	}
}


