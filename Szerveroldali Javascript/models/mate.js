var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Mate = db.model('Mate', {
  name: String,
  role: String,
  active: String,
  team:{
      type: Schema.Types.ObjectId,
      ref: 'Team'
  },
});

module.exports = Mate;