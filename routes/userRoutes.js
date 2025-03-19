// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  loadUsers,
  deleteAllUsers,
  deleteUserById,
  getUserById,
  addUser,
} = require("../controllers/userController");

router.get("/load", async (req, res) => {
  const db = req.app.locals.db;
  try {
    await loadUsers(db);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send("Error loading users");
  }
});

router.delete("/users", async (req, res) => {
  const db = req.app.locals.db;
  try {
    await deleteAllUsers(db);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send("Error deleting users");
  }
});

router.delete("/users/:userId", async (req, res) => {
  const db = req.app.locals.db;
  const { userId } = req.params;
  try {
    await deleteUserById(db, userId);
    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.get("/users/:userId", async (req, res) => {
  const db = req.app.locals.db;
  const { userId } = req.params;
  try {
    const user = await getUserById(db, userId);
    res.json(user);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.put("/users", async (req, res) => {
  const db = req.app.locals.db;
  const userData = req.body;
  try {
    await addUser(db, userData);
    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
