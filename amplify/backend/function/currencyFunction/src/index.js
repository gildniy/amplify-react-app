//
//
// exports.handler = function (event, context) { //eslint-disable-line
//   console.log(`value1 = ${event.key1}`);
//   console.log(`value2 = ${event.key2}`);
//   console.log(`value3 = ${event.key3}`);
//   context.done(null, 'Hello World'); // SUCCESS with message
// };

// amplify/backend/function/currencyfunction/src/index.js
const axios = require('axios');

exports.handler = function (event, _, callback) {
  let apiUrl = `https://api.coinlore.com/api/tickers/?start=1&limit=10`;

  if (event.arguments) {
    const { start = 0, limit = 10 } = event.arguments;
    apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`
  }

  axios.get(apiUrl)
      .then(response => callback(null, response.data.data))
      .catch(err => callback(err))
};
