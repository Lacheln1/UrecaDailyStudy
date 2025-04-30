import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}에서 돌고있음`);
});
