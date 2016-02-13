var _container = {
	code: null,
	message: null,
	result: null
};

var success = function(context, result) {
	_container.result = result;
	context.succeed(JSON.stringify(_container));
};

var error = function(context, result) {
	_container.result = result;
	context.fail(JSON.stringify(_container));
};

module.exports = {
  // success codes
	successRaw : function(context, result) {
		context.succeed(result);
	},

  success200 : function(context, result) {
    _container.code = 200;
    _container.message = "200: Ok";
    success(context, result);
  },

  success201 : function(context, result) {
    _container.code = 201;
    _container.message = "201: Created";
    success(context, result);
  },

  success204 : function(context, result) {
    _container.code = 204;
    _container.message = "204: No Content";
    success(context, result);
  },

  // error codes
  error400 : function(context, result) {
    _container.code = 400;
    _container.message = "400: Bad Request";
    error(context, result);
  },

  error401 : function(context, result) {
    _container.code = 401;
    _container.message = "401: Unauthorized";
    error(context, result);
  },

  error404 : function(context, result) {
    _container.code = 404;
    _container.message = "404: Not Found";
    error(context, result);
  },

  error500 : function(context, result) {
    _container.code = 500;
    _container.message = "500: Internal Server Error";
    error(context, result);
  }
};
