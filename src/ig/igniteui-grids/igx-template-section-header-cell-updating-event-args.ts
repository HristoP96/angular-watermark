import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from './igx-cell-info';
import { IgxLiveGridComponent } from './igx-live-grid-component';
import { TemplateSectionHeaderCellUpdatingEventArgs as TemplateSectionHeaderCellUpdatingEventArgs_internal } from "./TemplateSectionHeaderCellUpdatingEventArgs";
import { IgxDateTimeCellInfo } from "./igx-date-time-cell-info";
import { IgxImageCellInfo } from "./igx-image-cell-info";
import { IgxNumericCellInfo } from "./igx-numeric-cell-info";
import { IgxRowSeparatorInfo } from "./igx-row-separator-info";
import { IgxSectionHeaderCellInfo } from "./igx-section-header-cell-info";
import { IgxTemplateCellInfo } from "./igx-template-cell-info";
import { IgxTemplateHeaderCellInfo } from "./igx-template-header-cell-info";
import { IgxTemplateSectionHeaderCellInfo } from "./igx-template-section-header-cell-info";
import { IgxTextCellInfo } from "./igx-text-cell-info";
import { IgxTextHeaderCellInfo } from "./igx-text-header-cell-info";

/**
 * Information about the cell that has content which is being created or updated.
*/
export class IgxTemplateSectionHeaderCellUpdatingEventArgs {

    protected createImplementation(): TemplateSectionHeaderCellUpdatingEventArgs_internal {
        return new TemplateSectionHeaderCellUpdatingEventArgs_internal();
    }
    protected _implementation: any;
    public get i(): TemplateSectionHeaderCellUpdatingEventArgs_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

    }
    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    /**
	 * The host in which to add or update content.
	*/
    get content(): Element {
        return this.i.content.element.getNativeElement();
    }

    /**
	 * The backing information for the current cell.
	*/
    get cellInfo(): IgxCellInfo {
        if (this.i.cellInfo == null) {
            return null;
        }

        if (!(<any>this.i.cellInfo).externalObject) {
            let ext: any = null;
            switch ((<any>this.i.cellInfo).$type.name) {
                case "DateTimeCellModel":
                    ext = new IgxDateTimeCellInfo();
                    break;
                case "ImageCellModel":
                    ext = new IgxImageCellInfo();
                    break;
                case "NumericCellModel":
                    ext = new IgxNumericCellInfo();
                    break;
                case "RowSeparatorModel":
                    ext = new IgxRowSeparatorInfo();
                    break;
                case "SectionHeaderCellModel":
                    ext = new IgxSectionHeaderCellInfo();
                    break;
                case "TemplateCellModel":
                    ext = new IgxTemplateCellInfo();
                    break;
                case "TemplateHeaderCellModel":
                    ext = new IgxTemplateHeaderCellInfo();
                    break;
                case "TemplateSectionHeaderCellModel":
                    ext = new IgxTemplateSectionHeaderCellInfo();
                    break;
                case "TextCellModel":
                    ext = new IgxTextCellInfo();
                    break;
                case "TextHeaderCellModel":
                    ext = new IgxTextHeaderCellInfo();
                    break;
            }
            (<any>ext)._implementation = this.i.cellInfo;
            (<any>this.i.cellInfo).externalObject = ext;
        }

        return (<any>this.i.cellInfo).externalObject;
    }

	

    

	
}
