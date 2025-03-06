/**
 * 변수 : 값을 저장할 때 사용하는 식별자, 
 * 변수 선언 후 변수에 값 할당
 */
 // 변수 선언 
 // let 식별자;

 // var 변수 a를 선언
 var a
 a = 10;
 console.log(a);

 // var 변수는 재설정 가능
 var a=20;
 console.log(a);

 // let 변수 b를 선언
 let b;
 b = 30;
console.log(b);

// let 변수는 재설정 불가능
// let b = 40; // 에러 발생
// 값 재할당은 가능
b = 40;
console.log(b);

// 상수 const : 항상 같은 수
// 선언과 동시에 값이 할당되어야 한다.
// 선언 시점에 값이 정해진다. - 값 재할당 불가능
// 변하지 않을 대상에 상수 적용
const c = 0;
// c = 10; // 실행은 되나 값이 변경되지 않는다.
console.log(c);
