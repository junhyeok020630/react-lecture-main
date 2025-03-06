/**
 * 기본 자료형
 * - 자바스크립트에서 제공하는 객체
 * - 통합 개발 환경에서 자동 완성
 * - number, string, boolen
 */

// 기본 자료형
let number = 273;
let string = '안녕하세요';
let boolean = true;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

// 객체 자료형
let number1 = new Number(273);
let string1 = new String("안녕하세요.");
let boolean1 = new Boolean(true);

console.log(typeof number1);
console.log(typeof string1);
console.log(typeof boolean1);

/**
 * 기본 자료형의 속성 또는 메서드를 사용할 때 기본 자료형이 자동으로 객체로 변환
 * 기본 자료형, 객체 자료형 모두 속성과 메서드를 사용
 * 
 */
let string2 = '과자|1500원';
console.log(string2.split('|'));

let string3 = new String('과자|1500원');
console.log(string3.split('|'));

// 차이점 : 기본 자료형은 객체가 아니므로 속성과 메서드를 추가할 수 없다.
let primitiveNumber = 273;

// primitiveNumber.method = function() {
//     return 'Primitive Method';
// }
// console.log(primitiveNumber.method());

// -> 기본 자료형에 프로토타입으로 메서드 추가
Number.prototype.method = function () {
    return 'Primitive Method';
}
console.log(primitiveNumber.method());