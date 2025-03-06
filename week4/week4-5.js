/**
 * Array 객체
 * Array 객체의 메서드
 * -> 대부분 파괴적 메서드로 자기 자신을 변경
 * pop(), push() -> 스택
 */

let array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

// 배열요소 꺼내기
let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메서드를 호출한 이후의 배열');
console.log(array);

// 배열 요소 넣기
array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('- push() 메서드를 호출한 이후의 배열');
console.log(array);

/**
 * ECMA5에서 추가된 메서드
 * forEach() 배열의 요소를 하나씩 뽑아 반복
 * map() 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열
 * filter() 콜백함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴
 */
let array1 = [52,273,32,64,72];

//forEach()
console.log('--- forEach()메서드 ---');
array1.forEach((item, index) => {
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
});

//map()
console.log();
console.log('--- map() 메서드 ---');
let outputA = array1.map((item, index) => {
    // 배열의 모든 요소를 제곱해서 새로운 배열
    return item * item;
});
console.log(outputA);

//filter()
console.log();
console.log('--- filter() 메서드 ---');
let outputB = array1.filter((item,index) => {
    // 짝수만 추출
    return item % 2 == 0;
});
console.log(outputB)