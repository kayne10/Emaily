// load dependencies
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//execute middleware
require('./models/User');
require('./services/passport');

//connect to mongo
mongoose.connect(keys.mongoURI);

const app = express();

// configure cookie life time
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// load route handlers
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
