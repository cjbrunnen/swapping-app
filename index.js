const express    = require("express");
const morgan     = require("morgan");
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");
const app        = express();
const environment = app.get("env");
const port       = process.env.PORT || 3000;
const cors       = require("cors");
const expressJWT = require("express-jwt");
const router     = require("./config/routes");
const config     = require("./config/config");

mongoose.connect(config.db[environment]);

app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/api", expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: "/api/register", methods: ["POST"] },
      { url: "/api/login",    methods: ["POST"] }
      // { url: "/api/transactions",    methods: ["POST"] },
      // { url: "/api/transactions/:id/swishback",    methods: ["PUT"] },
      // { url: "/api/transactions/:id/approve",    methods: ["PUT"] },
      // { url: "/api/transactions/:id/reject",    methods: ["PUT"] },
      // { url: "/api/transactions/:id/reject",    methods: ["PUT"] },
    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== "UnauthorizedError") return next();
  return res.status(401).json({ message: "Unauthorized request." });
}

app.use("/api", router);

app.get("/*", (req, res) =>  res.sendFile(__dirname + "/index.html"));

app.listen(port, () =>  console.log(`Express has started on port: ${port}`));

module.exports = app;
