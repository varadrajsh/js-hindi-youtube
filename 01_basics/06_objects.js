//singleton
// Object.create //Create objects in multiple instance

//Objects literals
// Using Symbol

const mySymbol = Symbol("myKey1")

const jsUser = {
    name: "Varadraj",
    "full name": "Varadraj S Harwadekar",
    // mySymbol: "newKey1" //Wrong Symbol declaration and returns as string
    [mySymbol]: "newKey1", // Correct Way to declare symbol and returns symbol
    age: 38,
    email: "varadraj@google.com",
    location: "Hubballi",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]); // access keys value withode double quotes codes

// Change Value of Objects

// jsUser.email = "varadrajsh@chatgpt.com"
// console.log(jsUser)
// Object.freeze(jsUser); // Console after freezing objects
// jsUser.email = "varadrajsh@microsoft.com";
// console.log(jsUser);


// jsUser.greeting = function(){
//     console.log("hello Js User");
// }
// console.log(jsUser.greeting());
// jsUser.greetingTwo = function(){
//     console.log(`hello Js User: ${this.name}`);// Access object value using this keyword 
// }
// console.log(jsUser.greetingTwo());

//SingleTon and Non SingleTon Objects


// const fbUser = new Object(); //SingleTon object, check with console
const fbUser = {} // Above and This will get same output but this is Non SingleTon Object
fbUser.if = "abc123";
fbUser.name = "Varad"
fbUser.isLoggedIn = false

// console.log(fbUser);

const regularUser = {
    email: "some@google.com",
    fullName: {
        userFullName: {
            firstname: "Varadraj",
            lastName: "Harwadekar"
    }
}
}
// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// console.log(obj1,obj2,obj3) // Console and check the result
// const obj4 = Object.assign({}, obj1,obj2,obj3); //Try whitout parenthesis it will skip target{} and combine all into first object which is obj1
// console.log(obj4);

//Easy and most used is SPREAD OPERATOR
 const obj4 = {...obj1, ...obj2, ...obj3};
//  console.log(obj4);


//Accessing Array of Objects

const users = [
    {
        id:1,
        email: "no1@gmail.com"
    },
    {
        id:2,
        email: "no2@gmail.com"
    }
]
// console.log(fbUser);
// console.log(Object(fbUser)); // Access objects keys and value
// console.log(Object.keys(fbUser)); // Access objects keys and returns Array datatype
// console.log(Object.values(fbUser)); // Access objects values and returns Array datatype
// console.log(Object.entries(fbUser)); // Access objects with keys and values in combined array of each object 

// console.log(fbUser.hasOwnProperty("isLoggedIn")); // Result true because entry exists 
// console.log(fbUser.hasOwnProperty("isLogged")); // Result false because entry does not exists 

// Destructuring Objects

const course = {
    courseName: "Js Code in Hindi",
    courseFees: 999,
    courseInstructor: "Varadraj" 
}

// console.log(course.courseFees); // Trypical Way

const {courseInstructor} = course; //One method with full hand
const {courseInstructor: instructor} = course; //Another method with short hand

// console.log(courseInstructor);
// console.log(instructor); 

//Function is JavaScript

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(3, 4) // Pass arugments

// Method 1
function addAnotherNumber(num1, num2){
    let result= num1 + num2;
     return result;
 } 

const result = addAnotherNumber(3, 5)
// console.log(result);


//Method 2
function addSomeNumbers(num1, num2){
    return num1 + num2;
}

const resultNew = addSomeNumbers(3, 9);
// console.log(resultNew)

function loginUserMessage(username = "None"){
    if(!username){                     // (username === undefined)
        console.log("Please enter user name");
        return;
    }else{
        return `${username} just Logged In`;
    }
}
// console.log(loginUserMessage("Varadraj"));

// How to handle multiple multiple arguments

function calculateCartPrice(val1, val2, ...num){ // {...num} Try first to get all argument in one variable as array
    return num;
}
// console.log(calculateCartPrice(200, 300, 400, 500, 1000));

// Objects Handling

const user = {
    username: "Varadraj",
    price: 999
}

function handleObjects(anyObject){
    // console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}`);
}
// handleObjects(user); // pass declared object as argument
handleObjects({         // Pass directly object as argument
    username: "Varadraj S H",
    price: 9999
})

const myNewArray = [200,300,400,500];

function returnSecondArray(getArray){
    return getArray[2];
}

// console.log(returnSecondArray(myNewArray)); // Send declared array as argument
// console.log(returnSecondArray([200,300,400,500]))
