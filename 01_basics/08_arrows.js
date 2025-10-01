const user = {
  username: "varadraj",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welome to Our Website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sairam"
// user.welcomeMessage();

// console.log(this);

// function varad(){
//   let username= "varadraj"
//   console.log(this.username); // In functon we cant use THIS ,
// }
// varad() // Result will be undefined.

// Here also this will not work in fuction either it is in variable also
// const thiskeyword = function varad(){
//   let username= "varadraj"
//   console.log(this.username); // In functon we cant use THIS ,
// }
// varad() // Result will be undefined

// Basic Arrow Function (implicit return)
// const varad = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(varad(3,5))

//Arrow with explicit return

// const varad = (num1, num2) => num1 + num2 // Example 1
//or
// const varad = (num1, num2) => (num1+num2) // Example 2 most used in React

// const varad = (num1, num2) => ({username: "Varadraj"}) // We need pernthesis to return Objects
// console.log(varad(3,4))
