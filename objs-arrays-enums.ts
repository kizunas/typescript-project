// enumを使用
enum Role{
  Admin,
  Read_only,
  Author,
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.Author, 
};

console.log(Role.Author)

if(person.role === Role.Author){
  console.log('管理ユーザー');
}


//以下の定義を仮定する
// Admin: 0
// Read only user: 1
// Author: 2