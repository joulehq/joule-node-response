var Response = require('./index');

var contextStub = {
  succeed: function(data) {
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

var response1 = new Response();
response1.setContext(contextStub);
response1.setContentType('application/xml');
response1.send("<xml>This should be XML</xml>");

var response2 = new Response();
response2.setContext(contextStub);
response2.setHttpStatusCode(201);
response2.setContentType('application/xml');
response2.send("<xml>This should be XML</xml>");

var response3 = new Response();
response3.setContext(contextStub);
response3.setHttpStatusCode(400);
response3.send({name: "value"});
