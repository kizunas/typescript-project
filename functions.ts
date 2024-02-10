// 戻り値の型指定
function add(n1: number, n2: number): number {
  return n1 + n2;
}

printResult(add(5, 12)); // Result 17

// console.log(printResult(add(5, 12))); // undefined


// void 関数がreturn命令をもたない
function printResult(num: number): void{
  console.log('Result' + num);
}

// let combineValues: Function; // 関数という型を指定（しかし関数なら何でもはいってしまう）

// let combineValues: () => number; // アロー関数で書く。左が引数（引数がないときは空でよい）、右が返り値

let combineValues: (a: number, b: number) => number; // 引数の型がadd関数と一致していればよい。名前(a, b)は一致してなくてよい。

combineValues = add; // 関数を格納している

combineValues(8, 8)

// callback関数の型指定
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result)
}

addAndHandle(10, 20, (result) =>  {
  console.log(result);
})

