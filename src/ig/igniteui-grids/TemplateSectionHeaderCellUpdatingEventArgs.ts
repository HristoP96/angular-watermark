/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { TemplateSectionHeaderCellModel } from "./TemplateSectionHeaderCellModel";

/**
 * @hidden 
 */
export class TemplateSectionHeaderCellUpdatingEventArgs extends EventArgs {
	static $t: Type = markType(TemplateSectionHeaderCellUpdatingEventArgs, 'TemplateSectionHeaderCellUpdatingEventArgs', (<any>EventArgs).$type);
	private _cellInfo: TemplateSectionHeaderCellModel = null;
	get cellInfo(): TemplateSectionHeaderCellModel {
		return this._cellInfo;
	}
	set cellInfo(value: TemplateSectionHeaderCellModel) {
		this._cellInfo = value;
	}
	private _content: any = null;
	get content(): any {
		return this._content;
	}
	set content(value: any) {
		this._content = value;
	}
}

