/**
 * Date 객체
 * Month를 나타내는 '월'은 0부터 시작
 * 0 = 1월, 11 = 12월
 */

// Date 객체 생성

// 현재 시간 기반
let dateA = new Date();
console.log(dateA);

// 유닉스 타임(1970년1월1일부터 경과한 밀리초)
let dateB = new Date(692281800000);
console.log(dateB);

// 문자열을 기반으로 Date 객체 생성
let dateC = new Date("December 9, 1991 21:30:00");
console.log(dateC);

// 시간요소를 기반으로 Date 객체 생성
let dateD = new Date(1991,12 - 1, 9, 21, 30, 0, 0);
console.log(dateD);

// 시간 간격 구하기
// getTime() 메서드 : 유닉스 타임
// 2개의 시간을 빼고, 일 단위로 (1000밀리초 * 60초 * 60분 * 24시간) 나누어 시간 간격 구함
let now = new Date();
let birth = new Date('June 30, 2002');

let interval = now.getTime() - birth.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 *24));

console.log(`태어나고 ${interval}일 지났습니다.`)