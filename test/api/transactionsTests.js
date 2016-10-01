require('../spec_helper');

const Transaction = require("../../models/transaction");
const ClothesItem = require("../../models/clothesItem");
const User = require("../../models/user");

describe("Transactions Controller Test", function() {

  beforeEach(done => {
    const user1 = new User({
      username: "test",
      email: "test@test.com",
      password: "password",
      passwordConfirmation: "password"
    });

    user1.save((err, user) => {
      api.post('/api/login')
      .set("Accept", "application/json")
      .send({
        email: "test@test.com",
        password: "password"
      }).end((err, res) => {
        TOKEN = res.body.token;
        INITIATORID = res.body.user._id;
        done();
      });
    });
  });

  beforeEach(done => {
    const user2 = new User({
      username: "test2",
      email: "test2@test.com",
      password: "password",
      passwordConfirmation: "password"
    });

    user2.save((err, user) => {
      api.post('/api/login')
      .set("Accept", "application/json")
      .send({
        email: "test2@test.com",
        password: "password"
      }).end((err, res) => {
        RESPONDERID = res.body.user._id;
        done();
      });
    });
  });

  beforeEach(done => {
    const item = new ClothesItem({
      title:        "Diesel Jeans",
      description:  "These stonewashed jeans are tight fitting and lovely",
      category:     "Jeans",
      sex:          "Male",
      image:        "http://i.ebayimg.com/images/g/RfsAAOSwq7JT9Ygz/s-l300.jpg",
      available:    true
    });
    item.save((err, item) => {
      INITIALITEMID = item._id;
      done();
    });
  });

  beforeEach(done => {
    const item = new ClothesItem({
      title:        "Topman Jumper",
      description:  "These jumper is scratchy",
      category:     "Jumper",
      sex:          "Male",
      image:        "http://coolspotters.com/files/photos/813074/topman-jumper-profile.jpg",
      available:    true
    });
    item.save((err, item) => {
      RESPONSEITEMID = item._id;
      done();
    });
  });


  describe("POST /api/transactions", function(done) {
    it("should return a 201 when a new transaction is passed in", done => {
      api.post(`/api/transactions`)
      .set('Accept', 'application/json')
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        transaction : {
          initiator:      INITIATORID,
          responder:     RESPONDERID,
          initial_item:  INITIALITEMID,
          status:        1
        }
      })
      .end((err, transaction) => {
        console.log(transaction);
        done();
      });

    });
  });

  afterEach(done => {
    Transaction.collection.drop();
    done();
  });

});
