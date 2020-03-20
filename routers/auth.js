const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(406).send("missing parameters")
  } else {
    const userId = 1;
    const token = toJWT({ userId });
    res.json({token});
  }
});

module.exports = router;
