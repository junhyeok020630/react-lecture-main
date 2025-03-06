/**
 * 강제 자료형 변환 함수
 * Number() : 숫자로 변환
 * String() : 문자로 변환
 * Boolean() : 불로 변환
 */
console.log(Number("52"));
console.log(Number("52.273"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("안녕하세요"));

/**
 * Nan : Not a Number
 * - 숫자 자료형이지만 숫자가 아닌 것
 * NaN의 특징
 * - NaN은 무조건적으로 다름
 * - NaN인지 확인할 때는 isNAN() 함수를 사용한다.
 */

//NaN변수 생성
var nan = Number("안녕하세요");

// NaN끼리 비교 - 무조건 다름
console.log(nan == nan);
console.log(nan != nan);

//isNaN함수로 NaN인지 확인
console.log(isNaN(nan));

/**
 * Boolean() 함수
 * 5개의 요소는 false 반환
 * 0, NaN, ""[빈 문자열], null, undefined
 */

var nan = Number("안녕하세요");
var undefinedVariable;

console.log(Boolean(0));
console.log(Boolean(nan));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefinedVariable));

