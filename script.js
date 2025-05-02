let obj = {
  name: "manjula",
  age: 30,
  email: "mn@gmail.com",
};
delete obj.age;
console.log(obj);
console.log((obj.age = 60));
console.log(obj);
