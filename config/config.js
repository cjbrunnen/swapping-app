module.exports = {
  db: {
    test : "mongodb://localhost/swish-list-test",
    production : "mongodb://localhost/swish-list"
  },
  secret: process.env.SECRET || "gosh this is so secret... shhh..."
};
