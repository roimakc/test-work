const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetUser = new Schema({
  created_at: String,
  description: String,
  screen_name: String,
  name: String,
  profile_image_url: String,
  url: String,
  tweets_count: Number,
  followers_count: Number,
});

module.exports = mongoose.model('TwitterUser', TweetUser);
