const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/users");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("DB Backend for react demo app....");
});

app.get("/api/users", async (req, res) => {
  const users = await db.getAllUsers();
  res.status(200).json(users);
});

app.get("/api/user/:id", async (req, res) => {
  const user = await db.getUser(req.params.id);
  res.status(200).json(user);
});

app.post("/api/user/", async (req, res) => {
  const result = await db.insertUser(req.body);
});

app.delete("/api/user/:id", async (req, res) => {
  // const result = await db.deleteUser(req.params.id);
  //console.log('in delete at server');
  console.log(req.params.id);
  await db.deletetUser(req.params.id);
});

app.patch("/api/user/:id", async (req, res) => {
  const id = await db.updateUser(req.params.id, req.body);
  res.status(200).json(id);
});

app.listen(3001, () => {
  console.log("Server running on 3001");
});
