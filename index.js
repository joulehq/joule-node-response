
var Response = function() {
  var _context
      , _headers = []
      , _httpStatusCode;

  this.setContext = function(context) {
    _context = context;    
  };

  this.setHeader = function(string) {
    _headers.push(string);
  };

	this.setHttpStatusCode = function(code) {
    var headerString
        , reason = '';

    // https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html
    switch(code) {
      case 200:
        reason = 'OK';
        break;
      case 201:
        reason = 'Created';
        break;
      case 202:
        reason = 'Accepted';
        break;
      case 400:
        reason = 'Bad Request';
        break;
      case 401:
        reason = 'Unauthorized';
        break;
      case 403:
        reason = 'Forbidden';
        break;
      case 404:
        reason = 'Not Found';
        break;
      case 409:
        reason = 'Conflict';
        break;
      default:
        reason = 'Unknown';
        break;
    }

    headerString = 'Status: ' + code + ' ' + reason;
    this.setHeader(headerString);
    _httpStatusCode = code;
  },

  // success codes
	this.send = function(data) {
    result = {};
    if(typeof(_httpStatusCode) === 'undefined') {
      this.setHttpStatusCode(200);
    }
    result['headers'] = _headers;
    result['data'] = data;
		_context.succeed(result);
	}
};

module.exports = Response;
