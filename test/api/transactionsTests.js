// /*
//  *  Transaction (swish) tests.
//  */

require('../spec_helper');

const Transaction = require("../../models/transaction");
const ClothesItem = require("../../models/clothesItem");
const User        = require("../../models/user");

describe("=============================\r\n  Transactions Controller Tests\r\n  =============================", function() {

  beforeEach(done => {
    const user1 = new User({
      username: "test",
      email: "test@test.com",
      password: "password",
      passwordConfirmation: "password"
    });

    // Create user 1.
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

    // Create user 2.
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

  // Create item 1.
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

  // Create item 2.
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

    // Create transaciton test.
    describe("\r\nTask POST to /api/transactions\r\n", function(done) {
      it("Returns a 201 when a new transaction is created.", done => {
        api.post(`/api/transactions`)
        .set('Accept', 'application/json')
        .set("Authorization", `Bearer ${TOKEN}`)
        .send({
          transaction : {
            initiator:     INITIATORID,
            responder:     RESPONDERID,
            initial_item:  INITIALITEMID,
            status:        1
          }
        })
        .end((err, transaction) => {
          TRANSACTIONID = transaction.body.transaction._id;
          console.log("");
          console.log(`Transaction ID: ${transaction.body.transaction._id}`);
          console.log(`Initiator ID:   ${transaction.body.transaction.initiator}`);
          console.log("");
          done();
        });
      });
    });

    // Create transaction unauthorised test.
    it("\r\nTask POST to /api/transactions as an unauthorised user.\r\n", done => {
      api.post(`/api/transactions`)
      .set('Accept', 'application/json')
      .send({
        transaction : {
          initiator:     INITIATORID,
          responder:     RESPONDERID,
          initial_item:  INITIALITEMID,
          status:        1
        }
      })
      .expect(401, done);
    });

    // Swishback/edit/update transactions test.
    describe("\r\nTask PUT swishback to /api/transactions\r\n", function(done) {
      it("Returns a 200 when a new transaction is updated.", done => {
        api.put(`/api/transactions/${TRANSACTIONID}/swishback`)
        .set('Accept', 'application/json')
        .set("Authorization", `Bearer ${TOKEN}`)
        .send({
          transaction : {
            initiator:      INITIATORID,
            responder:      RESPONDERID,
            initial_item:   INITIALITEMID,
            response_item:  RESPONSEITEMID,
            status:         2
          }
        })
        .end((err, transaction) => {
          console.log("");
          console.log(transaction.body.transaction);
          console.log("");
          expect(transaction.body)
          .to.have.property("transaction")
          .and.have.any.keys([
            'initiator',
            'responder',
            'initial_item',
            'response_item',
            'status'
          ]);
          done();
        });
      });
    });

    // Swishback/edit/update transactions unauthorised test.
    describe("\r\nTask PUT swishback to /api/transactions as an unauthorised user.\r\n", function(done) {
      it("Returns a 401 when a new transaction is updated.", done => {
        api.put(`/api/transactions/${TRANSACTIONID}/swishback`)
        .set('Accept', 'application/json')
        .send({
          transaction : {
            initiator:      INITIATORID,
            responder:      RESPONDERID,
            initial_item:   INITIALITEMID,
            response_item:  RESPONSEITEMID,
            status:         2
          }
        }).expect(401, done);
      });
    });

  // Transactions reject test
  // describe("\r\nTask PUT reject to /api/transactions/:id/reject\r\n", function(done) {
    // it("Returns a 200 when a new transaction is updated.", done => {
    //   api.put(`/api/transactions/${TRANSACTIONID}/reject`)
    //   .set('Accept', 'application/json')
    //   .set("Authorization", `Bearer ${TOKEN}`)
    //   .send({
    //     })
    //   .end((err, transaction) => {
    //     console.log("");
    //     console.log(transaction.body.transaction);
    //     console.log("");
    //     done();
    //   });
    // });
  // });

  // Transactions approve test
  describe("\r\nTask PUT approve to /api/transactions/:id/approve\r\n", function(done) {

  });

  // Transactions cancel test
  describe("\r\nTask PUT cancel to /api/transactions/:id/cancel\r\n", function(done) {

  });

  afterEach(done => {
    User.collection.drop();
    ClothesItem.collection.drop();
    // Transaction.collection.drop();
    console.log("\r\n  =============================");
    done();
  });
});
