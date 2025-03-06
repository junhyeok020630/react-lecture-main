/**
 * Number 객체
 * js에서 숫자를 표현할 때 사용
 * 메서드
 * toExponential()
 * toFixed()
 * toPrecision()
 */
// 1. toFixed : 소수점 자릿수를 자르는 메서드
let number = 273.5210332;
console.log(number.toFixed(1));
console.log(number.toFixed(4));

// 생성자 함수의 속성
// 생성자 함수에 속성과 메서드 추가

function Constructor() {}
Constructor.property = 273; // 속성
Constructor.method = function(){}; // 메서드

console.log(Constructor.property);
console.log(Constructor.method);

//Number 생성자 함수의 속성
let numberA = Number.MAX_VALUE;
let numberB = Number.MAX_VALUE+1;
console.log(numberA);
console.log(numberB);
// 큰 수를 다룰 때는 부동소수점 형식 사용
let addNumber = Number('0.0000000000000001e+308');
let numberC = Number.MAX_VALUE+addNumber;
console.log(numberC);