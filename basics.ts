function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2; //console.log(phrase + n1 + n2);だと最初が文字列なのですべて文字列になり5.28と表示される。その対策
  if (showResult){
    console.log(phrase + result);
  }else{
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;

const printResult = true;
const resultPhrase ='Result: ';

const result = add(number1, number2, printResult, resultPhrase);
