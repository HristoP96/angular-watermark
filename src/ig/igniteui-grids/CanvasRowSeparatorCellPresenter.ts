/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasRowSeparatorCell } from "./CanvasRowSeparatorCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CanvasRowSeparatorCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasRowSeparatorCellPresenter, 'CanvasRowSeparatorCellPresenter', (<any>CanvasCellPresenterBase).$type);
	get rowSeparatorCell(): CanvasRowSeparatorCell {
		return <CanvasRowSeparatorCell>this.cell;
	}
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
}


