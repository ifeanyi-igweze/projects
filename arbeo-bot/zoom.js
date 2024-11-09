const express = require('express');
const app = express();

app.get('/zoom/callback', (req, res) => {
  const authorizationCode = req.query.code;
  if (authorizationCode) {
    // Store or use the authorization code to get an access token
    res.send('Authorization code received');
  } else {
    res.send('Authorization failed');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
