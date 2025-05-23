import { User as IUser } from "../interfaces/User";

export class User implements IUser {
  constructor(public id: number, public name: string) {}

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
