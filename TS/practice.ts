const greeting: string = "Hello";
const myname: string = "hayashida";

function hello(a: string, b: string): string {
  return a + " " + b + "!";
}

console.log(hello(greeting, myname));

const x: number = 100;
console.log(x * 3);

console.log("whats happen");

const isReady: boolean = false; //真偽値
const age: number = 25; //数値
const fullName: string = "John Doe"; //文字列
const bigNumber: bigint = 100n; //大きな整数
const uniqueSymbol: symbol = Symbol("unique"); //一意の値
const notDefined: undefined = undefined; //値が定義されていない状態
const empty: null = null; //値が存在しない状態

const a: any = 100; //何でも代入できる
console.log(a * 2); //操作もできる制限なし

const y: unknown = 100; //何でも代入できる
console.log(y * 3); //操作はできない

function doSomething(): void {
  //戻り値のない関数
}

function throwError(): never {
  //戻り値を返すことがありえない関数
  throw new Error(); //エラーを投げる関数や無限ループの関数の戻り値
}

type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello"; //string型でも
value = 123; //number方でも代入可

type Summary = { name: string };
type Detail = { name: string; age: number };

const johnDetail: Detail = { name: "John", age: 28 };
const summary: Summary = johnDetail; //代入できる。構造的部分型として互換がある。

const johnSummary: Summary = { name: "John" };
const detail: Detail = johnSummary; //代入できない。構造的部分型として互換がない。

const numbers = [1, 2, 3];
let numbers1: number[];
let strings: Array<string>;

const colors = ["red", "green", "blue"];
console.log(colors[0]);

colors[1] = "yellow";
console.log(colors);

const numbers_readonly: readonly number[] = [1, 2, 3];
const strings_readonly: ReadonlyArray<string> = ["hello", "world"];
numbers_readonly[0] = 4; //変更できない
strings_readonly.push("!"); //要素を追加できない

const numbers_for = [1, 2, 3];
for (const num of numbers) {
  console.log(num); //1, 2, 3と出力される
}

let tuple: [string, number];
tuple = ["hello", 18]; //代入できる
tuple = [10, "hello"]; //順序が正しくないため、代入できない。
tuple = ["hello", 10, "world"]; //要素が多すぎるため代入できない。

const tuple_access: [string, number] = ["hello", 10];
console.log(tuple_access[0]);

const john = { name: "John", age: 20 };
console.log(john.name);

let obj: { name: string; age: number };
let obj_readonly: { readonly name: string; age: number };
obj_readonly = { name: "John", age: 20 };
obj_readonly.name = "Tom"; //readonlyのプラパティに代入できない

let obj_option: { name: string; age?: number };
obj_option = { name: "John" }; //オプションプロパティ?付きは省略可能

const obj_method = {
  a: 1,
  b: 2,
  sum(): number {
    return this.a + this.b;
  },
};
console.log(obj_method.sum());

let obj_index: { [key: string]: number };
obj_index = { key1: 1, key2: 2 };
console.log(obj_index["key1"]);
console.log(obj_index[1]);

const name_shorthand = "John";
const age_shorthand = 20;
const obj_shorthand = { name_shorthand, age_shorthand };
console.log(obj_shorthand);

function printLength(obj: { a?: string }) {
  console.log(obj.a?.length);
}
printLength({ a: "hello" }); //=>5
printLength({}); //=>undefined

const map = new Map();
map.set("name", "John");
map.set("age", "20");

console.log(map.get("name")); //=>'John'

let people: Map<string, number>;

for (const [key, value] of map) {
  console.log(key, value); //各エントリーがキーと値の配列として追加順位取得可
}

const set = new Set();
set.add(1);
set.add(2);
set.add(2); //同じ値は追加されない
console.log(set); //=>Set {1, 2}

let numSet: Set<number>;

for (const value of set) {
  console.log(value);
}

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
const myColor: Color = Color.Red;

let value_union: boolean | number;
value_union = true; //代入できる
value_union = 100; //代入できる
value_union = "John"; //代入できない

type Triangle = { kind: "triangle"; base: number; height: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };
type Shape = Triangle | Rectangle;

function getArea(shape: Shape): number {
  //共通のプロパティkindを利用して型を判定する
  switch (shape.kind) {
    case "triangle":
      return (shape.base * shape.height) / 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

type Octopus = { swims: boolean };
type Cat = { nightVision: boolean };
type Octocat = Octopus & Cat;

const octocat: Octocat = { swims: true, nightVision: true };
console.log(octocat); //=> { swims: true, nightVision: true }

const [b, c] = [1, 2];
console.log(a); //=>1
console.log(b); //=>2

const obj_separate = {
  name_separate: "John",
  age_separate: 20,
};

const { name_separate, age_separate } = obj_separate;
console.log(name_separate); //=>John
console.log(age_separate); //=>20

const greet = (name: string): string => {
  return `Hello ${name}`;
};
console.log(greet("John")); //=>'Hello John'

function greet_declaration(name: string): string {
  return `Hello ${name}`;
}
console.log(greet_declaration("John"));

const printCoord = ({ x, y }: { x: number; y: number }) => {
  console.log(`Coordinate is (${x},${y})`);
};
printCoord({ x: 10, y: 20 }); //coordnate ia (10, 20)

function isString(value: any): value is string {
  return typeof value === "string";
} //型の絞り込み
function printLength_guard(value: any) {
  if (isString(value)) {
    console.log(value.length);
  }
}
printLength_guard("hello"); //=>5

function greet_option(name?: string) {
  if (name === undefined) {
    return "Hello!";
  } else {
    return `Hello ${name}!`;
  }
}
console.log(greet_option("Jone"));
//=>'Hello John!'
console.log(greet_option());
//=>'Hello!'

function sum(...numbers: number[]) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); //=>15

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}
const john_class = new Person("John", 20);
john_class.introduce();
//=>'My name is John and I am 20 years old'

class Person_modifier {
  public readonly name: string;
  private readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}
const john_modifier = new Person_modifier("John", 20);
console.log(john_modifier.name); //OK
console.log(john_modifier.age); //エラー
john_modifier.name = "Tom"; //変更不可

class Person_shorthand {
  constructor(public name: string, private age: number) {}

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john_shorthand = new Person_shorthand("John", 20);
john_shorthand.introduce();

//---------------------------------
//例外処理
//---------------------------------
let bigdata: string | null; //try内letはfinalyなどではスコープできないので外で定義
try {
  bigdata = "This is big data ...............";
  throw new Error("An erro occurred!"); //エラーを投げる
} catch (error) {
  //エラーをキャッチ
  console.log(error);
} finally {
  //絶対最後に実行
  bigdata = null; //でかいデータ解放
}

//---------------------------------
//例外クラス
//---------------------------------
class CustomError extends Error {
  code = "CustomError";

  constructor(message?: string) {
    super(message);
  }
}
try {
  throw new CustomError("This is a custom error");
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`${error.code}:${error.message}`);
  }
}

//---------------------------------
//非同期処理
//---------------------------------
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primise resolved");
  }, 2000);
});
promise.then((data) => {
  console.log(data);
});
//=>'Promise resolved'
