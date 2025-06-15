console.log('Hello!!!');
console.log('Hello@@@');
console.log('Hello@@@', 'world!', 'javascript');
console.log('안녕');

// alert('Hello Javascript!');
/*
console.log('Hello!!!');
console.log('Hello@@@');
console.log('Hello@@@', 'world!', 'javascript');
*/

let str = 'Hello Javascript';
let number = 30;
console.log('문자열: ', str);
console.log('숫자: ', number);

// 함수 선언
function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

// 함수 실행
sayHello();
console.log('----');
sayHello();

let obj = {
  number: 30, // 객체가 갖고 있는 변수 : 프로퍼티(속성)
  sayHello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
obj.sayHello();
