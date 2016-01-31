Response = require('./index').Response;

var contextStub = {
  succeed: function(data) {
    console.log('--- SUCCESS ---');
    console.log(data);
  },

  fail: function(data) {
    console.log('--- FAIL ---');
    console.log(data);
  }
};

var data = {
  user: {
    user_id: 12345,
    user_name: 'khornschemeier',
    email: 'khornschemeier@gmail.com'
  }
};

var response = new Response();
response.success200(contextStub, data);
response.success201(contextStub, data);
response.success204(contextStub, data);

data = {
  error: "user not found"
};

response.error400(contextStub, data);
response.error401(contextStub, data);
response.error404(contextStub, data);
response.error500(contextStub, data);