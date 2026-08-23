// Question 1 (Easy) — Find Expensive Products
 let prices= [100,250,500,150,700];
// Create a new array containing only prices greater than 300.

let expensiveProducts = prices.filter(price=>{
    return price > 300
})
console.log(expensiveProducts)

//Question 2 (Moderate) — Student Average
let marks= [80,90,70,85,95];
//Calculate the average marks of all students.
let totalSum = marks.reduce((acc,cur)=>{
    return (acc + cur)
},0)
let average = totalSum / marks.length
console.log(average)

//Question 3 (Hard) — Most Frequent Number
let numbers= [2,2,1,2,3,2,4,2,5,1,1,2,1];
//Find the number that appears the most.

let count = {};

for (let num of numbers) {
    if (count[num]) {
        count[num] = count[num] + 1;
    } else {
        count[num] = 1;
    }
}

let maxCount = 0;
let mostFrequent;

for (let num in count) {
    if (count[num] > maxCount) {
        maxCount = count[num];
        mostFrequent = num;
    }
}

console.log(mostFrequent);