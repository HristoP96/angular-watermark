//
// System.Xml.XmlTextReader
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Adam Treat (manyoso@yahoo.com)
//   Atsushi Enomoto  (ginga@kit.hi-ho.ne.jp)
//
// (C) 2001, 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2005-2006 Novell, Inc (http://www.novell.com)
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
//#define USE_NAME_BUFFER

//
// Optimization TODOs:
//
//	- support PushbackChar() which reverts one character read.
//		- ReadTextReader() should always keep one pushback buffer
//		  as pushback safety net.
//	- Replace (peek,read) * n -> read * n + pushback
//
import { ValueType, markStruct, Type } from "./type";

/**
 * @hidden 
 */
export class XmlTextReader_TagName extends ValueType {
	static $t: Type = markStruct(XmlTextReader_TagName, 'XmlTextReader_TagName');
	constructor(initNumber: number, n: string, l: string, p: string);
	constructor();
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber?: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let n: string = <string>_rest[0];
				let l: string = <string>_rest[1];
				let p: string = <string>_rest[2];
				this.name = n;
				this.localName = l;
				this.prefix = p;
			}
			break;

		}

	}
	readonly name: string = null;
	readonly localName: string = null;
	readonly prefix: string = null;
}


