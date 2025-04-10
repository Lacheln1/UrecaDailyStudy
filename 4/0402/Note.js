import React from "react";

const Note = () => {
  return (
    <div>
      {/* 
        var 
        - 변수 선언
        - 단점 : 동일한 변수명을 중복해서 선언 가능 (=> 프로그램에 버그가 발생할 수 있다.)
                상수 선언이 안 됨.

        let 
        - es6(2015년)에 추가된 변수 선언
        - 동일한 이름으로 중복해서 선언 할 수 없음.
        - 동적인 값을 상수나 변수로 선언할 때 쓰임.

        const
        - es6에 추가된 변수 선언 -> 값을 변경할 수 없음.
        - 동일한 이름으로 중복해서 선언 할 수 없음.

        기존 함수
        - 인자에 값이 전달 되지 않으면 error는 발생하지 않는데
          인자의 값은 undefined 됨.

        default parameter
        - 함수의 인자 값을 기본 값을 설정합니다.
          인자가 전달되지 않으면 기본 값을 사용한다.
        - 선언 방식
            function 함수명(인자 = 기본값)

        react 객체 생성 함수
        Root DOM에 렌더링할 ReactDOM 객체를 생성하는 함수
        ReactDOM.createRoot(root)

        <StrictMode>를 통해 개발 중에 컴포넌트에서 발생하는 버그를 빠르게 찾을 수 있다. 
        </StrictMode>

        JSX JavaScript 를 확장한 문법으로 react에서 "엘리먼트(element)"를 생성한다.

        형식 ] <태그명> 내용 {자바스크립트} </태그명>
        { } : 자바스크립트 표현식 (변수, 함수 등 )넣는다.
          
        JSX 표현식이 정규 javascript 함수 호출이 되고 javascript객체로 인식된다.
        즉, JSX를 if 구문 및 for loop 안에 사용하고,
        변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있다.

        JSX 문법 
        1. JSX - camelCase 표현식을 사용한다
        background-color --> backgroundColor

        2. 클래스 방식에서 component의 함수를 사용할 때는 this.함수명으로 사용해야 한다.

        3. JSX에서는 style을 DOM요소에 문자열 형태가 아닌 객체 형태로 {} 로 설정해야 한다.
        const style = {
        backgroundColor : "black",
        color : "pink",
        padding : 6,
        }

        4. 주석
        5. 요소 여러 개가 있을 경우 반드시 하나의 부모 요소로 감싸야 한다
        ㄴ

        component
        - 기능 단위, 재사용 단위의 객체
        - react ui component를 만드는 방법
        1. 함수형

        function 함수명(){
          return jsx; // js도 가능
        }

        2. 클래스형
        import {Component} from 'react'
        Class 컴포넌트이름 extends Component{
          render(){ //필수 함수}
          return jsx;
        
        }
        
        react에서 이미지 로딩하기
        1. public 경로에 있는 이미지
        - 경로명으로 바로 접근할 수 있다
        - webpack에 의해 번들링이 되지 않기 때문에 이미지가 많거나 프로젝트가 커질수록 관리가 어려워진다

        2. src/assets 경로에 있는 이미지
        - webpack과 같은 모듈 번들러를 사용하여 이미지를 처리할 수 있으며 이미지를 최적화하고 번들에 포함시킬 수 있다
        - 사용방법
          2.1 import를 통해 상수로 사용하기
          import 상수명 from '경로'
          <img src={상수명} alt="My image"/>
          ex)
          import myImage from "../assets/images/my-image.jpg"
          < img src={myImage} alt="My Image"

          2.2 require() 함수를 이용하여 module import하기
          require(이미지경로)

          state
          - 컴포넌트 내부에서 사용하는 상태 값
          - 변경할 때는 Component가 제공하는 setState()함수를 통해서만 변경된다.
          - setState()함수를 통해 변경됐을 때 re-rendering 된다

          Component 에서 사용하는 Variable과 Props와 State의 차이점
          Variable
          - Component 내에서 const, let을 통해 선언한 변수
          - 값이 변경되도 react가 인지하지 못하므로 re-rendering이 되지 않는다

          props
          - 부모 Component가 자식 컴포넌트를 사용할 때 값을 전달하는 수단
          - 부모 Component가 rendering될때 자식 Component도 rendering 된다

          



      */}
    </div>
  );
};

export default Note;
