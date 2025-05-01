import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userModel } from "./model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secretKey = "testteest";
const tokenLife = "1h";
const app = express();
const port = 3000;
const saltRounds = 10; // salt의 길이
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
  const userDOC = new userModel({
    userName,
    passWord: bcrypt.hashSync(passWord, saltRounds),
  });
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

app.post("/login", async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const userDOC = await userModel.findOne({ userName });
    if (!userDOC) {
      return res.status(401).json({ error: "없는 사용자 입니다" });
    }

    //비밀번호 확인(암호해독)
    const passOk = bcrypt.compareSync(passWord, userDOC.passWord);

    if (!passOk) {
      return res.status(401).json({ error: "비밀번호가 틀렸습니다" });
    } else {
      //jwt 토큰 발급
      const { _id, userName } = userDOC;
      //값저장
      const payload = { id: _id, userName };
      const token = jwt.sign(payload, secretKey, {
        expiresIn: tokenLife,
      });
      res
        .cookie("token", token, {
          httpOnly: true, //js에서 접근 불가
          // secure: process.env.NODE_ENV === "production", // https사용 시 true로 설정
          sameSite: "strict", //csrf공격방지
        })
        .json({
          id: userDOC._id,
          userName,
        });
    }
  } catch (error) {
    console.log("비밀번호확인함수에서일어난에러", error);
    res.status(500).json({ error: "서버에러" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}에서 돌고있음`);
});
