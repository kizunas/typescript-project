const button2 = document.querySelector('button')!;

button2.addEventListener('click',() => {
  let userName = 'Max';  // userNameにある警告はtsconfig.jsのnoUnusedLocalsをtrueにするとでる。
  console.log('clicked');
});

function add(n1: number, n2: number) { // 関数の中に分岐があり、値を返さない場合はエラーがでる(noImplicitReturns)
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function add(n1: number, n2: number) { // しっかりと値を返してあげるとエラーが消える。
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

const button3 = document.querySelector('button');

function clickHandler(message: string, age: number) {
  console.log('clicked' + message) // 下のaddEventListenerでageに引数が渡されるがつかわれていないためエラー(noUnusedParameters)
}

if (button3) {
  button3.addEventListener('click', clickHandler.bind(null, "you're cool", 30))
}
// bindについて
// https://www.sejuku.net/blog/49161