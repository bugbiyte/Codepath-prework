
// example of using reduce to sum an array of numbers


//find the sum of an array of numbers without using reduce


const nums [20, 30, 40, 50, 60, 70, 80, 90, 100];

let total  = 0;
for (let num of nums){
    total += num;

}
console.log(total); // 550  


const words = ["hello", "i", "love", "you"];
const result = words.reduce(function(accumulator, nextWord) {
    return accumulator + " " + nextWord;
});
result; // "hello i love you"

