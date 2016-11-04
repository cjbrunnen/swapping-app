module.exports = {
  db: {
     test : "mongodb://localhost/swish-list-test",
     development : "mongodb://localhost/swish-list-development",
     production : process.env.MONGODB_URI || "mongodb://heroku_6fptzbct:poaghnp4mq8032t0ctdes0rk4l@ds143737.mlab.com:43737/heroku_6fptzbct"
   },
   secret: process.env.SECRET || "gosh this is so secret... shhh..."
   };

