/**
 * 요소 : 배열 내부에 있는 값 하나하나
 * 속성 : 객체 내부에 있는 값 하나하나
 */
var object = {
    number: 273,
    string: 'RintIanTta',
    boolean: true,
    array: [52,273,103,32],
    method: function () {

    }
};

console.log(object);

for(let key in object) {
    console.log(`${key}: ${object[key]}`);
};