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

console.log(fbUser.hasOwnProperty("isLoggedIn")); // Result true because entry exists 
console.log(fbUser.hasOwnProperty("isLogged")); // Result false because entry does not exists 
