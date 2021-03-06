// From https://github.com/mosa/Mono-Class-Libraries/blob/28840dee90750d61ed6cbdb753292cd64cac169e/mcs/class/System.XML/System.Xml/XmlTextWriter2.cs
//
// XmlTextWriter.cs
//
// Author:
//	Atsushi Enomoto  <atsushi@ximian.com>
//
// Copyright (C) 2006 Novell, Inc.

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
import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * @hidden 
 */
export const enum XmlTextWriter_XmlDeclState {
	Allow = 0,
	Ignore = 1,
	Auto = 2,
	Prohibit = 3
}

/**
 * @hidden 
 */
export let XmlTextWriter_XmlDeclState_$type = markEnum('XmlTextWriter_XmlDeclState', 'Allow,0|Ignore,1|Auto,2|Prohibit,3');


