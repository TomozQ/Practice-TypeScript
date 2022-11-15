const message: string = "Hello world";

console.log(message);

const greeting = 'Hello,';  // 文
const target = 'World!';    // 文
console.log(greeting + target);   // （greeting + target）-> 式 console.log(greeting + target) -> 式文

// 変数宣言
const greeting1 = 'Hello,';
const target1 = 'World!';
const text = greeting1 + target1;
console.log(text)

// ↓

// 複数の変数宣言を , でつなげることができる。
const greeting2 = 'Hello,',
      target2 = 'World!',
      text1 = greeting2 + target2;
console.log(text1);
// が、メンテナンス性が落ちるため、一つずつconstを用いる方が良いし一般的。

const greeting3: string = 'Hello, ';
const target3: string = 'World!';
// const target3: string = 123;  // src/index.ts:26:7 - error TS2322: Type 'number' is not assignable to type 'string'.
console.log(greeting3 + target3);