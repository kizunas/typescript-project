const hobbies = ['Sports', 'Cooking'];
// 配列、オブジェクトのすべての値を展開する（スプレッド構文)

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

// ちなみに
// const activeHobbies = ['Hiking', ...hobbies];
// として値を入れることができる。

const person = {
  name: 'Max',
  age: 30,
};

const copiedPerson = {
  ...person,
}