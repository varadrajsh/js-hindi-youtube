// Immidiately Invoked Function Expression (IFFE)

// IIFE should be under parenthesis and (reference)(execution)
//Regular Function
(function chai(){
    console.log(`DB CONNECTED`);
})(); // ;semicolon is cumpolsory if ur writing more than one function

//Arrow Function
(()=>{
    console.log(`DB CONNECTED TWO`)
})();

// Function with argument
((name)=>{
    console.log(`DB CONNECTED BY: ${name}`);
})("Varadraj");