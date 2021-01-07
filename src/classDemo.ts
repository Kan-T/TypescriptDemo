class Animal {
  static animalNum: number = 0;
  static isAnimal(a) {
    return a instanceof Animal;
  }
  
  private _name: string = "Phil";

  constructor(name: string) {
    this._name = name;
    Animal.animalNum += 1;
  }

  get name() {
    console.log('read from getter.');
    return this._name;
  }
  set name(value) {
    console.log('setter: ' + value);
    this._name = value;
  }
}

let a = new Animal('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Tom
console.log(Animal.isAnimal(a)); // call static func
console.log(Animal.animalNum); // Tom
