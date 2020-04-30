/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SectionHeaderDescriptionMetadata } from "./SectionHeaderDescriptionMetadata";
import { SummaryRowRootDescriptionMetadata } from "./SummaryRowRootDescriptionMetadata";
import { SummaryRowSectionDescriptionMetadata } from "./SummaryRowSectionDescriptionMetadata";
import { RowSeparatorDescriptionMetadata } from "./RowSeparatorDescriptionMetadata";
import { HeaderSeparatorDescriptionMetadata } from "./HeaderSeparatorDescriptionMetadata";
import { ColumnResizingSeparatorDescriptionMetadata } from "./ColumnResizingSeparatorDescriptionMetadata";
import { ColumnMovingSeparatorDescriptionMetadata } from "./ColumnMovingSeparatorDescriptionMetadata";
import { PinnedAreaSeparatorDescriptionMetadata } from "./PinnedAreaSeparatorDescriptionMetadata";
import { GridAnimationSettingsDescriptionMetadata } from "./GridAnimationSettingsDescriptionMetadata";
import { GridCellPositionDescriptionMetadata } from "./GridCellPositionDescriptionMetadata";
import { GridFilterExpressionsEventArgsDescriptionMetadata } from "./GridFilterExpressionsEventArgsDescriptionMetadata";
import { GridSortDescriptionsChangedEventArgsDescriptionMetadata } from "./GridSortDescriptionsChangedEventArgsDescriptionMetadata";
import { GridGroupDescriptionsChangedEventArgsDescriptionMetadata } from "./GridGroupDescriptionsChangedEventArgsDescriptionMetadata";
import { ColumnHiddenChangedEventArgsDescriptionMetadata } from "./ColumnHiddenChangedEventArgsDescriptionMetadata";
import { GridColumnsAutoGeneratedEventArgsDescriptionMetadata } from "./GridColumnsAutoGeneratedEventArgsDescriptionMetadata";
import { GridSelectedItemsChangedEventArgsDescriptionMetadata } from "./GridSelectedItemsChangedEventArgsDescriptionMetadata";
import { GridSelectedKeysChangedEventArgsDescriptionMetadata } from "./GridSelectedKeysChangedEventArgsDescriptionMetadata";
import { GridSelectedCellsChangedEventArgsDescriptionMetadata } from "./GridSelectedCellsChangedEventArgsDescriptionMetadata";
import { GridActiveCellChangedEventArgsDescriptionMetadata } from "./GridActiveCellChangedEventArgsDescriptionMetadata";
import { GridSelectedCellRangesChangedEventArgsDescriptionMetadata } from "./GridSelectedCellRangesChangedEventArgsDescriptionMetadata";
import { LiveGridDescription } from "./LiveGridDescription";
import { GridCellEventArgsDescription } from "./GridCellEventArgsDescription";

/**
 * @hidden 
 */
export class LiveGridDescriptionMetadata extends Base {
	static $t: Type = markType(LiveGridDescriptionMetadata, 'LiveGridDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Columns", "Collection:Column:GridColumnsCollection:Column");
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Grids.XamDataGrid");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LiveGridDescriptionMetadata._metadata == null) {
			LiveGridDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LiveGridDescriptionMetadata.fillMetadata(context, LiveGridDescriptionMetadata._metadata);
			SectionHeaderDescriptionMetadata.register(context);
			SummaryRowRootDescriptionMetadata.register(context);
			SummaryRowSectionDescriptionMetadata.register(context);
			RowSeparatorDescriptionMetadata.register(context);
			HeaderSeparatorDescriptionMetadata.register(context);
			ColumnResizingSeparatorDescriptionMetadata.register(context);
			ColumnMovingSeparatorDescriptionMetadata.register(context);
			PinnedAreaSeparatorDescriptionMetadata.register(context);
			GridAnimationSettingsDescriptionMetadata.register(context);
			GridCellPositionDescriptionMetadata.register(context);
			GridFilterExpressionsEventArgsDescriptionMetadata.register(context);
			GridCellEventArgsDescriptionMetadata.register(context);
			GridSortDescriptionsChangedEventArgsDescriptionMetadata.register(context);
			GridGroupDescriptionsChangedEventArgsDescriptionMetadata.register(context);
			ColumnHiddenChangedEventArgsDescriptionMetadata.register(context);
			GridColumnsAutoGeneratedEventArgsDescriptionMetadata.register(context);
			GridSelectedItemsChangedEventArgsDescriptionMetadata.register(context);
			GridSelectedKeysChangedEventArgsDescriptionMetadata.register(context);
			GridSelectedCellsChangedEventArgsDescriptionMetadata.register(context);
			GridActiveCellChangedEventArgsDescriptionMetadata.register(context);
			GridSelectedCellRangesChangedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ColumnResizingMode", "ExportedType:string:ColumnResizingMode");
		metadata.item("ColumnMovingMode", "ExportedType:string:ColumnMovingMode");
		metadata.item("SectionHeader", "ExportedType:SectionHeader");
		metadata.item("SummaryRowRoot", "ExportedType:SummaryRowRoot");
		metadata.item("SummaryRowSection", "ExportedType:SummaryRowSection");
		metadata.item("RowSeparator", "ExportedType:RowSeparator");
		metadata.item("HeaderSeparator", "ExportedType:HeaderSeparator");
		metadata.item("ColumnResizingSeparator", "ExportedType:ColumnResizingSeparator");
		metadata.item("ColumnMovingSeparator", "ExportedType:ColumnMovingSeparator");
		metadata.item("PinnedAreaSeparator", "ExportedType:PinnedAreaSeparator");
		metadata.item("DataSourceDesiredProperties", "Array:string");
		metadata.item("RowHeight", "Number:int");
		metadata.item("DefaultColumnMinWidth", "Number:double");
		metadata.item("HeaderHeight", "Number:int");
		metadata.item("DataSourceRef", "(w:ItemsSource,wf:ItemsSource)DataRef::object");
		metadata.item("HeaderClickAction", "ExportedType:string:HeaderClickAction");
		metadata.item("AutoGenerateColumns", "Boolean");
		metadata.item("RowSeparatorHeight", "Number:int");
		metadata.item("IsPlaceholderRenderingEnabled", "Boolean");
		metadata.item("ColumnAddingAnimationMode", "ExportedType:string:ColumnShowingAnimationMode");
		metadata.item("ColumnPropertyUpdatingAnimationMode", "ExportedType:string:ColumnPropertyUpdatingAnimationMode");
		metadata.item("CellDataLoadedAnimationMode", "ExportedType:string:CellDataLoadedAnimationMode");
		metadata.item("RowSelectionAnimationMode", "ExportedType:string:RowSelectionAnimationMode");
		metadata.item("CellSelectionAnimationMode", "ExportedType:string:CellSelectionAnimationMode");
		metadata.item("AnimationSettings", "ExportedType:GridAnimationSettings");
		metadata.item("ColumnResizingAnimationMode", "ExportedType:string:ColumnResizingAnimationMode");
		metadata.item("ColumnShowingAnimationMode", "ExportedType:string:ColumnShowingAnimationMode");
		metadata.item("ColumnMovingAnimationMode", "ExportedType:string:ColumnMovingAnimationMode");
		metadata.item("ColumnHidingAnimationMode", "ExportedType:string:ColumnHidingAnimationMode");
		metadata.item("ColumnExchangingAnimationMode", "ExportedType:string:ColumnExchangingAnimationMode");
		metadata.item("SelectionMode", "ExportedType:string:GridSelectionMode");
		metadata.item("ActivationMode", "ExportedType:string:GridActivationMode");
		metadata.item("SelectionBehavior", "ExportedType:string:GridSelectionBehavior");
		metadata.item("IsFilterUIEnabled", "Boolean");
		metadata.item("IsGroupRowSticky", "Boolean");
		metadata.item("IsHeaderSeparatorVisible", "Boolean");
		metadata.item("CellSelectedBackground", "Brush");
		metadata.item("SectionHeaderSelectedBackground", "Brush");
		metadata.item("SummaryRootBackground", "Brush");
		metadata.item("SummarySectionBackground", "Brush");
		metadata.item("PinnedRowOpacity", "Number:double");
		metadata.item("StickyRowBackground", "Brush");
		metadata.item("PinnedRowBackground", "Brush");
		metadata.item("LastStickyRowBackground", "Brush");
		metadata.item("ActiveCell", "ExportedType:GridCellPosition");
		metadata.item("CellBackground", "Brush");
		metadata.item("CellTextColor", "Brush");
		metadata.item("HeaderSortIndicatorColor", "Brush");
		metadata.item("HeaderSortIndicatorStyle", "ExportedType:string:SortIndicatorStyle");
		metadata.item("CellFontFamily", "(w:CellFontFamily/FontFamilyTransform,wf:CellFontFamily,web:cellTextStyle/FontFamilyTransform)String");
		metadata.item("CellFontSize", "(w:CellFontSize,wf:CellFontSize,web:cellTextStyle/FontSizeTransform)Number:double");
		metadata.item("CellFontStyle", "(w:CellFontStyle/FontStyleTransform,wf:CellFontFamily/FontStyleTransform,web:cellTextStyle/FontStyleTransform)String");
		metadata.item("CellFontWeight", "(w:CellFontWeight/FontWeightTransform,wf:CellFontFamily/FontWeightTransform,web:cellTextStyle/FontWeightTransform)String");
		metadata.item("SectionHeaderBackground", "Brush");
		metadata.item("SectionHeaderTextColor", "Brush");
		metadata.item("SectionHeaderFontFamily", "(w:SectionHeaderFontFamily/FontFamilyTransform,wf:SectionHeaderFontFamily,web:sectionHeaderTextStyle/FontFamilyTransform)String");
		metadata.item("SectionHeaderFontSize", "(w:SectionHeaderFontSize,wf:SectionHeaderFontSize,web:sectionHeaderTextStyle/FontSizeTransform)Number:double");
		metadata.item("SectionHeaderFontStyle", "(w:SectionHeaderFontStyle/FontStyleTransform,wf:SectionHeaderFontFamily/FontStyleTransform,web:sectionHeaderTextStyle/FontStyleTransform)String");
		metadata.item("SectionHeaderFontWeight", "(w:SectionHeaderFontWeight/FontWeightTransform,wf:SectionHeaderFontFamily/FontWeightTransform,web:sectionHeaderTextStyle/FontWeightTransform)String");
		metadata.item("SummaryRootTextColor", "Brush");
		metadata.item("SummarySectionTextColor", "Brush");
		metadata.item("SummaryRootNameTextColor", "Brush");
		metadata.item("SummarySectionNameTextColor", "Brush");
		metadata.item("SummaryRootSelectedBackground", "Brush");
		metadata.item("SummarySectionSelectedBackground", "Brush");
		metadata.item("SummaryFontFamily", "(w:SummaryFontFamily/FontFamilyTransform,wf:SummaryFontFamily,web:summaryTextStyle/FontFamilyTransform)String");
		metadata.item("SummaryFontSize", "(w:SummaryFontSize,wf:SummaryFontSize,web:summaryTextStyle/FontSizeTransform)Number:double");
		metadata.item("SummaryFontStyle", "(w:SummaryFontStyle/FontStyleTransform,wf:SummaryFontFamily/FontStyleTransform,web:summaryTextStyle/FontStyleTransform)String");
		metadata.item("SummaryFontWeight", "(w:SummaryFontWeight/FontWeightTransform,wf:SummaryFontFamily/FontWeightTransform,web:summaryTextStyle/FontWeightTransform)String");
		metadata.item("SummarySectionFontFamily", "(w:SummarySectionFontFamily/FontFamilyTransform,wf:SummarySectionFontFamily,web:summarySectionTextStyle/FontFamilyTransform)String");
		metadata.item("SummarySectionFontSize", "(w:SummarySectionFontSize,wf:SummarySectionFontSize,web:summarySectionTextStyle/FontSizeTransform)Number:double");
		metadata.item("SummarySectionFontStyle", "(w:SummarySectionFontStyle/FontStyleTransform,wf:SummarySectionFontFamily/FontStyleTransform,web:summarySectionTextStyle/FontStyleTransform)String");
		metadata.item("SummarySectionFontWeight", "(w:SummarySectionFontWeight/FontWeightTransform,wf:SummarySectionFontFamily/FontWeightTransform,web:summarySectionTextStyle/FontWeightTransform)String");
		metadata.item("PinnedAreaSeparatorWidth", "Number:int");
		metadata.item("HeaderSeparatorWidth", "Number:int");
		metadata.item("HeaderSeparatorBackground", "Brush");
		metadata.item("HeaderBackground", "Brush");
		metadata.item("HeaderTextColor", "Brush");
		metadata.item("HeaderFontFamily", "(w:HeaderFontFamily/FontFamilyTransform,wf:HeaderFontFamily,web:headerTextStyle/FontFamilyTransform)String");
		metadata.item("HeaderFontSize", "(w:HeaderFontSize,wf:HeaderFontSize,web:headerTextStyle/FontSizeTransform)Number:double");
		metadata.item("HeaderFontStyle", "(w:HeaderFontStyle/FontStyleTransform,wf:HeaderFontFamily/FontStyleTransform,web:headerTextStyle/FontStyleTransform)String");
		metadata.item("HeaderFontWeight", "(w:HeaderFontWeight/FontWeightTransform,wf:HeaderFontFamily/FontWeightTransform,web:headerTextStyle/FontWeightTransform)String");
		metadata.item("RowSeparatorBackground", "Brush");
		metadata.item("RowSeparatorStickyRowBackground", "Brush");
		metadata.item("RowSeparatorLastStickyRowBackground", "Brush");
		metadata.item("RowSeparatorPinnedRowBackground", "Brush");
		metadata.item("ColumnResizingSeparatorWidth", "Number:int");
		metadata.item("ColumnMovingSeparatorWidth", "Number:int");
		metadata.item("ColumnResizingSeparatorBackground", "Brush");
		metadata.item("ColumnMovingSeparatorBackground", "Brush");
		metadata.item("ShiftSectionContent", "Boolean");
		metadata.item("SummaryScope", "ExportedType:string:DataSourceSummaryScope");
		metadata.item("IsGroupCollapsable", "Boolean");
		metadata.item("GroupHeaderDisplayMode", "ExportedType:string:DataSourceSectionHeaderDisplayMode");
		metadata.item("IsGroupExpandedDefault", "Boolean");
		metadata.item("GroupSummaryDisplayMode", "ExportedType:string:GroupSummaryDisplayMode");
		metadata.item("PrimaryKey", "Array:string");
		metadata.item("ActualPrimaryKey", "Array:string");
		metadata.item("ReactsToSortChanges", "Boolean");
		metadata.item("ReactsToGroupChanges", "Boolean");
		metadata.item("ReactsToFilterChanges", "Boolean");
		metadata.item("FilterExpressionsChangingRef", "EventRef::filterExpressionsChanging");
		metadata.item("FilterExpressionsChangedRef", "EventRef::filterExpressionsChanged");
		metadata.item("CellPreviewPointerDownRef", "EventRef::cellPreviewPointerDown");
		metadata.item("CellPreviewPointerUpRef", "EventRef::cellPreviewPointerUp");
		metadata.item("CellPointerDownRef", "EventRef::cellPointerDown");
		metadata.item("CellPointerUpRef", "EventRef::cellPointerUp");
		metadata.item("CellClickedRef", "EventRef::cellClicked");
		metadata.item("SortDescriptionsChangedRef", "EventRef::sortDescriptionsChanged");
		metadata.item("GroupDescriptionsChangedRef", "EventRef::groupDescriptionsChanged");
		metadata.item("ColumnHiddenChangedRef", "EventRef::columnHiddenChanged");
		metadata.item("ColumnsAutoGeneratedRef", "EventRef::columnsAutoGenerated");
		metadata.item("SelectedItemsChangedRef", "EventRef::selectedItemsChanged");
		metadata.item("SelectedKeysChangedRef", "EventRef::selectedKeysChanged");
		metadata.item("SelectedCellsChangedRef", "EventRef::selectedCellsChanged");
		metadata.item("ActiveCellChangedRef", "EventRef::activeCellChanged");
		metadata.item("SelectedCellRangesChangedRef", "EventRef::selectedCellRangesChanged");
		LiveGridDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		LiveGridDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LiveGrid", () => new LiveGridDescription());
		context.register("LiveGrid", LiveGridDescriptionMetadata._metadata);
	}
}

/**
 * @hidden 
 */
export class GridCellEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GridCellEventArgsDescriptionMetadata, 'GridCellEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridCellEventArgsDescriptionMetadata._metadata == null) {
			GridCellEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridCellEventArgsDescriptionMetadata.fillMetadata(context, GridCellEventArgsDescriptionMetadata._metadata);
			LiveGridDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Grid", "ExportedType:Grid");
	}
	static register(context: TypeDescriptionContext): void {
		GridCellEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridCellEventArgs", () => new GridCellEventArgsDescription());
		context.register("GridCellEventArgs", GridCellEventArgsDescriptionMetadata._metadata);
	}
}


