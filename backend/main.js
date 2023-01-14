const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const connectDB = require("./db.js");
const querystring = require("querystring");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
app.use(express.json());
const auth = require("./middleware/auth.js");
connectDB();
app.use(cors());

const PORT = 5000 || process.env.PORT;

function getTokens(code, clientId, clientSecret, redirectUri) {
  /*
  Returns:
  Promise<{
    access_token: string;
    expires_in: Number;
    refresh_token: string;
    scope: string;
    id_token: string;
  }>
  */
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  return axios
    .post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

app.get("/api/auth/google/redirect", async (req, res) => {
  const code = req.query.code;
  const { id_token, access_token } = await getTokens(
    code,
    "58358299620-ge1rpbm32nm99ekemn6l1qnl89rgh4pp.apps.googleusercontent.com",
    "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",
    "http://localhost:5000/api/auth/google/redirect"
  );
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
    {
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    }
  );
  const profile = response.data;
  var urlencoded_email = querystring.escape(response.data.email);
  var endpoint = `https://content-gmail.googleapis.com/gmail/v1/users/${urlencoded_email}/messages?maxResults=500`;
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    },
  };
  let user = await User.findOne({ googleId: profile.id });
  if (user) {
    let payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "pornhub", (err, token) => {
      if (err) throw err;
      return res.redirect(
        `http://localhost:5173/google/success?token=${token}`
      );
    });
  } else {
    let newUser = new User({
      email: profile.email,
      googleId: profile.id,
      name: profile.given_name + " " + profile.family_name,
      avatar: profile.picture,
      google_access_token: access_token,
    });
    await newUser.save();
    let payload = {
      user: {
        id: newUser.id,
      },
    };
    jwt.sign(payload, "pornhub", (err, token) => {
      if (err) throw err;
      return res.redirect(
        `http://localhost:5173/google/success?token=${token}`
      );
    });
  }
  const email_ids = await axios.get(endpoint, config);
  const { messages } = email_ids.data;
  let emails = [];

  // for (let message of messages) {
  //   endpoint = `https://gmail.googleapis.com/gmail/v1/users/${urlencoded_email}/messages/${message.id}`;
  //   emails.push(await axios.get(endpoint, config));
  // }
  // console.log(emails);
});

app.get("/api/auth/user", auth, (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  } else {
    return res.status(400).send("No User");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
