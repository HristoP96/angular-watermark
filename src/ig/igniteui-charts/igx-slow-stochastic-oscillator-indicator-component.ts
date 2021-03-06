import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { SlowStochasticOscillatorIndicator } from "./SlowStochasticOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Slow Stochastic Oscillator indicator series.
 * Default required members: High, Low, Close
* 
* `IgxSlowStochasticOscillatorIndicatorComponent` (SSO) displays the closing price relative to the high-low range over a given period of time. There are three types of Stochastic Oscillators: Fast, Slow, and Full. The Stochastic Oscillator is a momentum indicator that shows the relation of the current close price relative to the high/low range over a given time period using a scale of 0 to 100. It is based on the premise that prices will close near 100 in a rising market and closer to 0 in a declining market.
* 
* The Fast Stochastic Oscillator Indicator is used to identify buying or selling divergences. The Slow Stochastic Oscillator uses a 3-day SMA and the Full Stochastic Oscillator is the Slow Stochastic Oscillator with time period.
* 
* Using this indicator requires setting both the `HighMemberPath`, `LowMemberPath` and `VolumeMemberPath`.
* 
* ```html
* <igx-data-chart 
*     width=500px
*     height=500px
*     [dataSource]="data" >
*     <igx-ordinal-time-x-axis
*         dateTimeMemberPath="TimeStamp"
*         #xAxis>
*       </igx-ordinal-time-x-axis>
*     <igx-numeric-y-axis
*        #yAxis></igx-numeric-y-axis>
*     <igx-slow-stochastic-oscillator-indicator
*        [xAxis]="xAxis"
*        [yAxis]="yAxis" 
*        volumeMemberPath="Volume"
*        highMemberPath="High"
*        lowMemberPath="Low">
*      </igx-slow-stochastic-oscillator-indicator>    
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxSlowStochasticOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.volumeMemberPath = "Volume";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* this.chart.series.add(series);
* ```
*/
export const IgxSlowStochasticOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-slow-stochastic-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSlowStochasticOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSlowStochasticOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : SlowStochasticOscillatorIndicator
{
	return new SlowStochasticOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SlowStochasticOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current SlowStochasticOscillatorIndicator object.
	 * The typical, and initial, value for SlowStochasticOscillatorIndicator periods is 14.
	* 
	* ```html
	* <igx-data-chart 
	*     width=500px
	*     height=500px
	*     [dataSource]="data" >
	*     <igx-ordinal-time-x-axis
	*         dateTimeMemberPath="TimeStamp"
	*         #xAxis>
	*       </igx-ordinal-time-x-axis>
	*     <igx-numeric-y-axis
	*        #yAxis></igx-numeric-y-axis>
	*     <igx-slow-stochastic-oscillator-indicator
	*        [xAxis]="xAxis"
	*        [yAxis]="yAxis" 
	*        closeMemberPath="Close"
	*        highMemberPath="High"
	*        lowMemberPath="Low"
	*        period=10>
	*      </igx-slow-stochastic-oscillator-indicator>    
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxSlowStochasticOscillatorIndicatorComponent();
	* series.period=10;
	* ```
	*/
	get period() : number {
		return (this.i.period as number);
	}
	@Input()
	set period(v: number) {
		this.i.period = +v;
	}
}
