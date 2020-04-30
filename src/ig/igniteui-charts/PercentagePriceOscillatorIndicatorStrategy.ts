/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";

/**
 * @hidden 
 */
export class PercentagePriceOscillatorIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(PercentagePriceOscillatorIndicatorStrategy, 'PercentagePriceOscillatorIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(supportingCalculations.shortPriceOscillatorAverage.basedOn);
		list.addRange(supportingCalculations.longPriceOscillatorAverage.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let shortEma: IEnumerator$1<number> = getEnumerator(supportingCalculations.shortPriceOscillatorAverage.strategy(dataSource));
		let longEma: IEnumerator$1<number> = getEnumerator(supportingCalculations.longPriceOscillatorAverage.strategy(dataSource));
		let i: number = 0;
		while (shortEma.moveNext() && longEma.moveNext()) {
			let ppo: number = supportingCalculations.makeSafe(100 * (shortEma.current - longEma.current) / longEma.current);
			indicatorColumn.item(i, ppo);
			++i;
		}
		return true;
	}
}


