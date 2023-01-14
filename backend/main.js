const express = require("express");
const app = express();
const axios = require('axios');
const querystring = require('querystring');

const PORT = 8080;

app.get("/auth", async (req, res) => {
  const authUrl = 'https://accounts.google.com/o/oauth2/auth?' +
    querystring.stringify({
      client_id: '764118056121-um02ims7cs4cvdfuto4na01tb139corh.apps.googleusercontent.com',
      redirect_uri: 'http://localhost:8080/auth/callback',
      scope: 'https://mail.google.com',
      response_type: 'code',
      access_type: 'offline'
    });

  res.redirect(authUrl);
})

app.get('/auth/callback', async (req, res) => {
  // Extract the code from the callback
  const code = req.query.code;
  console.log(code);
  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
        code: code,
        client_id: '764118056121-um02ims7cs4cvdfuto4na01tb139corh.apps.googleusercontent.com',
        client_secret: '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',
        redirect_uri: 'http://localhost:8080/auth/callback',
        grant_type: 'authorization_code'
      });
      const access_token = response.data.access_token;
      const refresh_token = response.data.refresh_token;
      console.log(access_token);
      console.log(refresh_token);

      const email = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
        headers: { 
          Authorization: `Bearer ${access_token}`,
          Accept: "application.json"
        },
      });

      const emailId = email.data.messages[0].id
      
      const readEmail = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${emailId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: "application.json"
        }
      })
      
      res.send(readEmail.data.snippet)
    } catch (err) {
      console.error(err);
      res.send('Error getting access token');
    }
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
