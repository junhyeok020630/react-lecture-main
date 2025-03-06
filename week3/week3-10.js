// 생성자
function Product(name, price) {
    this.name = name;
    this.price = price;
}

//프로토타입에 메소드를 선언
//프로토 타입은 모든 객체가 가지는 속성으로
// 프로토타입 공간에 메소드를 지정해 모든 객체가 공유하도록 할 수 있다.
// 해당 함수를 생성자 함수로 사용했을 때만 의미가 있다.
Product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
};

// 객체 생성
let products = [
    new Product("바나나", 1200),
    new Product("사과", 2000),
    new Product("배", 3000),
    new Product("고구마", 700),
    new Product("감자", 600),
    new Product("수박", 5000)
];

for(let product of products) {
    product.print();
};
