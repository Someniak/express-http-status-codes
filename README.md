# What is express-http-status-codes?
A simple Express middleware library, that hooks onto the res parameter.
It helps by abstracting simple HTTP status code into simple JSON responses easily invokable.

# How to use it?

**Install it via NPM**
```
  npm install --save express-http-status-codes
```

**Include it as middleware**
```
  const expressHttpStatusCodes = require('express-http-status-codes');

  const app = express();
  app.use(expressHttpStatusCodes());


  # In req, res handler
  function(req, res, next){
    //Will send a 404 HTTP 
    res.sendHttp(4O4);
  }
```


