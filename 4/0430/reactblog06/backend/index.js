import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userModel } from "./model/user.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
mongoose
  .connect(
  )
  .then(() => {
    console.log("몽고db연결됨");
  })
  .catch((err) => {
    console.log("몽고db연결안됨", err);
  });


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  console.log("백엔드에서 확인", req.body);
  const { userName, passWord } = req.body;

  //userModel에서 이미 존재하는 사용자인지 확인
  //새 사용자를 생성
  //몽고db에 저장
  //저장 성공하면 프론트엔드로 응답 메시지(사용자의 userName일수도있고 , _id일수도 있다 ) 전송

  //userModel에서 이미 존재하는 사용자인지 확인
  const existingUser = await userModel.findOne({ userName });
  if (existingUser) {
    return res.status(409).json({ message: "이미 존재하는 사용자입니다" });
  }

  //새 사용자를 생성
  const userDOC = new userModel({ userName, passWord });
  //몽고db에 저장
  const savedUser = await userDOC.save();

  //저장 성공하면 프론트엔드로 응답 메시지(사용자의 userName일수도있고 , _id일수도 있다 ) 전송
  res.status(201).json({
    user: {
      userName: savedUser.userName,
      _id: savedUser._id,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}에서 돌고있음`);
});
