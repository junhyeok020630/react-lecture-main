/**
 * 자동 자료형 변환
 * 숫자와 문자열에 
 * + 연산자 사용시 자동으로 숫자가 문자열로 변환
 */

console.log(52 + 273);
console.log("52" + 273);
console.log(52 + "273");
console.log("52" + "273");

/**
 * 불 자료형 자동 변환
 * ! 연산자를 두 번 사용해 Boolean() 함수를 사용하는 것과 같은 효과
 * 
 */
var nan = Number("안녕하세요");
var undefinedVariable;

console.log(!!0);
console.log(!!nan);
console.log(!!"");
console.log(!!null);
console.log(!!undefinedVariable);