//
// System.Security.PermissionSet.cs
//
// Authors:
//	Nick Drochak(ndrochak@gol.com)
//	Sebastien Pouliot  <sebastien@ximian.com>
//
// (C) Nick Drochak
// Portions (C) 2003, 2004 Motus Technologies Inc. (http://www.motus.com)
// Copyright (C) 2004-2005 Novell, Inc (http://www.novell.com)
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { Base, Type, markType } from "./type";
import { PermissionState } from "./PermissionState";
import { IPermission } from "./IPermission";

/**
 * @hidden 
 */
export class PermissionSet extends Base {
	static $t: Type = markType(PermissionSet, 'PermissionSet');
	constructor(initNumber: number);
	constructor(initNumber: number, state: PermissionState);
	constructor(initNumber: number, permSet: PermissionSet);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let state: PermissionState = <PermissionState>_rest[0];
			}
			break;

			case 2:
			{
				let permSet: PermissionSet = <PermissionSet>_rest[0];
			}
			break;

		}

	}
	addPermission(perm: IPermission): IPermission {
		return perm;
	}
	isUnrestricted(): boolean {
		return true;
	}
	union(other: PermissionSet): PermissionSet {
		return new PermissionSet(0);
	}
}


