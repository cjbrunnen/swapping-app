module.exports = {
  db: {
     test : "mongodb://localhost/swish-list-test",
     development : "mongodb://localhost/swish-list-development",
     production : process.env.MONGODB_URI || "mongodb://heroku_2jvlxxd2:ktog6l1pfsqqmqo8r2md10iqlv@ds143767.mlab.com:43767/heroku_2jvlxxd2"
   },