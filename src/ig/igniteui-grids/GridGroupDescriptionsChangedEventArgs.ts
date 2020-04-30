/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { ColumnGroupDescriptionCollection } from "./ColumnGroupDescriptionCollection";

/**
 * @hidden 
 */
export class GridGroupDescriptionsChangedEventArgs extends EventArgs {
	static $t: Type = markType(GridGroupDescriptionsChangedEventArgs, 'GridGroupDescriptionsChangedEventArgs', (<any>EventArgs).$type);
	private _groupDescriptions: ColumnGroupDescriptionCollection = null;
	get groupDescriptions(): ColumnGroupDescriptionCollection {
		return this._groupDescriptions;
	}
	set groupDescriptions(value: ColumnGroupDescriptionCollection) {
		this._groupDescriptions = value;
	}
}


