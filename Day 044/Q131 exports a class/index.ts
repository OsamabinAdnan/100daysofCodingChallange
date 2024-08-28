
export class Person {
    name: string;
    age : number;
    constructor(n: string, a:number) {
      this.name = n;
      this.age = a;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
  }
  // Exports the Person class