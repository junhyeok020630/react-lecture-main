// 객체 깊은 복사 - 스프레드 연산자로 가능

const 구름 = {
    이름 : '구름',
    나이 : 6,
    종족 : '강아지'
}

const 별 = {...구름}
별.이름 = '별'
별.나이 = 1

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))