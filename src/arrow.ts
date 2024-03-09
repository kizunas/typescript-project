// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// 上記をアロー関数に書き換える
// ↓
// const add = (a: number, b: number) => {
//   return a + b;
// };

// 上記のように右辺の式が一つしかない場合、中括弧もreturnも不要
// const add = (a: number, b: number) => a + b;
// console.log(add(2, 5))


// const printOutput = (output: string | number) => {
//   console.log(output);
// };
// printOutput(5);

// 上記のように引数が一つの時()は不要。ただし型がanyになるので関数自体に型宣言が必要
// const printOutput: (output: string | number) => void = output => {
//   console.log(output);
// };
// 一方で型推論で型宣言が不要になるケースがあるため重要となる。例は以下
// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', event => {
//     console.log(event);
//   })
// }

// デフォルト関数パラメータ（デフォルトで関数にパラメータを入れることができる）
// const add = (a: number, b: number = 1) => a + b;
// 上記のように引数bのデフォルト値を1としている。
// 重要なのは引数の右側にしかデフォルト値を設定できない。すなわち引数aにデフォルト値を設定することは不可。
// もしやるのならすべての引数にデフォルト値を設定するという方法がある。