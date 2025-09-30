let a = 30;

if (true) {
  let a = 10;
  const b = 20;
  // console.log(`Inner Scope: ${a}`)
}
// console.log(a)

function outerFunc() {
  const name = "Varadraj S H";
  let innerCalled = false;

  function innerFunc() {
    const age =  38;
    innerCalled = true;
    console.log(name +  age);
  }
//   console.log(age); // result will be undefined becoz its outside the scope

  innerFunc();
  if (!innerCalled) {
    console.log("Inner Function is not executed");
  } else {
    console.log("Inner Function is executed");
  }
}
outerFunc();
