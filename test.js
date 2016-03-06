require('dotenv').config();
var vision = require('google-vision-api-client');
var requtil = vision.requtil;

//Prepare your service account from trust preview certificated project
var jsonfile = process.env.credFile; //'/path-to-your-service-account.json';

//Initialize the api
vision.init(jsonfile);

//Build the request payloads
var d = requtil.createRequests().addRequest(
	requtil.createRequest('testpic.bmp')
		.withFeature('TEXT_DETECTION', 10)
		.build());

//Do query to the api server
vision.query(d, function(e, r, d){
	if(e) console.log('ERROR:', e);
  console.log(JSON.stringify(d));
});
