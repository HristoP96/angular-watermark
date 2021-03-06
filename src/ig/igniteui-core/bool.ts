/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FormatException } from './type';

   

    export function boolCompare(value: boolean, other: boolean) {
         if (value == other) {
			return 0;
		}

		return value ? 1 : -1;
    }


    export function parseBool(s: string): boolean {
        var r = tryParseBool(s);

        if (!r.ret) {
            throw new FormatException(1, "Incorrect boolean format");
        }

        return r.p1;
    };

  export function tryParseBool(s: string, v?: boolean): { p1: boolean, ret: boolean } {
    switch (s == null ? "" : s.trim().toLowerCase()) {
        case "true":
            return {
                p1: true,
                ret: true
            };

        case "false":
            return {
                p1: false,
                ret: true
            };

        default:
            return {
                p1: false,
                ret: false
            };
    }
};
