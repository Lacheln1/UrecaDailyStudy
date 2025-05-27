const divToggle = document.querySelector(".toggle");
import { type } from "./node_modules/redux/src/types/actions";
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름을 정의한다
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 객체를 만드는 액션 생성 함수를 작성한다(액션 객체는 type값을 반드시 갖고 있어야 한다)
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
