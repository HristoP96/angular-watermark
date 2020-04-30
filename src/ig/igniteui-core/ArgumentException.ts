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
export class ArgumentException extends BaseError {
	static $t: Type = markType(ArgumentException, 'ArgumentException', (<any>BaseError).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, message: string);
	constructor(initNumber: number, message: string, paramName: string);
	constructor(initNumber: number, message: string, innerException: BaseError);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(0);
			}
			break;

			case 1:
			{
				let message: string = <string>_rest[0];
				super(1, message);
			}
			break;

			case 2:
			{
				let message: string = <string>_rest[0];
				let paramName: string = <string>_rest[1];
				super(1, message);
			}
			break;

			case 3:
			{
				let message: string = <string>_rest[0];
				let innerException: BaseError = <BaseError>_rest[1];
				super(2, message, innerException);
			}
			break;

		}

	}
}


