const express = require("express");
const {
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
  getRandomUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/user/all", getUsers);
router.get("/user/random", getRandomUser);

router.post("/user/save", saveUser);
router.patch("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
