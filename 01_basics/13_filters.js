const myFilters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newFilter = myFilters.filter((nums) => nums > 4);
// console.log(newFilter);

// If Curly braces then we should use return keyword
const newFilter1 = myFilters.filter((nums) => {
  return nums > 4;
});
// console.log(newFilter1);

// Using forEach loop

const myForeach = [];

myFilters.forEach((nums) => {
  if (nums > 4) {
    myForeach.push(nums);
  }
});
// Check with all this outputs

// console.log(`For Each loop : ${myForeach}`);
// console.log(myForeach);
// console.log(`${JSON.stringify(myForeach)}`);
// console.log(myForeach[5]);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1981, edition: 1989 }
];

let userBooks = books.filter( (varadBooks) => varadBooks.genre === "History");
userBooks = books.filter( (varadBooks) => {
    return varadBooks.publish >= 1981 && varadBooks.genre === "Non-Fiction"
})
console.log(userBooks);

