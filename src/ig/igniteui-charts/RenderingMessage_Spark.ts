/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Message_Spark } from "./Message_Spark";
import { SparkLayerType } from "./SparkLayerType";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class RenderingMessage_Spark extends Message_Spark {
	static $t: Type = markType(RenderingMessage_Spark, 'RenderingMessage_Spark', (<any>Message_Spark).$type);
	private _layer: SparkLayerType = <SparkLayerType>0;
	get layer(): SparkLayerType {
		return this._layer;
	}
	set layer(value: SparkLayerType) {
		this._layer = value;
	}
}


