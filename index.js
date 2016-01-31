module.exports = function() {
  var _container = {
    code: null,
    message: null,
    data: null
  };

  // success codes
  this.success200 = function(context, payload) {
    _container.code = 200;
    _container.message = "200: Ok";
    success(context, payload);
  };

  this.success201 = function(context, payload) {
    _container.code = 201;
    _container.message = "201: Created";
    success(context, payload);
  };

  this.success204 = function(context, payload) {
    _container.code = 204;
    _container.message = "204: No Content";
    success(context, payload);
  };

  var success = function(context, payload) {
    _container.data = payload;
    context.succeed(JSON.stringify(_container));
  };

  // error codes
  this.error400 = function(context, payload) {
    _container.code = 400;
    _container.message = "400: Bad Request";
    error(context, payload);
  };

  this.error401 = function(context, payload) {
    _container.code = 401;
    _container.message = "401: Unauthorized";
    error(context, payload);
  };

  this.error404 = function(context, payload) {
    _container.code = 404;
    _container.message = "404: Not Found";
    error(context, payload);
  };

  this.error500 = function(context, payload) {
    _container.code = 500;
    _container.message = "500: Internal Server Error";
    error(context, payload);
  };

  var error = function(context, payload) {
    _container.data = payload;
    context.fail(JSON.stringify(_container));
  };
};