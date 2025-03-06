/**
 * JSON 객체
 * 자바스크립트 객체를 사용한 데이터 표현 방법
 */
const javascriptObject = [{
    name: '윤인성',
    region: '서울'
}, {
    name: '윤명월',
    region: '도쿄'
}];
// 자바스크립트 객체를 JSON 문자열로 변경
const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log('---------------');

//JSON 문자열을 자바스크립트 객체로 변경
const outputC = JSON.parse(outputB);
console.log(typeof(outputC));
console.log(outputC);