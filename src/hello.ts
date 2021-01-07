/* eslint-disable @typescript-eslint/no-parameter-properties */
interface Person {
  firstName: string;
  lastName: string;
}

// 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。
class Student {
  public fullName: string;
  // 在构造函数的参数上使用public等同于创建了同名的成员变量
  public constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

function hello(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

// 剩余参数表示法 + 解构
function hello2(...[person1, person2]: [Person, Person]) {
  return `Hello, ${person1.firstName} ${person1.lastName} and ${person2.firstName} ${person2.lastName}`;
}

const user1 = { firstName: 'Jane', lastName: 'White' };

const user2 = new Student('Lisa', 'M.', 'White');

console.log(hello(user1));
console.log(hello2(user1, user2));

// console.log(hello({firstName: "Mike", lastName: "White", nickName: "M"})); // Error
