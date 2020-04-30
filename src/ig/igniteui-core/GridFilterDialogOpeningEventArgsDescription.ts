/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { ColumnFilterConditionDescription } from "./ColumnFilterConditionDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridFilterDialogOpeningEventArgsDescription extends Description {
	static $t: Type = markType(GridFilterDialogOpeningEventArgsDescription, 'GridFilterDialogOpeningEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridFilterDialogOpeningEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _filter: ColumnFilterConditionDescription = null;
	get filter(): ColumnFilterConditionDescription {
		return this._filter;
	}
	set filter(value: ColumnFilterConditionDescription) {
		this._filter = value;
		this.markDirty("Filter");
	}
	private _propertyType: string = null;
	get propertyType(): string {
		return this._propertyType;
	}
	set propertyType(value: string) {
		this._propertyType = value;
		this.markDirty("PropertyType");
	}
}


