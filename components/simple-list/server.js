/**
 *
 */

var express = require('express')
  , app = express()
  , port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.listen(port, function () {
  console.log('simple list demo listening on port %d', port);
});
