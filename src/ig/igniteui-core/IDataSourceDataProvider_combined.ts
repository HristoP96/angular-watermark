/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ISupportsDataChangeNotifications, ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsCount, IDataSourceSupportsCount_$type } from "./IDataSourceSupportsCount";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IDataSourceDataProviderUpdateNotifier } from "./IDataSourceDataProviderUpdateNotifier";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { DataSourceSummaryScope } from "./DataSourceSummaryScope";
import { Base, Type, IList$1, IList$1_$type, markType, typeGetValue } from "./type";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
import { SyncableObservableCollection$2 } from "./SyncableObservableCollection$2";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { IDataSourceSupportsIndexedAccess, IDataSourceSupportsIndexedAccess_$type } from "./IDataSourceSupportsIndexedAccess";
import { IDataSourceUpdateNotifier } from "./IDataSourceUpdateNotifier";
import { DataSourceSectionHeaderDisplayMode } from "./DataSourceSectionHeaderDisplayMode";
import { DataSourceSchemaChangedEventArgs } from "./DataSourceSchemaChangedEventArgs";
import { DataSourceRowExpansionChangedEventArgs } from "./DataSourceRowExpansionChangedEventArgs";
import { DataSourceRowType } from "./DataSourceRowType";
import { ISummaryResult } from "./ISummaryResult";
import { SummaryOperand } from "./SummaryOperand";
import { Convert } from "./Convert";
import { truncate, isNaN_ } from "./number";
import { toOADate, fromOADate } from "./dateExtended";
import { DefaultSummaryResult } from "./DefaultSummaryResult";
import { stringCompare } from "./string";
import { ArgumentNullException } from "./ArgumentNullException";

/**
 * @hidden 
 */
export interface IDataSourceDataProvider extends ISupportsDataChangeNotifications, IDataSourceSupportsCount { 
	getItemValue(item: any, valueName: string): any;
schemaChanged: (sender: any, args: DataSourceDataProviderSchemaChangedEventArgs) => void;
readonly actualSchema: IDataSourceSchema;
executionContext: IDataSourceExecutionContext;
updateNotifier: IDataSourceDataProviderUpdateNotifier;
queueAutoRefresh(): void;
deferAutoRefresh: boolean;
flushAutoRefresh(): void;
refresh(): void;
readonly isSortingSupported: boolean;
readonly isGroupingSupported: boolean;
readonly sortDescriptions: SortDescriptionCollection;
readonly groupDescriptions: SortDescriptionCollection;
readonly summaryDescriptions: SummaryDescriptionCollection;
summaryScope: DataSourceSummaryScope;
readonly isFilteringSupported: boolean;
readonly filterExpressions: FilterExpressionCollection;
propertiesRequested: string[];
readonly notifyUsingSourceIndexes: boolean;
indexOfItem(item: any): number;
indexOfKey(key: any[]): number;
readonly isItemIndexLookupSupported: boolean;
readonly isKeyIndexLookupSupported: boolean;
resolveSchemaPropertyType(propertyPath: string): DataSourceSchemaPropertyType;
}

/**
 * @hidden 
 */
export let IDataSourceDataProvider_$type = new Type(null, 'IDataSourceDataProvider', null, [ISupportsDataChangeNotifications_$type, IDataSourceSupportsCount_$type]);

/**
 * @hidden 
 */
export interface IFilterExpression { 
	evaluate(item: any, dataProvider: IDataSourceDataProvider, schema: IDataSourceSchema): any;
readonly isPropertyReference: boolean;
readonly isOperation: boolean;
readonly isFunction: boolean;
readonly isLiteral: boolean;
readonly isNull: boolean;
match(item: any, dataProvider: IDataSourceDataProvider, schema: IDataSourceSchema): boolean;
readonly precedence: number;
readonly isAutoGenerated: boolean;
markAutoGenerated(): void;
}

/**
 * @hidden 
 */
export let IFilterExpression_$type = new Type(null, 'IFilterExpression');

/**
 * @hidden 
 */
export class FilterExpressionCollection extends Base {
	static $t: Type = markType(FilterExpressionCollection, 'FilterExpressionCollection');
	private _syncTarget: FilterExpressionCollection = null;
	get syncTarget(): FilterExpressionCollection {
		return this._syncTarget;
	}
	set syncTarget(value: FilterExpressionCollection) {
		if (value == null) {
			this._inner.syncTarget = null;
			this._syncTarget = null;
			return;
		}
		this._syncTarget = value;
		this._inner.syncTarget = this._syncTarget._inner;
	}
	private _inner: SyncableObservableCollection$1<IFilterExpression> = null;
	constructor() {
		super();
		this._inner = new SyncableObservableCollection$1<IFilterExpression>(IFilterExpression_$type);
	}
	add(item: IFilterExpression): boolean {
		return this._inner.add(item);
	}
	insert(index: number, item: IFilterExpression): void {
		this._inner.add1(index, item);
	}
	clear(): void {
		this._inner.clear();
	}
	get(index: number): IFilterExpression {
		return this._inner.get(index);
	}
	indexOf(item: IFilterExpression): number {
		return this._inner.indexOf(item);
	}
	remove(item: IFilterExpression): boolean {
		return this._inner.remove1(item);
	}
	removeAt(index: number): IFilterExpression {
		return this._inner.remove(index);
	}
	set(index: number, value: IFilterExpression): IFilterExpression {
		return this._inner.set(index, value);
	}
	size(): number {
		return this._inner.size();
	}
	get onChanged(): () => void {
		return this._inner.onChanged;
	}
	set onChanged(value: () => void) {
		this._inner.onChanged = value;
	}
	addListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this._inner.addListener(eventHandler);
	}
	removeListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this._inner.removeListener(eventHandler);
	}
	get all(): IList$1<IFilterExpression> {
		return this._inner.all;
	}
}

/**
 * @hidden 
 */
export interface IDataSource extends ISupportsDataChangeNotifications, IDataSourceSupportsIndexedAccess { 
	schemaChanged: (sender: any, args: DataSourceSchemaChangedEventArgs) => void;
rowExpansionChanged: (sender: any, args: DataSourceRowExpansionChangedEventArgs) => void;
isPlaceholderItem(index: number): boolean;
getItemPropertyAtIndex(index: number, valueName: string): any;
getItemProperty(item: any, propertyName: string): any;
updateNotifier: IDataSourceUpdateNotifier;
readonly executionContext: IDataSourceExecutionContext;
readonly actualSchema: IDataSourceSchema;
firstVisibleIndexRequested: number;
lastVisibleIndexRequested: number;
readonly isVirtual: boolean;
readonly isSortingSupported: boolean;
readonly sortDescriptions: SortDescriptionCollection;
readonly groupDescriptions: SortDescriptionCollection;
readonly summaryDescriptions: SummaryDescriptionCollection;
summaryScope: DataSourceSummaryScope;
readonly isFilteringSupported: boolean;
readonly notifyUsingSourceIndexes: boolean;
readonly filterExpressions: FilterExpressionCollection;
queueAutoRefresh(): void;
deferAutoRefresh: boolean;
flushAutoRefresh(): void;
refresh(): void;
primaryKey: string[];
readonly actualPrimaryKey: string[];
propertiesRequested: string[];
indexOfItem(item: any): number;
indexOfKey(key: any[]): number;
readonly isItemIndexLookupSupported: boolean;
readonly isKeyIndexLookupSupported: boolean;
readonly isGroupingSupported: boolean;
sectionHeaderDisplayMode: DataSourceSectionHeaderDisplayMode;
isSectionCollapsable: boolean;
isSectionExpandedDefault: boolean;
includeSummaryRowsInSection: boolean;
isSectionSummaryRowsAtBottom: boolean;
isSectionHeaderNormalRow: boolean;
isSectionContentVisible: boolean;
getRowType(rowIndex: number): DataSourceRowType;
getMainValuePath(rowType: DataSourceRowType): string;
getStickyRows(): number[];
getStickyRowsInRange(firstRowIndex: number, lastRowIndex: number): number[];
getStickyRowPriority(row: number): number;
isExclusivelySticky(row: number): boolean;
isRowSpanning(rowType: DataSourceRowType): boolean;
pinRow(key: any[]): void;
unpinRow(key: any[]): void;
clearPinnedRows(): void;
isRowPinned(row: number): boolean;
shouldEmitSectionHeaders: boolean;
shouldEmitSectionFooters: boolean;
shouldEmitShiftedRows: boolean;
resolveSchemaPropertyType(propertyPath: string): DataSourceSchemaPropertyType;
setIsRowExpandedAtIndex(rowIndex: number, isExpanded: boolean): void;
getIsRowExpandedAtIndex(rowIndex: number): boolean;
getRowLevel(rowIndex: number): number;
getRootSummaryRowCount(): number;
getRootSummaryResults(): ISummaryResult[];
getSectionSummaryResults(sectionIndex: number): ISummaryResult[][];
clone(): IDataSource;
}

/**
 * @hidden 
 */
export let IDataSource_$type = new Type(null, 'IDataSource', null, [ISupportsDataChangeNotifications_$type, IDataSourceSupportsIndexedAccess_$type]);

/**
 * @hidden 
 */
export abstract class SummaryCalculator extends Base {
	static $t: Type = markType(SummaryCalculator, 'SummaryCalculator');
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _propertyType: DataSourceSchemaPropertyType = <DataSourceSchemaPropertyType>0;
	get propertyType(): DataSourceSchemaPropertyType {
		return this._propertyType;
	}
	set propertyType(value: DataSourceSchemaPropertyType) {
		this._propertyType = value;
	}
	private _dataSource: IDataSource = null;
	get dataSource(): IDataSource {
		return this._dataSource;
	}
	set dataSource(value: IDataSource) {
		this._dataSource = value;
	}
	abstract get displayName(): string;
	private _isSummaryDirty: boolean = false;
	get isSummaryDirty(): boolean {
		return this._isSummaryDirty;
	}
	set isSummaryDirty(value: boolean) {
		this._isSummaryDirty = value;
	}
	private _operand: SummaryOperand = SummaryOperand.Custom;
	protected get_operand(): SummaryOperand {
		return this._operand;
	}
	get operand(): SummaryOperand {
		return this.get_operand();
	}
	beginCalculation(dataSource: IDataSource, propertyName: string): void {
		this.dataSource = dataSource;
		this.propertyName = propertyName;
		if (this.propertyName != null) {
			this.propertyType = dataSource.resolveSchemaPropertyType(this.propertyName);
		}
		this.isSummaryDirty = false;
	}
	endCalculation(): ISummaryResult {
		return null;
	}
	aggregate(item: any): void {
	}
	itemAdded(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		return previousResult;
	}
	itemRemoved(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		return previousResult;
	}
	protected getItemAsDouble(item: any): number {
		if (this.dataSource == null) {
			return NaN;
		}
		let propertyValue = this.dataSource.getItemProperty(item, this.propertyName);
		if (propertyValue == null) {
			return NaN;
		}
		return this.getValueAsDouble(propertyValue);
	}
	protected getValueAsDouble(value: any): number {
		if (value == null) {
			return NaN;
		}
		switch (this.propertyType) {
			case DataSourceSchemaPropertyType.DecimalValue: return <number><number>value;
			case DataSourceSchemaPropertyType.DoubleValue: return <number>value;
			case DataSourceSchemaPropertyType.IntValue: return typeGetValue(value);
			case DataSourceSchemaPropertyType.LongValue: return typeGetValue(value);
			case DataSourceSchemaPropertyType.ShortValue: return typeGetValue(value);
			case DataSourceSchemaPropertyType.SingleValue: return <number>value;
			case DataSourceSchemaPropertyType.DateTimeValue: return toOADate((<Date>value));
			case DataSourceSchemaPropertyType.ObjectValue: try {
				return Convert.toDouble3(value);
			}
			catch (e) {
				return NaN;
			}
		}

		return 0;
	}
	protected getExpectedTypeFromDouble(value: number): any {
		switch (this.propertyType) {
			case DataSourceSchemaPropertyType.DecimalValue: return <number>value;
			case DataSourceSchemaPropertyType.DoubleValue: return value;
			case DataSourceSchemaPropertyType.IntValue: return <number>truncate(value);
			case DataSourceSchemaPropertyType.LongValue: return <number>truncate(value);
			case DataSourceSchemaPropertyType.ShortValue: return <number>truncate(value);
			case DataSourceSchemaPropertyType.SingleValue: return <number>value;
			case DataSourceSchemaPropertyType.DateTimeValue: return fromOADate(value);
			default: return value;
		}

	}
}

/**
 * @hidden 
 */
export class SumSummaryCalculator extends SummaryCalculator {
	static $t: Type = markType(SumSummaryCalculator, 'SumSummaryCalculator', (<any>SummaryCalculator).$type);
	private _sum: number = 0;
	protected get_displayName(): string {
		return "Sum";
	}
	get displayName(): string {
		return this.get_displayName();
	}
	protected get_operand(): SummaryOperand {
		return SummaryOperand.Sum;
	}
	beginCalculation(dataSource: IDataSource, propertyName: string): void {
		super.beginCalculation(dataSource, propertyName);
		this._sum = 0;
	}
	endCalculation(): ISummaryResult {
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Sum, this.getExpectedTypeFromDouble(this._sum));
	}
	aggregate(item: any): void {
		let itemValue: number = this.getItemAsDouble(item);
		if (!isNaN_(itemValue)) {
			this._sum += itemValue;
		}
	}
	itemAdded(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		let itemValue: number = this.getItemAsDouble(item);
		if (isNaN_(itemValue)) {
			itemValue = 0;
		}
		if (previousResult == null) {
			return new DefaultSummaryResult(this.propertyName, SummaryOperand.Sum, this.getExpectedTypeFromDouble(itemValue));
		}
		let sum: number = this.getValueAsDouble(previousResult.value) + itemValue;
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Sum, this.getExpectedTypeFromDouble(sum));
	}
	itemRemoved(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		let itemValue: number = this.getItemAsDouble(item);
		if (isNaN_(itemValue)) {
			itemValue = 0;
		}
		let sum: number = this.getValueAsDouble(previousResult.value) - itemValue;
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Sum, this.getExpectedTypeFromDouble(sum));
	}
}

/**
 * @hidden 
 */
export class CountSummaryCalculator extends SummaryCalculator {
	static $t: Type = markType(CountSummaryCalculator, 'CountSummaryCalculator', (<any>SummaryCalculator).$type);
	private _count: number = 0;
	protected get_displayName(): string {
		return "Count";
	}
	get displayName(): string {
		return this.get_displayName();
	}
	protected get_operand(): SummaryOperand {
		return SummaryOperand.Count;
	}
	beginCalculation(dataSource: IDataSource, propertyName: string): void {
		super.beginCalculation(dataSource, propertyName);
		this.propertyType = DataSourceSchemaPropertyType.IntValue;
		this._count = 0;
	}
	endCalculation(): ISummaryResult {
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Count, this._count);
	}
	aggregate(item: any): void {
		this._count++;
	}
	itemAdded(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		if (previousResult == null) {
			return new DefaultSummaryResult(this.propertyName, SummaryOperand.Count, 1);
		}
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Count, typeGetValue(previousResult.value) + 1);
	}
	itemRemoved(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Count, typeGetValue(previousResult.value) - 1);
	}
}

/**
 * @hidden 
 */
export class AverageSummaryCalculator extends SummaryCalculator {
	static $t: Type = markType(AverageSummaryCalculator, 'AverageSummaryCalculator', (<any>SummaryCalculator).$type);
	private _sum: number = 0;
	private _count: number = 0;
	protected get_displayName(): string {
		return "Avg";
	}
	get displayName(): string {
		return this.get_displayName();
	}
	protected get_operand(): SummaryOperand {
		return SummaryOperand.Average;
	}
	beginCalculation(dataSource: IDataSource, propertyName: string): void {
		super.beginCalculation(dataSource, propertyName);
		this._sum = 0;
		this._count = 0;
	}
	endCalculation(): ISummaryResult {
		let avg: number = this._count > 0 ? this._sum / this._count : 0;
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Average, this.getExpectedTypeFromDouble(avg));
	}
	aggregate(item: any): void {
		let itemValue: number = this.getItemAsDouble(item);
		if (!isNaN_(itemValue)) {
			this._sum += itemValue;
			this._count++;
		}
	}
	itemAdded(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		let itemValue: number = this.getItemAsDouble(item);
		if (isNaN_(itemValue)) {
			itemValue = 0;
		}
		if (previousResult == null) {
			return new DefaultSummaryResult(this.propertyName, SummaryOperand.Average, this.getExpectedTypeFromDouble(itemValue));
		}
		let previousSum: number = this.getValueAsDouble(previousResult.value) * (currentCount - 1);
		let avg: number = (previousSum + itemValue) / currentCount;
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Average, this.getExpectedTypeFromDouble(avg));
	}
	itemRemoved(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		let itemValue: number = this.getItemAsDouble(item);
		if (isNaN_(itemValue)) {
			itemValue = 0;
		}
		let total: number = this.getValueAsDouble(previousResult.value) * (currentCount + 1);
		let avg: number = (total - itemValue) / currentCount;
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Average, this.getExpectedTypeFromDouble(avg));
	}
}

/**
 * @hidden 
 */
export class MaxSummaryCalculator extends SummaryCalculator {
	static $t: Type = markType(MaxSummaryCalculator, 'MaxSummaryCalculator', (<any>SummaryCalculator).$type);
	private _currMax: any = null;
	protected get_displayName(): string {
		return "Max";
	}
	get displayName(): string {
		return this.get_displayName();
	}
	protected get_operand(): SummaryOperand {
		return SummaryOperand.Max;
	}
	beginCalculation(dataSource: IDataSource, propertyName: string): void {
		super.beginCalculation(dataSource, propertyName);
		this._currMax = null;
	}
	endCalculation(): ISummaryResult {
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Max, this._currMax);
	}
	aggregate(item: any): void {
		this._currMax = this.maximum(item, this._currMax);
	}
	itemAdded(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		if (previousResult == null) {
			return new DefaultSummaryResult(this.propertyName, SummaryOperand.Max, this.maximum(item, null));
		}
		let max: any = this.maximum(item, previousResult.value);
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Max, max);
	}
	itemRemoved(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		let propertyValue = this.dataSource.getItemProperty(item, this.propertyName);
		if (Base.equalsStatic(propertyValue, previousResult.value)) {
			this.isSummaryDirty = true;
		}
		return previousResult;
	}
	private maximum(item: any, reference: any): any {
		let propertyValue = this.dataSource.getItemProperty(item, this.propertyName);
		if (reference == null) {
			return propertyValue;
		}
		if (propertyValue == null) {
			return reference;
		}
		switch (this.propertyType) {
			case DataSourceSchemaPropertyType.StringValue:
			reference = stringCompare(<string>propertyValue, <string>reference) > 0 ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.DecimalValue:
			reference = <number>propertyValue > <number>reference ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.DoubleValue:
			reference = <number>propertyValue > <number>reference ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.IntValue:
			reference = typeGetValue(propertyValue) > typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.LongValue:
			reference = typeGetValue(propertyValue) > typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.ShortValue:
			reference = typeGetValue(propertyValue) > typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.SingleValue:
			reference = <number>propertyValue > <number>reference ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.BooleanValue:
			reference = <boolean>propertyValue ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.ByteValue:
			reference = typeGetValue(propertyValue) > typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.DateTimeValue:
			let xVal_: any = propertyValue;
			let yVal_: any = reference;
			xVal_ = +xVal_;
			yVal_ = +yVal_;
			let xVal: number = typeGetValue(xVal_);
			let yVal: number = typeGetValue(yVal_);
			reference = Base.compareSimple(xVal, yVal) > 0 ? propertyValue : reference;
			break;

		}

		return reference;
	}
}

/**
 * @hidden 
 */
export class MinSummaryCalculator extends SummaryCalculator {
	static $t: Type = markType(MinSummaryCalculator, 'MinSummaryCalculator', (<any>SummaryCalculator).$type);
	private _currMin: any = null;
	protected get_displayName(): string {
		return "Min";
	}
	get displayName(): string {
		return this.get_displayName();
	}
	protected get_operand(): SummaryOperand {
		return SummaryOperand.Min;
	}
	beginCalculation(dataSource: IDataSource, propertyName: string): void {
		super.beginCalculation(dataSource, propertyName);
		this._currMin = null;
	}
	endCalculation(): ISummaryResult {
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Min, this._currMin);
	}
	aggregate(item: any): void {
		this._currMin = this.minimum(item, this._currMin);
	}
	itemAdded(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		if (previousResult == null) {
			return new DefaultSummaryResult(this.propertyName, SummaryOperand.Min, this.minimum(item, null));
		}
		let min: any = this.minimum(item, previousResult.value);
		return new DefaultSummaryResult(this.propertyName, SummaryOperand.Min, min);
	}
	itemRemoved(item: any, previousResult: ISummaryResult, currentCount: number): ISummaryResult {
		let propertyValue = this.dataSource.getItemProperty(item, this.propertyName);
		if (Base.equalsStatic(propertyValue, previousResult.value)) {
			this.isSummaryDirty = true;
		}
		return previousResult;
	}
	private minimum(item: any, reference: any): any {
		let propertyValue = this.dataSource.getItemProperty(item, this.propertyName);
		if (reference == null) {
			return propertyValue;
		}
		if (propertyValue == null) {
			return reference;
		}
		switch (this.propertyType) {
			case DataSourceSchemaPropertyType.StringValue:
			reference = stringCompare(<string>propertyValue, <string>reference) < 0 ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.DecimalValue:
			reference = <number>propertyValue < <number>reference ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.DoubleValue:
			reference = <number>propertyValue < <number>reference ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.IntValue:
			reference = typeGetValue(propertyValue) < typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.LongValue:
			reference = typeGetValue(propertyValue) < typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.ShortValue:
			reference = typeGetValue(propertyValue) < typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.SingleValue:
			reference = <number>propertyValue < <number>reference ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.BooleanValue:
			reference = !<boolean>propertyValue ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.ByteValue:
			reference = typeGetValue(propertyValue) < typeGetValue(reference) ? propertyValue : reference;
			break;

			case DataSourceSchemaPropertyType.DateTimeValue:
			let xVal_: any = propertyValue;
			let yVal_: any = reference;
			xVal_ = +xVal_;
			yVal_ = +yVal_;
			let xVal: number = typeGetValue(xVal_);
			let yVal: number = typeGetValue(yVal_);
			reference = Base.compareSimple(xVal, yVal) < 0 ? propertyValue : reference;
			break;

		}

		return reference;
	}
}

/**
 * @hidden 
 */
export class SummaryDescription extends Base {
	static $t: Type = markType(SummaryDescription, 'SummaryDescription');
	private _sealed: boolean = false;
	constructor(initNumber: number);
	constructor(initNumber: number, propertyName: string);
	constructor(initNumber: number, propertyName: string, operand: SummaryOperand);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let propertyName: string = <string>_rest[0];
				this.propertyName = propertyName;
				this.operand = SummaryOperand.Count;
			}
			break;

			case 2:
			{
				let propertyName: string = <string>_rest[0];
				let operand: SummaryOperand = <SummaryOperand>_rest[1];
				this.propertyName = propertyName;
				this.operand = operand;
			}
			break;

		}

	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _operand: SummaryOperand = <SummaryOperand>0;
	get operand(): SummaryOperand {
		return this._operand;
	}
	set operand(value: SummaryOperand) {
		this._operand = value;
		switch (this._operand) {
			case SummaryOperand.Min:
			this.calculator = new MinSummaryCalculator();
			break;

			case SummaryOperand.Max:
			this.calculator = new MaxSummaryCalculator();
			break;

			case SummaryOperand.Sum:
			this.calculator = new SumSummaryCalculator();
			break;

			case SummaryOperand.Average:
			this.calculator = new AverageSummaryCalculator();
			break;

			case SummaryOperand.Count:
			this.calculator = new CountSummaryCalculator();
			break;

		}

	}
	private _calculator: SummaryCalculator = null;
	get calculator(): SummaryCalculator {
		return this._calculator;
	}
	set calculator(value: SummaryCalculator) {
		this._calculator = value;
	}
	equals(other: any): boolean {
		let o: SummaryDescription = <SummaryDescription>other;
		if (o == null) {
			return super.equals(other);
		}
		return o.propertyName == this.propertyName && o.operand == this.operand;
	}
	getHashCode(): number {
		return Base.getHashCodeStatic(this.propertyName) * 17 + <number>this.operand;
	}
	seal(): void {
		this._sealed = true;
	}
	provideCalculator: (sender: any, args: ProvideCalculatorEventArgs) => void = null;
	private notifyProvideCalculator(): SummaryCalculator {
		if (this.provideCalculator != null) {
			let args = new ProvideCalculatorEventArgs();
			this.provideCalculator(this, args);
			return args.calculator;
		}
		return null;
	}
	getCalculator(): SummaryCalculator {
		switch (this._operand) {
			case SummaryOperand.Min: return new MinSummaryCalculator();
			case SummaryOperand.Max: return new MaxSummaryCalculator();
			case SummaryOperand.Sum: return new SumSummaryCalculator();
			case SummaryOperand.Average: return new AverageSummaryCalculator();
			case SummaryOperand.Count: return new CountSummaryCalculator();
			case SummaryOperand.Custom:
			let calculator = this.notifyProvideCalculator();
			if (calculator == null) {
				throw new ArgumentNullException(2, "Calculator", "No custom calculator was provided.");
			}
			return calculator;

		}

		return null;
	}
}

/**
 * @hidden 
 */
export class SummaryDescriptionCollection extends Base {
	static $t: Type = markType(SummaryDescriptionCollection, 'SummaryDescriptionCollection');
	getInner(): SyncableObservableCollection$1<SummaryDescription> {
		return this._inner;
	}
	private _syncTarget: SummaryDescriptionCollection = null;
	get syncTarget(): SummaryDescriptionCollection {
		return this._syncTarget;
	}
	set syncTarget(value: SummaryDescriptionCollection) {
		if (value == null) {
			this._inner.syncTarget = null;
			this._syncTarget = null;
			return;
		}
		this._syncTarget = value;
		this._inner.syncTarget = this._syncTarget._inner;
	}
	private _inner: SyncableObservableCollection$1<SummaryDescription> = null;
	constructor() {
		super();
		this._inner = new SyncableObservableCollection$1<SummaryDescription>((<any>SummaryDescription).$type);
	}
	add(item: SummaryDescription): boolean {
		return this._inner.add(item);
	}
	insert(index: number, item: SummaryDescription): void {
		this._inner.add1(index, item);
	}
	clear(): void {
		this._inner.clear();
	}
	get(index: number): SummaryDescription {
		return this._inner.get(index);
	}
	indexOf(item: SummaryDescription): number {
		return this._inner.indexOf(item);
	}
	remove(item: SummaryDescription): boolean {
		return this._inner.remove1(item);
	}
	removeAt(index: number): SummaryDescription {
		return this._inner.remove(index);
	}
	set(index: number, value: SummaryDescription): SummaryDescription {
		return this._inner.set(index, value);
	}
	size(): number {
		return this._inner.size();
	}
	addListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this._inner.addListener(eventHandler);
	}
	removeListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this._inner.removeListener(eventHandler);
	}
	get onChanged(): () => void {
		return this._inner.onChanged;
	}
	set onChanged(value: () => void) {
		this._inner.onChanged = value;
	}
	get all(): IList$1<SummaryDescription> {
		return this._inner.all;
	}
}

/**
 * @hidden 
 */
export class ProvideCalculatorEventArgs extends Base {
	static $t: Type = markType(ProvideCalculatorEventArgs, 'ProvideCalculatorEventArgs');
	private _calculator: SummaryCalculator = null;
	get calculator(): SummaryCalculator {
		return this._calculator;
	}
	set calculator(value: SummaryCalculator) {
		this._calculator = value;
	}
}

