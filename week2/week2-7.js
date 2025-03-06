/**
 * ! : 논리 부정
 * || : 논리합
 * && : 논리곱
 * ^ : 둘의 값이 다를 때 참
 * 비교 연산자가 여러개 있을 때 왼쪽부터 차례대로 연산하기때문에
 * 30 > 20 > 10과 같이 사용시 false 반환
 */

let hours = (new Date()).getHours();

console.log(hours < 3 || 8 < hours);
console.log(3 <= hours && hours <= 8);