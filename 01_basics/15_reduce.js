const myNums = [1,2,3,4];

// const myTotal = myNums.reduce(function (accumulator, currentValue){
//     //Check the value by console log
//     console.log(`Acc: ${accumulator} and Currval: ${currentValue}`);
//     return accumulator + currentValue
// },0) // Initial Value
// console.log(myTotal);


// Reduce using Array Function

const shoppingCart = [
    {
        courseName: "Js Course",
        price: 999
    },
    {
        courseName: "Python Course",
        price: 2999
    },
    {
        courseName: "Java Course",
        price: 1999
    },
    {
        courseName: "C# Course",
        price: 3999
    }
]

const priceTotal = 
shoppingCart.reduce( (acc, val) => acc + val.price, 0);

console.log(priceTotal);
