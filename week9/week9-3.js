// 깊은 복사 - 스프레드 연산자로 표현 가능
// 두 배열이 완전히 독립적으로 작동 - 클론 생성

const 물건_200301 = ['우유', '식빵']
const 물건_200302 = [...물건_200301]

물건_200302.push('고구마')
물건_200302.push('토마토')

console.log(물건_200301)
console.log(물건_200302)