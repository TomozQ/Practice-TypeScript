const width1 = 5;
const width2 = 8;
const height: number = 3;
const area = (width1 + width2) * height / 2;
console.log(area); // 19,5
/**
 * number型では整数と小数の区別がない
 */
console.log(3.5 * 2); // 7

/**
 * 数値リテラル
 * リテラル ... 何らかの値を生み出すための式。生み出したい値に応じて幾つかの種類がある。
 * 5, 8, 3.5 ... などとプログラム中に数を書くとそれは数値リテラルとなる。
 */

const binary = 0b1010;      // 2進数リテラル
const octal = 0o755;        // 8進数リテラル
const hexadecimal = 0xff;   // 16進数リテラル

console.log(binary, octal, hexadecimal);  // 10 493 255

/**
 * 2進数は先頭に0b
 * 8進数は先頭に0o
 * 16進数は先頭に0x
 */