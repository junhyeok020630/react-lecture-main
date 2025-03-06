// 함수 생성 방법

/**
 * 익명 함수 : 이름을 붙이지 않고 함수 생성
 * 함수를 호출하면 함수 내부의 코드 덩어리가 모두 실행
 */

// let <함수 이름> = function () { };

let 함수1 = function () {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

함수1();
console.log(함수1);

/**
 * 선언적 함수 : 이름을 붙여 함수 생성
 */

// function <함수 이름> () { };

function 함수2() {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
}

함수2();
console.log(함수2);

 /**
  * 화살표 함수[ECMAScript6] : 하나의 표현식을 리턴하는 
  * 함수를 만들 때는 중괄호 생략 가능
  * 함수의 이름이 존재하지 않기 때문에 변수 사용
  */
 let 함수3 = () => {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
 };

 함수3();
 console.log(함수3);