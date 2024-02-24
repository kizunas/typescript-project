// enumを使用
enum Role{
  Admin,
  Read_only,
  Author,
}

const person = { // object
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'], // array
  role: Role.Author, 
};

console.log(Role.Author)

if(person.role === Role.Author){
  console.log('管理ユーザー');
}


// array型
// let favoriteActivities: string[] // この場合は配列(favoriteActivities)はstring以外を受け付けない
// let favoriteActivities: any[] // この場合は配列(favoriteActivities)はどの値も受け付ける：例['sports', 1]


// tuple型(＊pushを用いた場合は、値を入れることができる点に注意が必要)
// 配列の長さを固定した型
// この指定を行わないと配列に値を入れることが可能になる
// const person = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// このオブジェクトのroleという配列にperson.role= [2, 'author', tanaka]のように３つ目が追加可能になるということ
// const person = {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple型でこの配列には一つ目はnumber,二つ目はstringしか入らない。
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };


// enum型
// const person = { // object
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'], // array
//   role: Role.Author, 
// };
// このpersonオブジェクトのroleは以下のような三つの定義があるとする。
// Admin: 0
// Read only user: 1
// Author: 2
// この場合はenum型を使うと以下のように書ける
// enum Role { // このRoleは任意につけられる型名である。そしてenum型を使うと自動時にAdmin: 0, Read_only: 1, Author: 2とIDが割り振られる。
//   Admin,
//   Read_only,
//   Author,
// }
// また、数字をこちらから指定できる
// 例えば
// enum Role {
//   Admin = 5,
//   Read_only,
//   Author,
// }
// のようにするとAdmin: 5, Read_only: 6, Author: 7
// 他にも
// enum Role {
//   Admin = 5,
//   Read_only = 100,
//   Author = 200,
// }
// 文字列を指定も可能
// enum Role {
//   Admin = 'ADMIN',
//   Read_only = 100,
//   Author = 200,
// }