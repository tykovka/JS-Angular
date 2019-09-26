export class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHi = () => {
      return `Hi, ${this.firstName} ${this.lastName} 👋`;
    };
  }
}

