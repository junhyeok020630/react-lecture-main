// 배열과 객체는 할당할 때 얕은 복사가 이루어진다.
// 배열을 복사해도 다른 이름이 붙을 뿐 같은 참조 값 사용
const 물건_200301 = ['우유', '식빵']
const 물건_200302 = 물건_200301

물건_200302.push('고구마')
물건_200302.push('토마토')

console.log(물건_200301)
console.log(물건_200302)