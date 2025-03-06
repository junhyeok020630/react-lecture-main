/**
 * 함수의 기본 형태
 * function <함수 이름>(<매개 변수>) {
 *      <함수 코드>
 *      return <리턴 값>
 * }
 * 
 * 매개 변수가 여러 개인 함수
 * function <함수 이름>(<매개 변수>, <매개 변수>) {
 *      <함수 코드>
 *      return <리턴 값>
 * }
 * 리턴 없는 함수 - 출력 함수 등
 */

function sum(min, max) {
    let output = 0;
    for (let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}

console.log(sum(1,100));

/**
 * 함수 매개변수 초기화
 * 매개변수를 입력하지 않고 함수 호출
 *  - 실행 시 undefined가 출력
 */

function print(name, count) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
};

print("사과", 10);
print("사과");

/**
 * 조건문을 활용한 매개변수 초기화
 * - 조건문으로 매개 변수를 확인, count가 undefined일 때 1로 초기화
 */

function print1(name, count) {
    // 함수 매개 변수 초기화
    if(!count) {
        count = 1;
    }

    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print1("사과");

/**
 * 콜백 함수
 * 함수의 매개변수로 전달되는 함수
 */
function callTenTimes(callback) {
    // 10회 반복
    for (let i = 0; i < 10; i++) {
        //매개 변수로 전달된 함수를 호출합니다.
        callback();
    }
}

callTenTimes(function () {
    console.log('함수 호출');
});