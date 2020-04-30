/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellModelExport } from "./CellModelExport";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ImageCellModelExport extends CellModelExport {
	static $t: Type = markType(ImageCellModelExport, 'ImageCellModelExport', (<any>CellModelExport).$type);
	private _imagePath: string = null;
	get imagePath(): string {
		return this._imagePath;
	}
	set imagePath(value: string) {
		this._imagePath = value;
	}
	protected get_type(): string {
		return "ImageCell";
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
		sb.append5("imagePath : \"" + this.imagePath + "\", ");
	}
}


