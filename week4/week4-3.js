/**
 * String 객체
 * String 객체의 메서드는 변경된 값을 리턴
 */

// 잘못된 String 객체의 메서드 사용
let string = 'abcdefg';
string.toUpperCase(); // 자기 자신을 변경하지 않고 그저 리턴함
console.log(string);
string = string.toUpperCase(); // 리턴값을 자기자신에 다시 저장
console.log(string);

// indexOf() 메서드 : 특정 문자열이 있는지 확인, 위치를 리턴
let string1 = '안녕하세요. 좋은 아침입니다.';

// 문자열 내부에 "좋은"이라는 문자열이 있는지 확인
if(string1.indexOf('좋은') >= 0) {
    console.log('좋은 아침이에요...!');
}

//split() 메서들르 사용하면 특정한 기호를 기반으로 문자열을 분해한다.
let string2 = '감자,고구마,바나나,사과';
let array = string2.split(',');
console.log(array);