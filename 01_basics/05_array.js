const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "barman"];
console.log(marvel_heroes);
console.log(dc_heroes);

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
// console.log(marvel_heroes);
// console.log(dc_heroes);

// marvel_heroes.push(dc_heroes); 
// console.log(marvel_heroes);

// Difference o=in push and concat

//marvel_heroes.concat(dc_heroes); 
const all_heroes = marvel_heroes.concat(dc_heroes); // For concat we have to store it in variable
//console.log(all_heroes);
