As the Ajax call originated from 
"http://frontend-app.com" 
which will be blocked by CORS policy by 
"http://backend-api.com/v1/todos/". 

Solution: 
Introduce CORS middleware from `backend-api.com` and white list `http://frontend-app.com` 

```
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

...

app.use(cors({
  origin: 'http://frontend-app.com'
}));
```

What If CORS is misconfigured:

Sensitive data might be exposed to malicious websites.
If you allow any origin and also allow credentials (Access-Control-Allow-Credentials: true), a malicious website can make authenticated requests to your server on behalf of the user, leading to potential data leaks or unauthorized actions.