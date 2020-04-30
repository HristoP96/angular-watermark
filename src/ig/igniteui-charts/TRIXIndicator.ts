/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { TRIXIndicatorStrategy } from "./TRIXIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { FinancialIndicator } from "./FinancialIndicator";
import { Brush } from "igniteui-core/Brush";
import { IndicatorDisplayType } from "./IndicatorDisplayType";
import { TrendLineType } from "igniteui-core/TrendLineType";

/**
 * @hidden 
 */
export class TRIXIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(TRIXIndicator, 'TRIXIndicator', (<any>StrategyBasedIndicator).$type);
	constructor() {
		super();
		this.displayType = IndicatorDisplayType.Line;
		this.trendLineBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#565656";
			return $ret;
		})());
		this.trendLineType = TrendLineType.SimpleAverage;
		this.trendLinePeriod = 9;
	}
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new TRIXIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>TRIXIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(TRIXIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(TRIXIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(15, (<any>TRIXIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
}


