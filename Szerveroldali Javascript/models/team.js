var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Team = db.model('Team', {
  name: String,
  size: String,
  Founder: String,
});

module.exports = Team;