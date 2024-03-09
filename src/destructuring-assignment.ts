const hobbies = ['Sports', 'Cooking'];

// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
// これを分割代入すると以下のように書ける
const [hobby1, hobby2] = hobbies;

// オブジェクトの分割代入
const person = {
  firstName: 'Max',
  age: 30,
};

// const {firstName, age} = person 
// このfirstNameとageはpersonオブジェクトのキーと同じ名前である必要がある。
// 名前を変えるにはコロンをつけて以下のように記す
const {firstName: userName, age} = person 