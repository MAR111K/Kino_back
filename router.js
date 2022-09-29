import Router from "express";
import User from "./server/models/user.js";

const router = new Router();

router.get("/task", (req, res) => {
  res.send("uuu");
});
router.post("/registration", (req, res) => {
  let username = req.body.username;

  User.find({}, function (err, docs) {
    let allUsers = docs.some((element) => element.username === username);
    if (!allUsers) {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
        token: req.body.token,
      });
      user.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
});
router.post("/check__user", (req, res) => {
  User.find(
    {
      username: req.body.username,
      password: req.body.password,
    },
    function (err, docs) {
      if (docs.length !== 0) {
        res.send(docs);
      } else {
        res.sendStatus(404);
      }
    }
  );
});
export default router;
