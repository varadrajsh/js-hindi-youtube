const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "barman"];
// console.log(marvel_heroes);
// console.log(dc_heroes);

// marvel_heroes.push(dc_heroes); 
// console.log(marvel_heroes);

// Difference o=in push and concat

//marvel_heroes.concat(dc_heroes); 
//const all_heroes = marvel_heroes.concat(dc_heroes); // For concat we have to store it in variable
//console.log(all_heroes);

// using spread operators
// const all_heroes_new = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes_new);


// Usinf Flat Array
// const another_array = [1,2,3,[4,5],[6,[7,8]],9];
// console.log(another_array);
// const flat_array = another_array.flat(Infinity);
// console.log(flat_array);

//Conversion of Arrays
console.log(Array.isArray("Varadraj"));
console.log(Array.from("Varadraj"));
console.log(Array.from({name: "Varadraj"})); // Returns Empty Array (Very Important)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //Returns Array