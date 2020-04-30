/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, OnDestroy, EventEmitter, Output, ComponentRef, AfterViewInit, TemplateRef, Injector, ComponentFactoryResolver, Component, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { Visibility, Visibility_$type } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { PointUtil, IEnumerable, TypeRegistrar } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Rect } from 'igniteui-core/Rect';
import { DataTemplate } from 'igniteui-core/DataTemplate';
import { BrushCollection } from 'igniteui-core/BrushCollection';
import { XamLinearGauge } from './XamLinearGauge';
import { CollectionAdapter, brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, fromBrushCollection, toBrushCollection, ensureBool, ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { delegateCombine } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { LinearGaugeVisualData } from './LinearGaugeVisualData';
import { LinearGaugeStylingDefaults } from './LinearGaugeStylingDefaults';
import { LinearScaleOrientation, LinearScaleOrientation_$type } from './LinearScaleOrientation';
import { LinearGraphNeedleShape, LinearGraphNeedleShape_$type } from './LinearGraphNeedleShape';
import { IgxFormatLinearGraphLabelEventArgs } from './igx-format-linear-graph-label-event-args';
import { IgxAlignLinearGraphLabelEventArgs } from './igx-align-linear-graph-label-event-args';
import { IgxLinearGraphRangeComponent } from './igx-linear-graph-range-component';
import { XamLinearGraphRange } from './XamLinearGraphRange';
import { IgxLinearGraphRangeCollection } from './igx-linear-graph-range-collection';


export const IgxLinearGaugeComponent_PROVIDERS = [];


/**
 * A linear gauge for displaying a single value on a defined scale.
*/
@Component({
    selector: 'igx-linear-gauge',
    template: `<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxLinearGaugeComponent_PROVIDERS,
    host: { 'class': 'igx-linear-gauge ig-linear-gauge' },
    styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxLinearGaugeComponent implements AfterContentInit, OnDestroy {

    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._gauge.containerResized();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._gauge.containerResized();
    }
    get width(): string {
        return this._width;
    }
    private _container: any;

    @ContentChildren(IgxLinearGraphRangeComponent) contentRanges: QueryList<IgxLinearGraphRangeComponent>;
    /**
    * The ranges actually present in the chart. Do not directly modify this array.
    * This array's contents can be modified by causing Angular to reproject the child content.
    * Or adding and removing ranges from the manual ranges collection on the ranges property.
    */
    actualRanges: IgxLinearGraphRangeComponent[] = [];
    private _ranges: IgxLinearGraphRangeCollection = null;
    private _rangesAdapter: CollectionAdapter<IgxLinearGraphRangeComponent, XamLinearGraphRange> = null;
	/**
	 * A collection or manually added axes for the chart.
	*/
    get ranges(): IgxLinearGraphRangeCollection {
        if (this._ranges === null) {
            let coll = new IgxLinearGraphRangeCollection();
            let inner: SyncableObservableCollection$2<IgxLinearGraphRangeComponent, XamLinearGraphRange> = (<any>coll)._innerColl;
            inner.addListener((sender, e) => {
                switch (e.action) {
                    case NotifyCollectionChangedAction.Add:
                        this._rangesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Remove:
                        this._rangesAdapter.removeManualItemAt(e.oldStartingIndex);
                        break;
                    case NotifyCollectionChangedAction.Replace:
                        this._rangesAdapter.removeManualItemAt(e.oldStartingIndex);
                        this._rangesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Reset:
                        this._rangesAdapter.clearManualItems();
                        break;
                }
            });
            this._ranges = coll;
        }
        return this._ranges;
    }

    private _root: Element;
    constructor(
        private _renderer: Renderer2,
        private _elRef: ViewContainerRef,
        private _ngZone: NgZone,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector) {
       
        //super();

        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._zoneRunner = (act: () => void) => this._ngZone.run(act);

        this._implementation = this.createImplementation();
        this._container = _renderer.createElement("div");
        _renderer.appendChild(_elRef.element.nativeElement, this._container);
        _renderer.setStyle(this._container, "display", "block");
        _renderer.setStyle(this._container, "width", "100%");
        _renderer.setStyle(this._container, "height", "100%");
        var root: any;
        root = this._container;
        
        if (this._container.nativeElement != null) {
            root = this._container.nativeElement;
        }
        this._root = root;
        var ren: AngularRenderer = new AngularRenderer(
            root, this._renderer, window.document,
            this._ngZone,
            true,
            LinearGaugeStylingDefaults);

        this._wrapper = ren;
        var gauge = this.i;
        this._gauge = gauge;

        this._rangesAdapter = new CollectionAdapter<IgxLinearGraphRangeComponent, XamLinearGraphRange>(
            [],
            this.i.ranges,
            this.actualRanges,
            (c) => c.i,
            (i) => { 
                (<any>i)._provideRenderer(this._wrapper); 
                if (this._root && this._root.parentElement) {
                    (i as any)._styling(this._root, this, this);
                }
            },
            (i) => { (<any>i)._provideRenderer(null); }
        );

        gauge.provideContainer(ren);
        ren.addSizeWatcher(() => {
            this._gauge.containerResized();
        });
    }

    ngOnDestroy() {
        this._gauge.destroy();
        this._wrapper.destroy();
    }

    private _wrapper: AngularRenderer;
    
    protected createImplementation() {
        return new XamLinearGauge();
    }
    
    private _gauge: XamLinearGauge;
           
    ngAfterContentInit() {
        if (TypeRegistrar.isRegistered("IgxSimpleDefaultTooltipComponent")) {
            let c = TypeRegistrar.get("IgxSimpleDefaultTooltipComponent");
            let cf = this._componentFactoryResolver.resolveComponentFactory(c);

            let cr = this._dynamicContent.createComponent(cf);
            this._defaultTooltips = cr;
            (<any>cr.instance).onContentReady.subscribe(() => {
                this._onDefaultTooltipsReady(cr);
            });
            this._ensureTooltipCreated();
        }

        this._rangesAdapter.updateQuery(this.contentRanges);

        this._styling(this._root, this);
        if (this.actualRanges && this.actualRanges.length > 0) {
            var currRange = this.actualRanges;
            for (var i = 0; i < currRange.length; i++) {
                (currRange[i] as any)._styling(this._root, this, this);
            }
        }

        this.i.containerResized();
    }

    private _tooltipTemplate: TemplateRef<any> = null;
    private _tooltipContent: ComponentRef<any> = null;
    @Input()
    set tooltipTemplate(value: TemplateRef<any>) {
        this._tooltipTemplate = value;
        if (value == null) {
            if (this._tooltipContent !== null) {
                this._tooltipContent.destroy();
                this._tooltipContent = null;
            }
        }
        if (this._tooltipContent != null) {
            this._tooltipContent.instance.template = this._tooltipTemplate;
        } else {
            this._ensureTooltipCreated();
        }
    }
    get tooltipTemplate(): TemplateRef<any> {
        return this._tooltipTemplate;
    }

    private _ensureTooltipCreated() {
        if (this.i.toolTip == null) {
            let tooltip = this.createTooltip();
            if (tooltip == null) {
                return;
            }
            this._tooltipContent = tooltip;
            (<any>tooltip.instance).template = this._tooltipTemplate;
            this.i.toolTip = this.createWrapper(tooltip.location.nativeElement);
        }
    }

    private createWrapper(ele: any): AngularWrapper {
        let wrapper = new AngularWrapper(
            ele,
            this._renderer,
            this._ngZone
        );
        (<any>wrapper).updateToolTip = (<any>ele).updateToolTip;
        (<any>wrapper).hideToolTip = (<any>ele).hideToolTip;
        return wrapper;
    }

    private _defaultTooltips: ComponentRef<any> = null;
    private _ensureDefaultTooltip() {
        if (this._defaultTooltips == null) {
            return;
        }
        this._defaultTooltips.instance["ensureDefaultTooltip"](this);
    }

    private _onDefaultTooltipsReady(cr: ComponentRef<any>) {
        this._ensureDefaultTooltip();
    }

    private createTooltip(): ComponentRef<any> {
        if (!TypeRegistrar.isRegistered("IgxTooltipContainerComponent")) {
            return null;
        }
        let t = TypeRegistrar.get("IgxTooltipContainerComponent");
        let cf = this._componentFactoryResolver.resolveComponentFactory(t);
        let cr = this._dynamicContent.createComponent(cf);
        let ele: Element = cr.location.nativeElement;
        let self = this;

        (<any>ele).updateToolTip = function (c) {
            if (c.externalObject) {
                c = c.externalObject;
            } else {
                let ext = new IgxDataContext();
                (<any>ext)._implementation = c;
                c = ext;
            }

            if (ele.parentElement != self._container) {
                if (ele.parentElement != null) {
                    ele.parentElement.removeChild(ele);
                }

                self._container.appendChild(ele);
            }
            (<any>cr.instance).context = c;
            (<any>ele).style.display = "block";

            return true;
        };
        (<any>ele).hideToolTip = function () {
            (<any>ele).style.display = "none"
        };
        (<any>ele).style.display = "none"

        return cr;
    }

    protected _zoneRunner: (act: () => void) => void = null;
    protected _runInZone(act: () => void): void {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        } else {
            act();
        }
    }

    	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : XamLinearGauge {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxLinearGaugeComponent {
	    if (!internal) {
	                                    return null;
	                                }
	                                if (!internal.$type) {
	                                    return null;
	                                }
	                                let name = internal.$type.name;
	                                let externalName = "Igx" + name + "Component";
	                                if (!TypeRegistrar.isRegistered(externalName)) {
	                                    return null;
	                                }
	                                return TypeRegistrar.create(externalName);
	                            }

    	/**
	 * Gets a value indicating whether the bullet graph is currently animating.
	*/
	get animating() : boolean {
		return (this.i.animating as boolean);
	}
	/**
	 * Gets the transition progress of the animation when the control is animating.
	*/
	get transitionProgress() : number {
		return (this.i.transitionProgress as number);
	}
	@Input()
	set transitionProgress(v: number) {
		this.i.transitionProgress = +v;
	}
	/**
	 * Gets or sets the orientation of the scale.
	*/
	get orientation() : LinearScaleOrientation {
		return this.i.orientation;
	}
	@Input()
	set orientation(v: LinearScaleOrientation) {
		this.i.orientation = ensureEnum<LinearScaleOrientation>(LinearScaleOrientation_$type, v);
	}
	/**
	 * Gets or sets a collection of brushes to be used as the palette for linear gauge ranges.
	*/
	get rangeBrushes() : string[] {
		return fromBrushCollection(this.i.rangeBrushes);
	}
	@Input()
	set rangeBrushes(v: string[]) {
		this.i.rangeBrushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets a collection of brushes to be used as the palette for linear gauge outlines.
	*/
	get rangeOutlines() : string[] {
		return fromBrushCollection(this.i.rangeOutlines);
	}
	@Input()
	set rangeOutlines(v: string[]) {
		this.i.rangeOutlines = toBrushCollection(v);
	}
	/**
	 * Gets or sets the minimum value of the scale.
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	@Input()
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * Gets the resolved minimum value of the scale.
	*/
	get actualMinimumValue() : number {
		return (this.i.actualMinimumValue as number);
	}
	@Input()
	set actualMinimumValue(v: number) {
		this.i.actualMinimumValue = +v;
	}
	/**
	 * Gets or sets the maximum value of the scale.
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	@Input()
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * Gets the resolved maximum value of the scale.
	*/
	get actualMaximumValue() : number {
		return (this.i.actualMaximumValue as number);
	}
	@Input()
	set actualMaximumValue(v: number) {
		this.i.actualMaximumValue = +v;
	}
	/**
	 * Gets or sets the value at which the needle is positioned.
	*/
	get value() : number {
		return (this.i.value as number);
	}
	@Input()
	set value(v: number) {
		this.i.value = +v;
	}
	/**
	 * Gets or sets the shape to use when rendering the needle from a number of options.
	*/
	get needleShape() : LinearGraphNeedleShape {
		return this.i.needleShape;
	}
	@Input()
	set needleShape(v: LinearGraphNeedleShape) {
		this.i.needleShape = ensureEnum<LinearGraphNeedleShape>(LinearGraphNeedleShape_$type, v);
	}
	/**
	 * Gets or sets the name used for needle.
	*/
	get needleName() : string {
		return (this.i.needleName as string);
	}
	@Input()
	set needleName(v: string) {
		this.i.needleName = v;
	}
	/**
	 * Gets or sets the position at which to start rendering the ranges, measured from the front/bottom of the control as a value from 0 to 1.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get rangeInnerExtent() : number {
		return (this.i.rangeInnerExtent as number);
	}
	@Input()
	set rangeInnerExtent(v: number) {
		this.i.rangeInnerExtent = +v;
	}
	/**
	 * Gets or sets the position at which to start rendering the scale, measured from the bottom/front (when orientation is horizontal/vertical) of the control as a value from 0 to 1.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get scaleInnerExtent() : number {
		return (this.i.scaleInnerExtent as number);
	}
	@Input()
	set scaleInnerExtent(v: number) {
		this.i.scaleInnerExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the range as a value from 0 to 1 measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get rangeOuterExtent() : number {
		return (this.i.rangeOuterExtent as number);
	}
	@Input()
	set rangeOuterExtent(v: number) {
		this.i.rangeOuterExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the scale as a value from 0 to 1 measured from the bottom/front (when orientation is horizontal/vertical) of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get scaleOuterExtent() : number {
		return (this.i.scaleOuterExtent as number);
	}
	@Input()
	set scaleOuterExtent(v: number) {
		this.i.scaleOuterExtent = +v;
	}
	/**
	 * Gets or sets the position at which to start rendering the needle geometry, measured from the front/bottom of the linear gauge as a value from 0 to 1.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get needleInnerExtent() : number {
		return (this.i.needleInnerExtent as number);
	}
	@Input()
	set needleInnerExtent(v: number) {
		this.i.needleInnerExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the needle geometry as a value from 0 to 1 measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get needleOuterExtent() : number {
		return (this.i.needleOuterExtent as number);
	}
	@Input()
	set needleOuterExtent(v: number) {
		this.i.needleOuterExtent = +v;
	}
	/**
	 * Gets or sets the width of the needle's inner base.
	*/
	get needleInnerBaseWidth() : number {
		return (this.i.needleInnerBaseWidth as number);
	}
	@Input()
	set needleInnerBaseWidth(v: number) {
		this.i.needleInnerBaseWidth = +v;
	}
	/**
	 * Gets or sets the width of the needle's outer base.
	*/
	get needleOuterBaseWidth() : number {
		return (this.i.needleOuterBaseWidth as number);
	}
	@Input()
	set needleOuterBaseWidth(v: number) {
		this.i.needleOuterBaseWidth = +v;
	}
	/**
	 * Gets or sets the width of the needle's inner point.
	*/
	get needleInnerPointWidth() : number {
		return (this.i.needleInnerPointWidth as number);
	}
	@Input()
	set needleInnerPointWidth(v: number) {
		this.i.needleInnerPointWidth = +v;
	}
	/**
	 * Gets or sets the width of the needle's outer point.
	*/
	get needleOuterPointWidth() : number {
		return (this.i.needleOuterPointWidth as number);
	}
	@Input()
	set needleOuterPointWidth(v: number) {
		this.i.needleOuterPointWidth = +v;
	}
	/**
	 * Gets or sets the extent of the needle's inner point.
	*/
	get needleInnerPointExtent() : number {
		return (this.i.needleInnerPointExtent as number);
	}
	@Input()
	set needleInnerPointExtent(v: number) {
		this.i.needleInnerPointExtent = +v;
	}
	/**
	 * Gets or sets the extent of the needle's outer point.
	*/
	get needleOuterPointExtent() : number {
		return (this.i.needleOuterPointExtent as number);
	}
	@Input()
	set needleOuterPointExtent(v: number) {
		this.i.needleOuterPointExtent = +v;
	}
	/**
	 * Gets or sets the interval to use for the scale.
	*/
	get interval() : number {
		return (this.i.interval as number);
	}
	@Input()
	set interval(v: number) {
		this.i.interval = +v;
	}
	/**
	 * A value to start adding tickmarks, added to the scale's MinimumValue.
	*/
	get ticksPostInitial() : number {
		return (this.i.ticksPostInitial as number);
	}
	@Input()
	set ticksPostInitial(v: number) {
		this.i.ticksPostInitial = +v;
	}
	/**
	 * A value to stop adding tickmarks, subtracted from the scale's MaximumValue.
	*/
	get ticksPreTerminal() : number {
		return (this.i.ticksPreTerminal as number);
	}
	@Input()
	set ticksPreTerminal(v: number) {
		this.i.ticksPreTerminal = +v;
	}
	/**
	 * Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
	*/
	get labelInterval() : number {
		return (this.i.labelInterval as number);
	}
	@Input()
	set labelInterval(v: number) {
		this.i.labelInterval = +v;
	}
	/**
	 * Gets or sets the position at which to put the labels as a value from 0 to 1, measured from the bottom of the scale.
	 * Values further from zero than 1 can be used to hide the labels of the linear gauge.
	*/
	get labelExtent() : number {
		return (this.i.labelExtent as number);
	}
	@Input()
	set labelExtent(v: number) {
		this.i.labelExtent = +v;
	}
	/**
	 * A value to start adding labels, added to the scale's MinimumValue.
	*/
	get labelsPostInitial() : number {
		return (this.i.labelsPostInitial as number);
	}
	@Input()
	set labelsPostInitial(v: number) {
		this.i.labelsPostInitial = +v;
	}
	/**
	 * A value to stop adding labels, subtracted from the scale's MaximumValue.
	*/
	get labelsPreTerminal() : number {
		return (this.i.labelsPreTerminal as number);
	}
	@Input()
	set labelsPreTerminal(v: number) {
		this.i.labelsPreTerminal = +v;
	}
	/**
	 * Gets or sets the number of minor tickmarks to place between major tickmarks.
	*/
	get minorTickCount() : number {
		return (this.i.minorTickCount as number);
	}
	@Input()
	set minorTickCount(v: number) {
		this.i.minorTickCount = +v;
	}
	/**
	 * Gets or sets the position at which to start rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get tickStartExtent() : number {
		return (this.i.tickStartExtent as number);
	}
	@Input()
	set tickStartExtent(v: number) {
		this.i.tickStartExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get tickEndExtent() : number {
		return (this.i.tickEndExtent as number);
	}
	@Input()
	set tickEndExtent(v: number) {
		this.i.tickEndExtent = +v;
	}
	/**
	 * Gets or sets the stroke thickness to use when rendering ticks.
	*/
	get tickStrokeThickness() : number {
		return (this.i.tickStrokeThickness as number);
	}
	@Input()
	set tickStrokeThickness(v: number) {
		this.i.tickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the brush to use for the major tickmarks.
	*/
	get tickBrush() : string {
		return brushToString(this.i.tickBrush);
	}
	@Input()
	set tickBrush(v: string) {
		this.i.tickBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the label font.
	*/
	get fontBrush() : string {
		return brushToString(this.i.fontBrush);
	}
	@Input()
	set fontBrush(v: string) {
		this.i.fontBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the needle breadth.
	*/
	get needleBreadth() : number {
		return (this.i.needleBreadth as number);
	}
	@Input()
	set needleBreadth(v: number) {
		this.i.needleBreadth = +v;
	}
	/**
	 * Gets or sets the brush to use for needle element.
	*/
	get needleBrush() : string {
		return brushToString(this.i.needleBrush);
	}
	@Input()
	set needleBrush(v: string) {
		this.i.needleBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the outline of needle element.
	*/
	get needleOutline() : string {
		return brushToString(this.i.needleOutline);
	}
	@Input()
	set needleOutline(v: string) {
		this.i.needleOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness to use when rendering single actual value element.
	*/
	get needleStrokeThickness() : number {
		return (this.i.needleStrokeThickness as number);
	}
	@Input()
	set needleStrokeThickness(v: number) {
		this.i.needleStrokeThickness = +v;
	}
	/**
	 * Gets or sets the position at which to start rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get minorTickStartExtent() : number {
		return (this.i.minorTickStartExtent as number);
	}
	@Input()
	set minorTickStartExtent(v: number) {
		this.i.minorTickStartExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get minorTickEndExtent() : number {
		return (this.i.minorTickEndExtent as number);
	}
	@Input()
	set minorTickEndExtent(v: number) {
		this.i.minorTickEndExtent = +v;
	}
	/**
	 * Gets or sets the stroke thickness to use when rendering minor ticks.
	*/
	get minorTickStrokeThickness() : number {
		return (this.i.minorTickStrokeThickness as number);
	}
	@Input()
	set minorTickStrokeThickness(v: number) {
		this.i.minorTickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the brush to use for the minor tickmarks.
	*/
	get minorTickBrush() : string {
		return brushToString(this.i.minorTickBrush);
	}
	@Input()
	set minorTickBrush(v: string) {
		this.i.minorTickBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets a value indicating whether the scale is inverted.
	 * When the scale is inverted the direction in which the scale values increase is right to left.
	*/
	get isScaleInverted() : boolean {
		return (this.i.isScaleInverted as boolean);
	}
	@Input()
	set isScaleInverted(v: boolean) {
		this.i.isScaleInverted = ensureBool(v);
	}
	/**
	 * Gets or sets the brush to use to fill the backing of the linear gauge.
	*/
	get backingBrush() : string {
		return brushToString(this.i.backingBrush);
	}
	@Input()
	set backingBrush(v: string) {
		this.i.backingBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the outline of the backing.
	*/
	get backingOutline() : string {
		return brushToString(this.i.backingOutline);
	}
	@Input()
	set backingOutline(v: string) {
		this.i.backingOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness of the backing outline.
	*/
	get backingStrokeThickness() : number {
		return (this.i.backingStrokeThickness as number);
	}
	@Input()
	set backingStrokeThickness(v: number) {
		this.i.backingStrokeThickness = +v;
	}
	/**
	 * Gets or sets the inner extent of the linear gauge backing.
	*/
	get backingInnerExtent() : number {
		return (this.i.backingInnerExtent as number);
	}
	@Input()
	set backingInnerExtent(v: number) {
		this.i.backingInnerExtent = +v;
	}
	/**
	 * Gets or sets the outer extent of the linear gauge backing.
	*/
	get backingOuterExtent() : number {
		return (this.i.backingOuterExtent as number);
	}
	@Input()
	set backingOuterExtent(v: number) {
		this.i.backingOuterExtent = +v;
	}
	/**
	 * Gets or sets the position at which to start rendering the scale, measured from the front/bottom of the linear gauge as a value from 0 to 1.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get scaleStartExtent() : number {
		return (this.i.scaleStartExtent as number);
	}
	@Input()
	set scaleStartExtent(v: number) {
		this.i.scaleStartExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the scale as a value from 0 to 1, measured from the front/bottom of the linear gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal size of the linear gauge.
	*/
	get scaleEndExtent() : number {
		return (this.i.scaleEndExtent as number);
	}
	@Input()
	set scaleEndExtent(v: number) {
		this.i.scaleEndExtent = +v;
	}
	/**
	 * Gets or sets the brush to use to fill the scale of the linear gauge.
	*/
	get scaleBrush() : string {
		return brushToString(this.i.scaleBrush);
	}
	@Input()
	set scaleBrush(v: string) {
		this.i.scaleBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the outline of the scale.
	*/
	get scaleOutline() : string {
		return brushToString(this.i.scaleOutline);
	}
	@Input()
	set scaleOutline(v: string) {
		this.i.scaleOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness of the scale outline.
	*/
	get scaleStrokeThickness() : number {
		return (this.i.scaleStrokeThickness as number);
	}
	@Input()
	set scaleStrokeThickness(v: number) {
		this.i.scaleStrokeThickness = +v;
	}
	/**
	 * Gets or sets whether needle dragging is enabled or not.
	*/
	get isNeedleDraggingEnabled() : boolean {
		return (this.i.isNeedleDraggingEnabled as boolean);
	}
	@Input()
	set isNeedleDraggingEnabled(v: boolean) {
		this.i.isNeedleDraggingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the number of milliseconds over which changes to the linear gauge should be animated.
	*/
	get transitionDuration() : number {
		return (this.i.transitionDuration as number);
	}
	@Input()
	set transitionDuration(v: number) {
		this.i.transitionDuration = +v;
	}
	/**
	 * Gets or sets the time in milliseconds that tooltip appearance is delayed with.
	*/
	get showToolTipTimeout() : number {
		return (this.i.showToolTipTimeout as number);
	}
	@Input()
	set showToolTipTimeout(v: number) {
		this.i.showToolTipTimeout = +v;
	}
	/**
	 * Gets or sets a value indicating whether tooltips are enabled.
	*/
	get showToolTip() : boolean {
		return (this.i.showToolTip as boolean);
	}
	@Input()
	set showToolTip(v: boolean) {
		this.i.showToolTip = ensureBool(v);
	}
	/**
	 * Gets or sets the font.
	*/
	get font() : string {
		return (this.i.font as string);
	}
	@Input()
	set font(v: string) {
		this.i.font = v;
	}
	/**
	 * Gets or sets the scaling value used to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get pixelScalingRatio() : number {
		return (this.i.pixelScalingRatio as number);
	}
	@Input()
	set pixelScalingRatio(v: number) {
		this.i.pixelScalingRatio = +v;
	}
	/**
	 * Gets the actual pixel scaling ratio used to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
	}

    	
	protected __p: string = null;
	protected _hasUserValues: Set<string> = new Set<string>();
	protected get hasUserValues(): Set<string> {
	    return this._hasUserValues;
	}
	protected __m(propertyName: string) {
	    if (!this._inStyling) {
	        this._hasUserValues.add(propertyName);
	    }
	}
	
	protected _stylingContainer: any = null;
	protected _stylingParent: any = null;
	protected _inStyling: boolean = false;
	protected _styling(container: any, component: any, parent?: any) {
	        if (this._inStyling) {
	            return;
	        }
	        this._inStyling = true;
	        this._stylingContainer = container;
	        this._stylingParent = component;
		
	        let genericPrefix = "";
	        let typeName = (this.i as any).$type.name;
	        if (typeName.indexOf("Xam") === 0) {
	            typeName = typeName.substring(3);
	        }
	        genericPrefix = toSpinal("LinearGaugeComponent");
		
		let additionalPrefixes = [];
		
		let prefix = toSpinal(typeName);
		additionalPrefixes.push(prefix + "-");
	
	        let b = (this.i as any).$type.baseType;
	        while (b && b.name != "Object" && 
	            b.name != "Base" && 
	            b.name != "Control" && 
	            b.Name != "DependencyObject" &&
	            b.Name != "FrameworkElement") {
	            typeName = b.name;
	            if (typeName.indexOf("Xam") === 0) {
	                typeName = typeName.substring(3);
	            }
	            let basePrefix = toSpinal(typeName);
	            additionalPrefixes.push(basePrefix + "-");
	            b = b.baseType;
	        }
		
		if (parent) {
			let parentTypeName = (parent.i as any).$type.name;
	            if (parentTypeName.indexOf("Xam") === 0) {
	                parentTypeName = parentTypeName.substring(3);
	            }
	            let parentPrefix = toSpinal(parentTypeName);
	
			additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
			additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
		}
	
		initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);
	
	        
	
	        if ((this as any)._otherStyling) {
	            (this as any)._otherStyling(container, component, parent);
	        }
	        this._inStyling = false;
	}

    	/**
	 * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
	
	* @param point  * The point for which to retrieve the associated value.
	*/
	public getValueForPoint(point: IgPoint) : number {
		let iv = this.i.getValueForPoint(toPoint(point));
		return (iv);
	}
	public needleContainsPoint(point: IgPoint, isFinger: boolean) : boolean {
		let iv = this.i.needleContainsPoint(toPoint(point), isFinger);
		return (iv);
	}
	/**
	 * Returns visuals as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}
	/**
	 * Use to force the linear gauge to finish any deferred work before printing or evaluating its visual.
	 * This should only be called if the visual of the linear gauge needs to be synchronously saved or evaluated. 
	 * Calling this method too often will hinder the performance of the linear gauge.
	
	*/
	public flush() {
		this.i.flush();
	}
	/**
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	public containerResized() {
		this.i.containerResized();
	}
	public styleUpdated() {
		this.i.styleUpdated();
	}

    	private _formatLabel: EventEmitter<{ sender: any, args: IgxFormatLinearGraphLabelEventArgs}> = null;
	/**
	 * Event which is raised when a label of the the gauge is formatted.
	 * Function takes first argument evt and second argument ui.
	 * Use ui.owner to obtain reference to the gauge widget.
	 * Use ui.actualMinimumValue to obtain the minimum value of the gauge scale.
	 * Use ui.actualMaximumValue to obtain the maximum value of the gauge scale. 
	 * Use ui.value to obtain the value on the the gauge scale associated with the label.
	 * Use ui.label to obtain the string value of the label.
	*/
	@Output()
	get formatLabel(): EventEmitter<{ sender: any, args: IgxFormatLinearGraphLabelEventArgs}> {
		if (this._formatLabel == null) {
			this._formatLabel = new EventEmitter<{sender: any, args: IgxFormatLinearGraphLabelEventArgs}>();
			this.i.formatLabel = delegateCombine(this.i.formatLabel, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFormatLinearGraphLabelEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeFormatLabel) {
	                        (this as any).beforeFormatLabel(this, outerArgs);
	                    }
					this._formatLabel.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._formatLabel;
	}
	private _alignLabel: EventEmitter<{ sender: any, args: IgxAlignLinearGraphLabelEventArgs}> = null;
	/**
	 * Event which is raised when a label of the linear gauge is aligned along the scale.
	 * Function takes first argument evt and second argument ui.
	 * Use ui.owner to obtain reference to the gauge widget.
	 * Use ui.actualMinimumValue to obtain the minimum value of the gauge scale.
	 * Use ui.actualMaximumValue to obtain the maximum value of the gauge scale. 
	 * Use ui.value to obtain the value on the gauge scale associated with the label.
	 * Use ui.label to obtain the string value of the label.
	 * Use ui.width to obtain the width of the label.
	 * Use ui.height to obtain the height of the label.
	 * Use ui.offsetX to obtain the X offset of the label on the gauge scale.
	 * Use ui.offsetY to obtain the Y offset of the label on the gauge scale.
	*/
	@Output()
	get alignLabel(): EventEmitter<{ sender: any, args: IgxAlignLinearGraphLabelEventArgs}> {
		if (this._alignLabel == null) {
			this._alignLabel = new EventEmitter<{sender: any, args: IgxAlignLinearGraphLabelEventArgs}>();
			this.i.alignLabel = delegateCombine(this.i.alignLabel, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxAlignLinearGraphLabelEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeAlignLabel) {
	                        (this as any).beforeAlignLabel(this, outerArgs);
	                    }
					this._alignLabel.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._alignLabel;
	}
}
