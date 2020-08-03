const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  id: Number,
  created_at: String,
  text: String,
});

module.exports = mongoose.model('Tweet', tweetSchema);
