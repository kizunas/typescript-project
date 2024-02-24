// unknown型には何を入れてもエラーにならない
let userInput: unknown;

let userName: string;

// 他の型にunknown型を入れるとエラーになる。
// userName = userInput // any型ならエラーにならない（TypeScriptがチェックしないため）がunknown型はエラーになる。

// エラーにならないようにするにはデータ型をif文でチェックする
if (typeof userInput === 'string') {
  userName = userInput;
}

// never型は関数の戻り値として利用することができる(void型と似ているので注意)。
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code}; // throw 文を使用すると任意のタイミングで例外(error)を発生させる。戻り値は絶対になし（never型が使える）。無限ループのときも返り値は絶対になし。
}

generateError('エラーが発生しました。', 500)