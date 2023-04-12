const person = {
  name: "김국진",
  age: "56",
  sayHello: function () {
    console.log(
      `일반함수 : 안녕하세요 저는 ${this.name}입니다. 제 나이는 ${this.age}살 입니다.`
    ); // ? 일반함수 : 안녕하세요 저는 김국진입니다. 제 나이는 56살 입니다.
  },
  sayHelloArrow: () => {
    console.log(
      `화살표 : 안녕하세요 저는 ${this.name}입니다. 제 나이는 ${this.age}살 입니다.`
    ); // ? 화살표 : 안녕하세요 저는 undefined입니다. 제 나이는 undefined살 입니다.
    console.log(
      `화살표 : 안녕하세요 저는 ${person.name}입니다. 제 나이는 ${person.age}살 입니다.`
    ); // ? 화살표 : 안녕하세요 저는 김국진입니다. 제 나이는 56살 입니다.
    // console.log( // ! 사용불가
    //  `화살표 : 안녕하세요 저는 ${name}입니다. 제 나이는 ${age}살 입니다.`
    // );
  },
};

person.sayHello();
person.sayHelloArrow();
