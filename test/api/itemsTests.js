require('../spec_helper');

const ClothesItem = require("../../models/clothesItem");
const User = require("../../models/user");

describe("Clothes Items Controller Test", function() {

  beforeEach(done => {
    ClothesItem.collection.drop();
    done();
  });

  describe("GET /api/clothesItems", function(done) {

    beforeEach(done => {
      const user = new User({
        username: "test",
        email: "test@test.com",
        password: "password",
        passwordConfirmation: "password"
      });

      user.save((err, user) => {
        api.post('/api/login')
        .set("Accept", "application/json")
        .send({
          email: "test@test.com",
          password: "password"
        }).end((err, res) => {
          TOKEN = res.body.token;
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
        IDHERE = item._id;
        done();
      });
    });

    it("should return a 200 response", function(done) {
      api
      .get("/api/clothesItems")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200);
      done();
    });

    it("should return a JSON object", function(done) {
      api
      .get("/api/clothesItems")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        done();
      });
    });

    it("should return an object with the following properties", done => {
      api.get(`/api/clothesItems/${IDHERE}`)
      .set('Accept', 'application/json')
      .set("Authorization", `Bearer ${TOKEN}`)
      .end((err, res) => {
        expect(res.body)
        .to.have.property("clothesItem")
        .and.have.any.keys([
          "title",
          "description",
          "category",
          "sex",
          "image",
          "available"
        ]);
        done();
      });

    });

  });

});
