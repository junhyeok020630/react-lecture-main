//익명 함수와 선언적 함수의 생성 순서

//예제 A - 익명함수 2개 - 순차적 실행
함수a = function () { console.log("1"); };
함수a = function () { console.log("2"); };

함수a();

//예제 B - 선언적 함수가 먼저 실행
함수b = function () { console.log("1"); };
function 함수b() { console.log("2"); };

함수b();

// 예제 C - 선언적 함수가 익명 함수보다 먼저 실행
function 함수c() { console.log("1"); };
함수c = function () { console.log("2"); };

함수c();

//예제 D - 선언적 함수 2개 : 순차적 실행
function 함수d() { console.log("1"); };
function 함수d() { console.log("2"); };

함수d();