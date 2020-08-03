const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

/*const Tweets = require('../models/tweet');
const TwitterUsers = require('../models/twitterUser');*/

const tw = [
  {
    "id": "1288908390966734800",
    "created_at": "Thu Jul 30 18:44:41 +0000 2020",
    "text": "The only ad mediation platform that I can find that has an Unreal SDK is Appodeal, and there's is 9 months out of d… https://t.co/Yo6eM1AYfg",
    "user": {
      "screen_name": "andrewmreal",
      "name": "Andrew Mitchell",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1212193680586690562/gcQn6kxo_normal.jpg"
    }
  },
  {
    "id": "1288172015736758300",
    "created_at": "Tue Jul 28 17:58:36 +0000 2020",
    "text": "RT @Explore_Stack: WordBakers went from an indie team's first game to a #1 top earning hit in just a few months through the Appodeal Accele…",
    "user": {
      "screen_name": "Xoripete",
      "name": "Diegote Wrestling 💚",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1048192642608254976/JcG4OiJX_normal.jpg"
    }
  },
  {
    "id": "1286426103133999000",
    "created_at": "Thu Jul 23 22:20:58 +0000 2020",
    "text": "RT @Explore_Stack: \"With Appodeal, our fill rate and eCPMs improved, as well as our overall revenue. And we no longer have to manage ad wat…",
    "user": {
      'screen_name': '100500',
      "name": "User",
      "profile_image_url": ""
    }
  },
];

const TwitterUser = new GraphQLObjectType({
  name: 'TwitterUser',
  fields: () => ({
    screen_name: { type: GraphQLString },
    name: { type: GraphQLString },
    profile_image_url: { type: GraphQLString }
  }),
});

const TweetType = new GraphQLObjectType({
  name: 'Tweet',
  fields: () => ({
    id: { type: GraphQLID },
    created_at: { type: GraphQLString },
    text: { type: GraphQLString },
    user: { type: TwitterUser }
  }),
});

const TwitterType = new GraphQLObjectType({
  name: 'TwitterAPI',
  fields: () => ({
    search: {
      type: new GraphQLList(TweetType),
      args: {
        q: { type: GraphQLString }
      },
      resolve(parent, args) {
        return tw.filter(tweets => {
          const searchSubj =  args.q && args.q.toLowerCase();
          const txtTweets = tweets.text.toLowerCase();

          if (txtTweets.includes(searchSubj)) {
            return tweets;
          }
        });
      }
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'GraphQLHubAPI',
  fields: {
    twitter: {
      type: TwitterType,
      resolve() {
        return TwitterType;
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: Query,
	// mutation: Mutation,
});
