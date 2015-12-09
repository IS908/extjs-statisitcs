var ajax = function(options) {
	options = {
		type : options.type || 'POST',
		url : options.url || '',
		async: options.async || true,
//		contentType:options.contentType|| '',  
//  		processData:options.processData|| '',
		timeout : options.timeout || 5000,
		onComplete : options.onComplete || function() {
		},
		onError : options.onError || function() {
		},
		onSuccess : options.onSuccess || function() {
		},
		data : options.data || ''
	};

	if (typeof XMLHttpRequest === 'undefined') {
		XMLHttpRequest = function() {
			return new ActiveXObject(
					navigator.userAgent.indexOf('MSIE 5') >= 0 ? 'Microsoft.XMLHTTP'
							: 'Msxml2.XMLHTTP');
		};
	}

	var xml = new XMLHttpRequest();
	
	xml.open(options.type, options.url, options.async );
	var timeoutLength = options.timeout;
	var requestDone = false;

	setTimeout(function() {
		requestDone = true;
	}, timeoutLength);

	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && !requestDone) {
			if (httpSuccess(xml)) {
				options.onSuccess(httpData(xml, options.type));
			} else {
				options.onError();
			}
			options.onComplete();
			xml = null;
		}
	};

	xml.send(options.data);

	var httpSuccess = function(r) {
		try {
			return !r.status && location.protocol == "file:"
					|| (r.status >= 200 && r.status < 300) || r.status == 304
					|| navigator.userAgent.indexOf('Safari') >= 0
					&& typeof r.status == 'undefined';
		} catch (e) {
		}
		return false;
	};

	var httpData = function(r, type) {
		var ct = r.getResponseHeader("content-type");
		var data = !type && ct.indexOf('xml') >= 0;
		data = type == 'xml' || data ? r.responseXML : r.responseText;

		if (type == 'script') {
			eval.call(window, data);
			return data;
		}
	};
};

var serialize = function(a) {
	var s = [];
	if (a.constructor == Array) {
		for (var i = 0; i < a.length; i++) {
			s.push(a[i].name + '=' + encodeURIComponent(a[i].value));
		}
	} else {
		for ( var j in a) {
			s.push(j + '=' + encodeURIComponent(a[j]));
		}
	}
	return s.join('&');
};

var requstMask = null;
setTimeout(function(){
	requstMask = new Ext.LoadMask(Ext.getBody(), {msg:beforerequestMessage});
	Ext.Ajax.on('beforerequest', function( me, options){
		var  op = options;
		if(!Ext.isEmpty(op.scope)){
			op = op.scope;
		} 
		if(op.isWait!=false){
			if(Ext.isEmpty(op.waitMsg)){
				requstMask.msg = beforerequestMessage;
			} else {
				requstMask.msg = op.waitMsg;
			}
			requstMask.show();
		}
	}, requstMask);
	Ext.Ajax.on('requestcomplete', function( me, options){
		requstMask.hide();
	}, requstMask);
	Ext.Ajax.on('exception', function(me, response, options){
		requstMask.hide();
	},requstMask);
	Ext.Ajax.on('requestexception',function( me, response, options){
		requstMask.hide();
		var status = response.status;
		 var text = response.responseText;
		 if(response.timedout){
				Ext.Msg.alert(requestexceptiontimedoutTitle,requestexceptiontimedoutMessage);
				return;
		 }
		 switch (status) {
		  case 404 :
		   top.Ext.MessageBox.alert(requestexceptiontErrorTiltle, requestexceptiontError404);
		   break;
		  case 200 :
		   if (text.length > 0) {
		    var data = Ext.decode(text);
		    if (data && data.error) {
		     top.Ext.MessageBox.alert(requestexceptiontErrorTiltle, requestexceptiontError200
		         + data.error);
		    } else {
		     top.Ext.MessageBox.alert(requestexceptiontErrorTiltle, requestexceptiontError200 + text);
		    }
		   }
		   break;
		  case 0 :
		   top.Ext.MessageBox.alert(requestexceptiontErrorTiltle, requestexceptiontErrorMessage);
		   break;
		  default :
		   var data = Ext.decode(text);
		   if (data && data.error) {
		    top.Ext.MessageBox.alert(requestexceptiontErrorTiltle, requestexceptiontErrorDefaultMessage1 + status
		        + requestexceptiontErrorDefaultMessage2+ data.error);
		   } else {
		    top.Ext.MessageBox.alert(requestexceptiontErrorTiltle, requestexceptiontErrorDefaultMessage1+ status
		        +requestexceptiontErrorDefaultMessage2 + text);
		   }
		   break;
		 }
	},requstMask);
},3000)
