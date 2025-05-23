import { User } from "./models/User";

const user = new User(1, "Taro");
user.greet();

import type { MyObject } from "./models/User";
const obj: MyObject = {
  name: "TypeScript",
  age: 3,
};

console.log(obj);
