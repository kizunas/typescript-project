
function combine(
  input1: number | string, // Union型
  input2: number | string,
  resultConversion: 'as-number' | 'as-text', // UnionとLiteralを合わせたもの(指定されたもの以外、許可されない)
) {
  let result
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    result = +input1 + +input2; // 単項プラス演算子は、数値以外も数値へと変換（数値にできないものはNaNになるので注意）
  } else {
    result = input1.toString() + input2.toString() // toStringで明示的に文字列を指定
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result // 単項プラス演算子は、数値以外も数値へと変換（数値にできないものはNaNになるので注意）
  //   // return parseFloat(result) // こっちの書き方でも大丈夫parseFloatは浮動小数点値を返す
  // } else {
  //   return result.toString();
  // }
}


const combinedAges = combine(30, 26, 'as-number');  // 結果をnumberで返してほしいためas-numberと記述
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number'); // 文字列で渡すが数字で返してほしいという条件
console.log(combinedStringAges);


const combinedNames = combine('Max', 'Annna', 'as-text'); // 結果をstringsで返してほしいためas-textと記述
console.log(combinedNames);

// エイリアス型
// このtypeという記述はTypeScript
// Combinableは型名
// number | stringという書き方はUnion型の書き方
type Combinable = number | string
type ConversionDiscriptor = 'as-number' | 'as-text'

function combine(
  // input1: number | string, // Union型
  // input2: number | string,
  input1: Combinable, // エイリアス型
  input2: Combinable, // エイリアス型
  // resultConversion: 'as-number' | 'as-text', // UnionとLiteralを合わせたもの(指定されたもの以外、許可されない)
  resultConversion: ConversionDiscriptor, // エイリアス型
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
