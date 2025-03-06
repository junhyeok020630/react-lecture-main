/**
 * 복합 대입 연산자
 * a+= 10 -> a = a + 10
 * 
 * 증감 연산자 : 각 연산자에서 변수 값이 1만큼 변경
 * ++ 증가 / -- 감소
 * 증감연산자의 전위 / 후위
 */

// 전위 증감
var number = 10;
console.log(number);
console.log(++number);
console.log(--number);
console.log(number);
console.log();
// 후위 증감
var number = 10;
console.log(number);
console.log(number++);
console.log(number--);
console.log(number);
console.log();

// 10 12 12 10
var number = 10;
console.log(number++); // 10 출력 후 1증가 11
console.log(++number); // 11+1 출력 12
console.log(number--); // 12출력후 1감소 11
console.log(--number); // 11-1 출력 10
console.log();

// 10 12 12 10
var number = 10;
console.log(number);
number++;
number++;
console.log(number);
console.log(number);
number--;
number--;
console.log(number);