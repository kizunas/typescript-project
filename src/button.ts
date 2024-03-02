const button = document.querySelector('button');

button.addEventListener('click',() => {
  console.log('clicked');
});

// 上記の記述だとaddEventListener前のbuttonに警告が表示される。
// これはtsconfig.jsonのstrictNullChecksが警告を出しているためである。
// buttonという要素がhtmlにない場合、buttonはnullとなるためエラーが生じる。それを警告してくれている。
// 対象方法は以下のようになる。

//　！マークをつける(確実にnullじゃないと言える場合はこちらが手っ取り早い)
// const button = document.querySelector('button')!;

// button.addEventListener('click',() => {
//   console.log('clicked')
// })



// if文を追加する場合もエラーを消せる
// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click',() => {
//     console.log('clicked');
//   });
// }