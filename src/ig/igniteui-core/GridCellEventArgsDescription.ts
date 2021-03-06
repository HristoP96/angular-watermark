/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { LiveGridDescription } from "./LiveGridDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridCellEventArgsDescription extends Description {
	static $t: Type = markType(GridCellEventArgsDescription, 'GridCellEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridCellEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _grid: LiveGridDescription = null;
	get grid(): LiveGridDescription {
		return this._grid;
	}
	set grid(value: LiveGridDescription) {
		this._grid = value;
		this.markDirty("Grid");
	}
}


