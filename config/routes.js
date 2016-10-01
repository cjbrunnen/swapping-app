const router           = require("express").Router();
const authentications  = require("../controllers/authentications");
const users            = require("../controllers/users");
const clothesItems     = require('../controllers/clothesItems');
const transactions     = require('../controllers/transactions');


router.route("/register")
.post(authentications.register);
router.route("/login")
.post(authentications.login);

router.route('/users/:id')
.get(users.show)
.put(users.update);

router.route('/clothesItems')
.get(clothesItems.index)
.post(clothesItems.create);
router.route('/clothesItems/:id')
.get(clothesItems.show)
.put(clothesItems.update)
.delete(clothesItems.delete);

router.route('/transactions')
.post(transactions.create);
router.route('/transactions/:id/swishback')
.put(transactions.swishback);
router.route('/transactions/:id/swishback')
.put(transactions.approve);
router.route('/transactions/:id/swishback')
.put(transactions.reject);
router.route('/transactions/:id/swishback')
.put(transactions.cancel);




module.exports = router;
