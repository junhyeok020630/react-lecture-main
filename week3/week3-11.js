//null의 값과 자료형
console.log(null);
console.log(typeof(null));

//값이 없는 상태를 구분할 때 null 활용
let zeroNumber = 0;
let nan = NaN;
let falseBoolean = false;
let emptyString = '';
let undefinedValue;
let nullValue = null;


if (zeroNumber == null) 
    console.log('0은 존재하지 않는 값입니다.');
if (nan == null)
    console.log('NaN은 존재하지 않는 값입니다.');
if (falseBoolean == null)
    console.log('false는 존재하지 않는 값입니다.');
if (emptyString == null)
    console.log('emptyString은 존재하지 않는 값입니다.');
if (undefinedValue == null)
    console.log('undefined는 존재하지 않는 값입니다.');
if (nullValue == null)
    console.log('null은 존재하지 않는 값입니다.');

