const router           = require("express").Router();
const authentications  = require("../controllers/authentications");
const users            = require("../controllers/users");

  router.route("/register")
    .post(authentications.register);
  router.route("/login")
    .post(authentications.login);

  router.route('/users/:id')
    .get(users.show)
    .put(users.update);

module.exports = router;
