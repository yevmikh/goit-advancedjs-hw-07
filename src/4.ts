// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature,
//яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()).
// Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

// Людина (Person): Створіть клас Person.
//Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key.
//Клас Person повинен мати метод getKey, який повертає збережений ключ.

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true),
// або закрита(false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn,
//  який додає об'єкт класу Person у масив tenants, якщо door відкрита.
//  Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person has come in.");
    } else {
      console.log("Door is closed.Cannot enter.");
    }
  }
}

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
//  Реалізуйте метод openDoor у цьому класі.Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key,
//     то двері відчиняються.

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door === true;
      console.log("Door has been opened.");
    } else {
      console.log("Wrong key.The door remains closed.");
    }
  }
}

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.
const correctKey = new Key();
const wrongKey = new Key();

const house = new MyHouse(correctKey);
const openScenario = new Person(correctKey);
const closeScenario = new Person(wrongKey);

console.log("Trying to open the door with correct key :");
house.openDoor(openScenario.getKey());

console.log("Trying to open the door with wrong key :");
house.openDoor(closeScenario.getKey());

house.comeIn(closeScenario);

export {};
