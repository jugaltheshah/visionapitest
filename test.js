var vision = require('google-vision-api-client');
var requtil = vision.requtil;

//Prepare your service account from trust preview certificated project
var jsonfile = 'credFile.json';

//Initialize the api
vision.init(jsonfile);

//Build the request payloads
var d = requtil.createRequests().addRequest(
	requtil.createRequest('testpic.bmp')
		.withFeature('TEXT_DETECTION', 10)
		.build());

/*
  Note that the google-vision-api-client points to the wrong url, should point to
  'https://vision.googleapis.com/v1/images:annotate'
  This can be changed by modifying baseurl in node_modules/google-vision-api-client/index.js
*/

//Do query to the api server
vision.query(d, function(e, r, d){
	if(e) console.log('ERROR:', e);
  console.log(JSON.stringify(d));
});
