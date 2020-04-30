/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellInfoDescription } from "./CellInfoDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class VerticalSeparatorCellInfoDescription extends CellInfoDescription {
	static $t: Type = markType(VerticalSeparatorCellInfoDescription, 'VerticalSeparatorCellInfoDescription', (<any>CellInfoDescription).$type);
	protected get_type(): string {
		return "VerticalSeparatorCellInfo";
	}
	constructor() {
		super();
	}
	private _isHitTestVisible: boolean = false;
	get isHitTestVisible(): boolean {
		return this._isHitTestVisible;
	}
	set isHitTestVisible(value: boolean) {
		this._isHitTestVisible = value;
		this.markDirty("IsHitTestVisible");
	}
}


