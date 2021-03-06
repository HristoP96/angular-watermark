/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { typeCast } from "./type";
import { Size } from "./Size";

export interface IgSize {
    width: number,
    height: number
}

export function isSize(s: any): boolean {
    if (s == null)
        return false;

    if (typeCast(Size.$t, s) != null)
        return true;

    if (typeof s.width === "number" && typeof s.height === "number")
        return true;

    return false;
}

export function sizeFromLiteral(s: IgSize): Size {
    if (s == null)
        return new Size(1, 0, 0);

    var cast = typeCast<Size>(Size.$t, s);
    if (cast != null)
        return cast;

    return new Size(1, s.width, s.height);
}

export function sizeToLiteral(s: Size): IgSize {
    if (s == null)
        return null;

    return { width: s.width, height: s.height };
}
