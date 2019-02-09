require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const { register, login, get_user, logout } = require("./authCtrl/authCtrl");

const app = express();

app.use(json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database Connected");
});

app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/user", get_user);
app.get("/auth/logout", logout);

app.listen(SERVER_PORT || 4000, () =>
  console.log(`Listening on ${SERVER_PORT}`)
);
