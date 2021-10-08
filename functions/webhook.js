const request = require('request');
require('dotenv').config();

exports.handler = async (event, context) => {
  var token = event.headers['x-token']
  var info = event.headers['x-info'] || 'hello people'

  // set request settings
  const formData = {event_type: info};
  const options = {
    url: process.env.GITHUB_ENDPOINT,
    method: 'POST',
    headers: {
      'User-Agent': 'Node.js Express-Request Client',
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'token ' + token
    },
    form: JSON.stringify(formData)
  };

  // post request
  request(options, (error, response, body) => {
    // check error
    if( error !== null ){
      console.error('error:', error);
      return(false);
    }
    console.log('statusCode:', response && response.statusCode);
  });
  // response
  return {
    statusCode: 200,
    body: JSON.stringify({'status': 'ok'})
  }
}
