/**
 * 표준 내장 함수
 * 자바스크립트에서 기본적으로 지원하는 함수
 */
// parseInt, parseFloat 함수
// 문자열을 숫자로 변환
let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";

console.log(parseInt(inputA));
console.log(parseInt(inputB));
console.log(parseFloat(inputB));

// 문자열 뒤에 숫자가 아닌 문자가 포함되어 있을 때
// 숫자만 빼내어 출력
console.log(parseInt(inputC));

/**
 * 타이머 함수
 * 특정 시간 후에 또는 특정 시간마다 어떤 일을 할때 사용
 * 시간은 밀리초로 지정. 1초를 나타내려면 1000입력
 */

// 1초 후에 1초가 지났습니다. 1초마다 1초마다 호출됩니다. 출력

// setTimeout(function () {
//     console.log("1초가 지났습니다.");
// }, 1000);

// setInterval(function () {
//     console.log("1초마다 호출됩니다.");
// }, 1000);

let id = setInterval(function () {
    console.log("출력합니다.");
}, 1000);

// 3초 후
setTimeout(function () {
    clearInterval(id);
}, 3000);