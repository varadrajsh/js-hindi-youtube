const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums
                    .map( (varad) => varad * 10)
                    .map( (varad) => varad + 1)
                    .filter( (varad) => varad >= 40)

console.log(newNums);
