require("dotenv").config();
const express = require("express");

const server = express();
server.use(express.json());

const users = [
  { username: "ckrenzer", password: "passwordsarefun" },
  { username: "spiderman", password: "friendlyneighbor" },
  { username: "gandlaf", password: "mellon" },
];

server.use("/", (req, res) => {
  res.send(`<h1>Welcome to the store!</h1>`);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

server.post("/api/register", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).send(newUser);
});

server.post("/api/login", (req, res) => {
  if (!req.body) {
    return res.status(404).json({ message: "I have no memory of you...?" });
  } else {
    res.json({ message: `Welcome back, ${req.body.username}` });
  }
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Welcome to port ${port}!`);
});
