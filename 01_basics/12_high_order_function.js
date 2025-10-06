const coding = ["JS", "C++", "Python", "Java"];

coding.forEach(function(item){
    // console.log(item);
})
//Another CallBack function Variant
//Using Arrow function
coding.forEach((varad)=>{ // pass any word as argument
    // console.log(varad);
})

// Send fucntion as callBack Function

// function printMe(varad){
    // console.log(varad);
// }
// coding.forEach(printMe) // type only refernce, dont execute the function

// For Each has multuple parameters to 

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

// Acces multiple objects from arrays
const codes = [
    {languageName: "Java",
     languageCode: "java"
    },
    {
        languageName: "Python",
        languageCode: "py"
    },
    {
        languageName: "C Sharp",
        languageCode: "C#"
    }
];

codes.forEach((item)=>{
    console.log(item.languageName);
})