/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { CalloutAnnotation } from "./CalloutAnnotation";
import { Base, EventArgs, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CalloutAnnotationCollection extends ObservableCollection$1<CalloutAnnotation> {
	static $t: Type = markType(CalloutAnnotationCollection, 'CalloutAnnotationCollection', (<any>ObservableCollection$1).$type.specialize((<any>CalloutAnnotation).$type));
	constructor() {
		super((<any>CalloutAnnotation).$type, 0);
	}
	collectionResetting: (sender: any, e: EventArgs) => void = null;
	protected clearItems(): void {
		if (this.collectionResetting != null) {
			this.collectionResetting(this, null);
		}
		super.clearItems();
	}
}


