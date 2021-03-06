/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

export class BinaryUtil { 
    static isResponseTypeSupported(responseType: any) {
		var xhr = null;
		try {
			xhr = new XMLHttpRequest();
			xhr.open("GET", "/");
			xhr.responseType = responseType;
		} catch (e) {
			return false;
		}
		if (xhr === null) {
			return false;
		}
		return xhr.responseType === responseType;
	}

	static getBinary(url: string, callback: (data: any) => void, error: (error: any) => void) {
		var data, ret, req: any, useVbArray = false,
		arrayBufferSupported = BinaryUtil.isResponseTypeSupported("arraybuffer") &&
			typeof Uint8Array != "undefined";

		if (typeof XMLHttpRequest == "undefined") {
			try { req = new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch (e) { }
			try { req = new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch (e) { }
			req = new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			req = new XMLHttpRequest();
		}

		if (!arrayBufferSupported) {
			if (req.overrideMimeType) {
				req.overrideMimeType("text/plain; charset=x-user-defined");
			}
		}

		if (typeof VBArray != "undefined") {
			useVbArray = true;
		}

		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					if (arrayBufferSupported && typeof this.response != "undefined") {
						callback(new Uint8Array(this.response));
					} else {
						if (useVbArray) {
							data = <any[]>new VBArray(req.responseBody).toArray();
							for (var i = 0; i < data.length; i++) {
								data[ i ] = String.fromCharCode(data[ i ]);
							}
							ret = data.join("");
							callback(ret);
						} else {
							callback(req.responseText);
						}
					}
				} else {
					error(req.error);
				}
			}
		};

		req.open("GET", url, true);
		if (arrayBufferSupported) {
			req.responseType = "arraybuffer";
		}
		req.send(null);
	};
}