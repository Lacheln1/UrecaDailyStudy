import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  console.log("백엔드에서 확인", req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}에서 돌고있음`);
});
