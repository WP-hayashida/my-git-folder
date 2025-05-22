const greeting : string = 'Hello';
const myname : string = 'hayashida';

function hello( a : string , b : string ) : string {
    return a + ' ' + b + '!';
}

console.log( hello( greeting , myname ) );


const x: number = 100;
console.log(x * 3);

console.log('whats happen');

const isReady: boolean = false;//真偽値
const age: number = 25;//数値
const fullName: string = "John Doe";//文字列
const bigNumber: bigint = 100n;//大きな整数
const uniqueSymbol: symbol = Symbol("unique");//一意の値
const notDefined: undefined = undefined;//値が定義されていない状態
const empty: null = null;//値が存在しない状態

const a: any = 100;//何でも代入できる
console.log(a*2)//操作もできる制限なし

const y: unknown = 100;//何でも代入できる
console.log(y*3);//操作はできない

function doSomething(): void {
    //戻り値のない関数
}

function throwError(): never {//戻り値を返すことがありえない関数
    throw new Error();//エラーを投げる関数や無限ループの関数の戻り値
}

type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello";//string型でも
value = 123;//number方でも代入可

type Summary = { name: string };
type Detail = { name: string; age: number };

const johnDetail: Detail = { name: "John", age: 28 };
const summary :Summary = johnDetail;//代入できる。構造的部分型として互換がある。

const johnSummary:Summary = { name: "John" };
const detail: Detail = johnSummary;//代入できない。構造的部分型として互換がない。

