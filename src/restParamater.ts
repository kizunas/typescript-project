const add = (...numbers: number[]) => {
  let result = 0
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);

// 上図のように記述すると引数5, 10, 2, 3.7がnumbersという配列としてまとめられスプレッド演算子によって
// 一つずつの引数としてわたされる。
// 引数の数を任意にするために使用できる方法